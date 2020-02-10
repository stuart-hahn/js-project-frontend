class Project {
    constructor(title) {
        this.title =  title
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