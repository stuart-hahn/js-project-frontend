document.addEventListener('DOMContentLoaded', () => {
    const endpoint = "http://localhost:3000/api/v1/projects/"
    fetch(endpoint)
        .then(res => res.json())
        .then(projects => {
            projects.data.forEach(project => {
                console.log(project)
            })
        })
});