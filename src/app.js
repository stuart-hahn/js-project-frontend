class App {
    constructor() {
        this.adapter = new Adapter()
        this.createProjects = this.createProjects.bind(this)
        this.addProjects = this.addProjects.bind(this)
    }

    attachEventListeners() {
        document.querySelector(".projects-list").addEventListener("click", e => {
            const id = e.target.dataset.id
            const project = Project.findById(id)
            console.log(project)
        })
    }

    createProjects(projects) {
        projects.data.forEach(project => {
            new Project(project)
        })
        this.addProjects()
    }

    addProjects() {
        document.querySelector(".projects-list").innerHTML = ''
        Project.all.forEach(project => {
            document.querySelector(".projects-list").innerHTML += project.renderProject()
        })
    }

}