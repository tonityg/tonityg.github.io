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

const stuffindustrypopup = document.getElementById("stuffindustrypopup")
const patchthebugpopup = document.getElementById("patchthebugpopup")

const stuffIndustryButton = document.getElementById("stuffindustry")
const pathTheBugButton = document.getElementById("patchthebugs")

stuffIndustryButton.addEventListener("click", () => {
    window.open(stuffIndustryButton.getAttribute("custom_url"))
})

stuffIndustryButton.addEventListener("mouseenter", () => {
    setPopupCentered(stuffindustrypopup, stuffIndustryButton)
})

stuffIndustryButton.addEventListener("mouseleave", () => {
    stuffindustrypopup.style.setProperty("visibility", "hidden")
})

pathTheBugButton.addEventListener("click", () => {
    window.open(patchthebugpopup.getAttribute("custom_url"))
})

pathTheBugButton.addEventListener("mouseenter", () => {
    setPopupCentered(patchthebugpopup, pathTheBugButton)
})

pathTheBugButton.addEventListener("mouseleave", () => {
    patchthebugpopup.style.setProperty("visibility", "hidden")
})

function setPopupCentered(popup, button) {
    const buttonBoundingRect = button.getBoundingClientRect()
    const popupBoundingRect = button.getBoundingClientRect()

    popup.style.setProperty("visibility", "visible")
    popup.style.setProperty("left", `${buttonBoundingRect.x + buttonBoundingRect.width}px`)
    popup.style.setProperty("top", `${((buttonBoundingRect.y + buttonBoundingRect.height) - popupBoundingRect.height / 2) - buttonBoundingRect.height / 2}px`)
}