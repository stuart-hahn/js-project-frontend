class Project {
    constructor(project) {
        this.id = project.id
        this.title =  project.attributes.title
    }

    renderProject() {
        console.log(this)
        return `
        <li>
          <h3>${this.title}
            <button data-id=${this.id}>edit</button>
          </h3>
        </li>
        `;
      }
}

Project.all = [];