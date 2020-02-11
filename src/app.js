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
        const newProjectLi = document.createElement('li')
        const newProjectInput = document.createElement('input')
        newProjectInput.id = "create-project-input"
        newProjectInput.classList.add("u-full-width")
        newProjectInput.placeholder = "Create Project ..."
        projectsList.innerHTML = ''
        Project.all.forEach(project => {
            projectsList.appendChild(project.renderProject())
        })
        projectsList.insertAdjacentElement("afterbegin", newProjectLi)
        newProjectLi.insertAdjacentElement("afterbegin", newProjectInput)
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