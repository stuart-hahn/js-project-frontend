document.addEventListener('DOMContentLoaded', () => {
    const app = new App()
    app.attachEventListeners()
    app.adapter.fetchProjects().then(app.createProjects)
    app.adapter.fetchTasks().then(app.createTasks)
});