console.log("Initialisé !");

const projectBtn = document.getElementById("projectbtn")
const competenceBtn = document.getElementById("competencebtn")

const projectsMenu = document.getElementById("projects")

projectBtn.addEventListener("click", () => {
    projectBtn.classList.add("activebtn")
    competenceBtn.classList.remove("activebtn")

    projectsMenu.style.visibility = "visible"
    projectsMenu.style.bottom = "25px";
})

competenceBtn.addEventListener("click", () => {
    competenceBtn.classList.add("activebtn")
    projectBtn.classList.remove("activebtn")
})