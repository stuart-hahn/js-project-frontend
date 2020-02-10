class App {
    constructor() {
        this.adapter = new Adapter()
    }
    
    attachEventListeners() {
        document.querySelector(".projects-list").addEventListener("click", e => {
            const id = e.target.dataset.id
            const project = Project.findById(id)
            console.log(project)
        })
    }
}