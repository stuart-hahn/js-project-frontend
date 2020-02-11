class Task {
    constructor(task) {
        this.id = task.id
        this.title = task.attributes.title
    }

    renderTask() {
        const li = document.createElement('li')
        li.setAttribute("data-id", this.id)
        li.innerText = this.title
        return li
    }
}