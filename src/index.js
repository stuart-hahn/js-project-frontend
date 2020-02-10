document.addEventListener('DOMContentLoaded', () => {
    const app = new App()
    app.attachEventListeners()

    const endpoint = "http://localhost:3000/api/v1/projects/"
    fetch(endpoint)
        .then(res => res.json())
        .then(projects => {
            projects.data.forEach(project => {
                console.log(project)
                const newProject = new Project(project)
                document.querySelector('.projects-list').innerHTML += newProject.renderProject();
            })
        })
});