class Task {
    constructor(task) {
        this.id = task.id
        this.title = task.attributes.title
        this.project = task.attributes.project
        Task.all.push(this)
    }

    static findById(id) {
        return this.all.find(task => task.id === id)
    }
}

Task.all = [];