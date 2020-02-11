class Adapter {
    constructor() {
        this.baseUrl = "http://localhost:3000/api/v1";
        this.headers = {
            "content-type": "application/json",
            Accept: "application/json"
        }
    }

    get(url) {
        return fetch(url).then(res => res.json())
    }

    fetchProjects() {
        return this.get(`${this.baseUrl}/projects`)
    }

    fetchTasks() {
        return this.get(`${this.baseUrl}/tasks`)
    }
}