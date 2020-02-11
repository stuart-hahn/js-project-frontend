class Project {
    constructor(project) {
        this.id = project.id
        this.title =  project.attributes.title
        this.tasks = project.attributes.tasks
        Project.all.push(this)
    }

    renderProject() {
        const li = document.createElement('li')
        li.setAttribute("data-id", this.id)
        li.innerText = this.title
        return li
    }

    static findById(id) {
        return this.all.find(project => project.id === id)
    }
}

Project.all = [];