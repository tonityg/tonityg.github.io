console.log("Initialisé !");

const projectBtn = document.getElementById("projectbtn")
const competenceBtn = document.getElementById("competencebtn")

const projectsMenu = document.getElementById("projects")

let openProjectMenu = false

projectBtn.addEventListener("click", () => {
    if (!openProjectMenu) {
        projectBtn.classList.add("activebtn")
        competenceBtn.classList.remove("activebtn")

        projectsMenu.style.pointerEvents = "all"
        projectsMenu.style.transform = "scale(1)";
        projectsMenu.style.opacity = "0.8";

        openProjectMenu = true
    } else {
        projectBtn.classList.remove("activebtn")

        projectsMenu.style.pointerEvents = "none"
        projectsMenu.style.transform = "scale(0.2)";
        projectsMenu.style.opacity = "0";

        openProjectMenu = false
    }

})

competenceBtn.addEventListener("click", () => {
    competenceBtn.classList.add("activebtn")
    projectBtn.classList.remove("activebtn")
})