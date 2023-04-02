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
        projectsMenu.style.transform = "scale(0.5)";
        projectsMenu.style.opacity = "0";

        openProjectMenu = false
    }

})

competenceBtn.addEventListener("click", () => {
    competenceBtn.classList.add("activebtn")
    projectBtn.classList.remove("activebtn")
})

const projects = document.getElementsByClassName("project")
const popups = document.getElementsByClassName("popup")

// Link popup with correct project button
let projectRelatedPopup = new Map()

for (let i = 0; i < projects.length; i++) {
    for (let j = 0; j < popups.length; j++) {
        const projectElement = projects.item(i)
        const popupElement = popups.item(j)

        const name = popupElement.id.slice(0, popupElement.id.indexOf("popup"))

        if (projectElement.id == name) {
            projectRelatedPopup.set(projectElement.id, popupElement.id)
        }
    }
}

projectRelatedPopup.forEach((val, key) => {
    const popup = document.getElementById(val)
    const project = document.getElementById(key)

    project.addEventListener("click", () => window.open(project.getAttribute("custom_url")))
    project.addEventListener("mouseenter", () => setPopupCentered(popup, project))
    project.addEventListener("mouseleave", () => popup.style.setProperty("visibility", "hidden"))
})

function setPopupCentered(popup, button) {
    const buttonBoundingRect = button.getBoundingClientRect()
    const popupBoundingRect = button.getBoundingClientRect()

    popup.style.setProperty("visibility", "visible")
    popup.style.setProperty("left", `${buttonBoundingRect.x + buttonBoundingRect.width}px`)
    popup.style.setProperty("top", `${((buttonBoundingRect.y + buttonBoundingRect.height) - popupBoundingRect.height / 2) - buttonBoundingRect.height / 2}px`)
}