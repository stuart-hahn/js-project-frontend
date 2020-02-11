class App {
    constructor() {
        this.adapter = new Adapter()
        this.createProjects = this.createProjects.bind(this)
        this.createTasks = this.createTasks.bind(this)
        this.addProjects = this.addProjects.bind(this)
        this.addTasks = this.addTasks.bind(this)
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
    }

    createProjects(projects) {
        projects.data.forEach(project => {
            new Project(project)
        })
        this.addProjects()
    }

    createTasks(tasks) {
        tasks.data.forEach(task => {
            new Task(task)
        })
    }

    addProjects() {
        const projectsList = document.querySelector(".projects-list")
        const projects = Project.all
        projectsList.innerHTML = ''
        projects.map((project, i) => {
            projectsList.appendChild(project.renderProject())
        })
    }

    addTasks(project) {
        const projectId = parseInt(project.id)
        const tasksList = document.querySelector(".tasks-list")
        tasksList.innerHTML = ''
        const projectTitle = document.querySelector(".tasks-list-title")
        projectTitle.innerText = project.title + ` Tasks`
        Task.all.forEach(task => {
            if (task.projectId === projectId) {
                tasksList.appendChild(task.renderTask())
            }
        })
    }

}