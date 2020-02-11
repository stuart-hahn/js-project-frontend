class Task {
    constructor(task) {
        this.id = task.id
        this.title = task.attributes.title
        this.projectId = task.attributes.project.id
        Task.all.push(this)
    }

    renderTask() {
        const li = document.createElement('li')
        li.setAttribute("data-id", this.id)
        li.innerText = this.title
        return li
    }

    static findById(id) {
        return this.all.find(task => task.id === id)
    }
}

Task.all = [];