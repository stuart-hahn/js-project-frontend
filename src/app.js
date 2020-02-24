class App {
    constructor() {
        this.adapter = new Adapter()
        this.createProjects = this.createProjects.bind(this)
        this.addProjects = this.addProjects.bind(this)
        this.addTasks = this.addTasks.bind(this)
        this.createTaskForm = this.createTaskForm.bind(this)
        this.addTask = this.addTask.bind(this)
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
            const title = document.querySelector("#create-task-input").value
            const project_id = parseInt(e.target.id)
            const taskJSON = { title, project_id }
            this.adapter.createTask(taskJSON)
            .then(task => {
                new Task(task.data)
                this.addTask(task)
            })
            e.target.reset()
        })

        document.querySelector("#sort-projects-button").addEventListener("click", e => {
            this.adapter.fetchProjects()
            .then(projects => {
                const sortedProjects = projects.data.sort(function(a, b) {
                    var nameA = a.attributes.title.toUpperCase(); // ignore upper and lowercase
                    var nameB = b.attributes.title.toUpperCase(); // ignore upper and lowercase
                    if (nameA < nameB) {
                      return -1;
                    }
                    if (nameA > nameB) {
                      return 1;
                    }
                  
                    // names must be equal
                    return 0;
                });
                console.log("Before clear", Project.all)
                Project.all = []
                this.createProjects(projects)
                console.log("After clear", Project.all)
            })
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

    addTask(task) {
        const tasksList = document.querySelector(".tasks-list")
        const newTaskLi = document.createElement("li")
        newTaskLi.innerText = task.data.attributes.title
        tasksList.appendChild(newTaskLi)
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

        this.createTaskForm(project)
    }

    createTaskForm(project) {
        const taskForm = document.querySelector(".create-task-form")
        taskForm.id = project.id
        taskForm.innerHTML = ''

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