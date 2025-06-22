import "./scss/index.scss"
console.log("hello")
document.addEventListener("DOMContentLoaded", () => {
    const h1 = document.querySelector("h1")
    h1?.addEventListener("click", () => {
        alert("Hwello")
    })
})