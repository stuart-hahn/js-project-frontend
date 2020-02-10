class Adapter {
    constructor() {
        this.baseUrl = "http://localhost:3000/api/v1";
    }

    fetchProjects() {
        return fetch(`${this.baseUrl}/projects`).then(res => res.json())
    }
}