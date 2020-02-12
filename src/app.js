class App {
    constructor() {
        this.adapter = new Adapter()
        this.createProjects = this.createProjects.bind(this)
        this.addProjects = this.addProjects.bind(this)
        this.addTasks = this.addTasks.bind(this)
        this.createTaskForm = this.createTaskForm.bind(this)
    }

    attachEventListeners() {
        document.querySelector(".projects-list").addEventListener("click", e => {
            const id = e.target.dataset.id
            const project = Project.findById(id)
            this.addTasks(project)
        })

        document.querySelector(".create-project-form").addEventListener("submit", e => {
            e.preventDefault()
            const title = document.querySelector("#create-project-input").value
            const projectJSON = { title }
            this.adapter.createProject(projectJSON)
            .then(project => {
                new Project(project.data)
                this.addProjects()
            })
            e.target.reset()
        })

        document.querySelector(".create-task-form").addEventListener("submit", e => {
            e.preventDefault()
            const title = document.querySelector("#create-task-input")
            e.target.reset()
        })

    }

    createProjects(projects) {
        projects.data.forEach(project => {
            new Project(project)
        })
        this.addProjects()
    }

    addProjects() {
        const projectsList = document.querySelector(".projects-list")
        const projects = Project.all
        projectsList.innerHTML = ''
        projects.forEach((project) => {
            projectsList.appendChild(project.renderProject())
        })
    }

    addTasks(project) {
        const tasksList = document.querySelector(".tasks-list")
        tasksList.innerHTML = ''
        
        const projectTitle = document.querySelector(".tasks-list-title")
        projectTitle.innerText = project.title + ` Tasks`

        project.tasks.forEach(task => {
            const li = document.createElement("li")
            li.innerText = task.title
            tasksList.appendChild(li)
        })
        
        if (tasksList.innerHTML === '') {
            const noTasks = document.createElement('li')
            noTasks.innerText = "There are no tasks for this project yet..."
            tasksList.appendChild(noTasks)
        }

        this.createTaskForm(project)
    }

    createTaskForm(project) {
        const taskForm = document.querySelector(".create-task-form")
        taskForm.innerHTML = ''

        const projectId = project.id

        const row = document.createElement('div')
        row.classList.add("row")
        taskForm.appendChild(row)

        const div = document.createElement('div')
        div.classList.add("column")
        row.appendChild(div)

        const h4 = document.createElement('h4')
        h4.innerText = `New Task for ${project.title}`

        const label = document.createElement('label')
        label.setAttribute("for", "create-task-input")
        label.innerText = "Task Title"

        const input = document.createElement('input')
        input.type = "text"
        input.setAttribute("project", projectId)
        input.id = "create-task-input"
        input.placeholder = "New Task Title..."

        const button = document.createElement('input')
        button.classList.add("button")
        button.classList.add("button-primary")
        button.type = "submit"
        button.setAttribute("value", "Create Task")

        div.appendChild(h4)
        div.appendChild(label)
        div.appendChild(input)
        taskForm.appendChild(button)
    }

}