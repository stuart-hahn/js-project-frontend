class Project {
    constructor(project) {
        this.id = project.id
        this.title =  project.attributes.title
        Project.all.push(this)
    }

    renderProject() {
        return `
            <li>
                <h3>${this.title}
                    <button data-id=${this.id}>edit</button>
                </h3>
            </li>
        `;
        }

    static findById(id) {
        return this.all.find(project => project.id === id)
    }
}

Project.all = [];