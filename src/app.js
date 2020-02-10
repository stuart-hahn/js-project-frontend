class App {
    attachEventListeners() {
        document.querySelector(".projects-list").addEventListener("click", (e) => {
            console.log('clicked ', e.target)
        })
    }
}