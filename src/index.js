document.addEventListener('DOMContentLoaded', () => {
    const app = new App()
    app.adapter.fetchProjects().then(app.createProjects)
    // app.adapter.fetchTasks().then(app.createTasks)
    app.attachEventListeners()
});