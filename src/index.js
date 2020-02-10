document.addEventListener('DOMContentLoaded', () => {
    const endpoint = "http://localhost:3000/api/v1/projects/"
    fetch(endpoint)
        .then(res => res.json())
        .then(projects => {
            projects.data.forEach(project => {
                const newProject = new Project(project.attributes.title)
                document.querySelector('.projects-list').innerHTML += newProject.renderProject();
            })
        })
});