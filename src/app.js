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
        projectsList.innerHTML = ''
        Project.all.forEach(project => {
            projectsList.appendChild(project.renderProject())
        })
    }

    addTasks(project) {
        const projectId = parseInt(project.id)
        const tasksList = document.querySelector(".tasks-list")
        tasksList.innerHTML = ''
        Task.all.forEach(task => {
            if (task.projectId === projectId) {
                tasksList.appendChild(task.renderTask())
            }
        })
    }

}