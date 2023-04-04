console.log("Initialisé !");

const projectBtn = document.getElementById("projectbtn")
const bioBtn = document.getElementById("biobtn")

const projectsMenu = document.getElementById("projects")
const bioMenu = document.getElementById("bio")

// SET RANDOM WALLPAPER
const rand = Math.floor((Math.random() * 5) + 1 - 0.0001)
const background = document.getElementById("background")

background.style.setProperty("background-image", `url(./assets/wallpaper0${rand}.jpg)`)

// ADD LOGIC TO MENU BAR BUTTONS
projectBtn.addEventListener("click", () => {
    const isActive = projectBtn.classList.contains("activebtn")
    closeAllWindow()

    if (isActive) {
        openOrCloseProjectMenu(isActive)
    }
    else {
        openOrCloseProjectMenu(isActive)
    }
})

bioBtn.addEventListener("click", () => {
    const isActive = bioBtn.classList.contains("activebtn")
    closeAllWindow()

    if (isActive) {
        openOrCloseBioMenu(isActive)
    }
    else {
        openOrCloseBioMenu(isActive)
    }
})

// professionalProjectsBtn.addEventListener("click", () => {
//     const isActive = professionalProjectsBtn.classList.contains("activebtn")
//     closeAllWindow()

//     if (isActive) {
//         openOrCloseProfessionalProjectsMenu(isActive)
//     }
//     else {
//         openOrCloseProfessionalProjectsMenu(isActive)
//     }
// })

function closeAllWindow() {
    openOrCloseProjectMenu(true)
    // openOrCloseProfessionalProjectsMenu(true)
    openOrCloseBioMenu(true)
}

function openOrCloseProjectMenu(opened) {
    if (!opened) {
        projectBtn.classList.add("activebtn")
        projectsMenu.style.pointerEvents = "all"
        projectsMenu.style.transform = "scale(1)";
        projectsMenu.style.opacity = "1";
    } else {
        projectBtn.classList.remove("activebtn")
        projectsMenu.style.pointerEvents = "none"
        projectsMenu.style.transform = "scale(0.5)";
        projectsMenu.style.opacity = "0";
    }
}

function openOrCloseBioMenu(opened) {
    if (!opened) {
        bioBtn.classList.add("activebtn")
        bioMenu.style.pointerEvents = "all"
        bioMenu.style.transform = "scale(1)";
        bioMenu.style.opacity = "1";
    } else {
        bioBtn.classList.remove("activebtn")
        bioMenu.style.pointerEvents = "none"
        bioMenu.style.transform = "scale(0.5)";
        bioMenu.style.opacity = "0";
    }
}

// function openOrCloseProfessionalProjectsMenu(opened) {
//     if (!opened) {
//         professionalProjectsBtn.classList.add("activebtn")
//         professionalprojectsMenu.style.pointerEvents = "all"
//         professionalprojectsMenu.style.transform = "scale(1)";
//         professionalprojectsMenu.style.opacity = "1";
//     } else {
//         professionalProjectsBtn.classList.remove("activebtn")
//         professionalprojectsMenu.style.pointerEvents = "none"
//         professionalprojectsMenu.style.transform = "scale(0.5)";
//         professionalprojectsMenu.style.opacity = "0";
//     }
// }


// LINK POPUP WITH PROJECT BUTTON

const projects = document.getElementsByClassName("project")
const popups = document.getElementsByClassName("popup")

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