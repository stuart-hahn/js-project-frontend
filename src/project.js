class Project {
    constructor(project) {
        this.id = project.id
        this.title =  project.attributes.title
        Project.all.push(this)
    }

    renderProject() {
        return `<li data-id=${this.id}>${this.title}</li>`;
    }

    static findById(id) {
        return this.all.find(project => project.id === id)
    }
}

Project.all = [];