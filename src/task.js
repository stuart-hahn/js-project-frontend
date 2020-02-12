class Task {
    constructor(task) {
        this.id = task.id
        this.title = task.title
        this.projectId = task.project_id
        Task.all.push(this)
    }

//     id: 1
// title: "Seed Task 1 for Project 1"
// project_id: 1
// created_at: "2020-02-11T18:23:13.104Z"
// updated_at: "2020-02-11T18:23:13.104Z"

    renderTask(task) {
        console.log("in renderTask", task)
        // const li = document.createElement('li')
        // li.setAttribute("data-id", this.id)
        // li.setAttribute("projectId", this.projectId)
        // li.innerText = this.title
        // return li
    }

    static findById(id) {
        return this.all.find(task => task.id === id)
    }
}

Task.all = [];