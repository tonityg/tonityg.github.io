console.log("Initialisé !");

const projectBtn = document.getElementById("projectbtn")
const bioBtn = document.getElementById("biobtn")
const contactBtn = document.getElementById("contactbtn")

const projectsMenu = document.getElementById("projects")
const bioMenu = document.getElementById("bio")
const contactMenu = document.getElementById("contact")

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

contactBtn.addEventListener("click", () => {
    const isActive = contactBtn.classList.contains("activebtn")
    closeAllWindow()

    if (isActive) {
        openOrCloseContactMenu(isActive)
    }
    else {
        openOrCloseContactMenu(isActive)
    }
})

function closeAllWindow() {
    openOrCloseProjectMenu(true)
    openOrCloseContactMenu(true)
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

function openOrCloseContactMenu(opened) {
    if (!opened) {
        contactBtn.classList.add("activebtn")
        contactMenu.style.pointerEvents = "all"
        contactMenu.style.transform = "scale(1)";
        contactMenu.style.opacity = "1";
    } else {
        contactBtn.classList.remove("activebtn")
        contactMenu.style.pointerEvents = "none"
        contactMenu.style.transform = "scale(0.5)";
        contactMenu.style.opacity = "0";
    }
}

// projectBtn.addEventListener("click", () => {
//     if (!openProjectMenu) {
//         projectBtn.classList.add("activebtn")
//         competenceBtn.classList.remove("activebtn")

//         projectsMenu.style.pointerEvents = "all"
//         projectsMenu.style.transform = "scale(1)";
//         projectsMenu.style.opacity = "1";

//         openProjectMenu = true
//     } else {
//         projectBtn.classList.remove("activebtn")

//         projectsMenu.style.pointerEvents = "none"
//         projectsMenu.style.transform = "scale(0.5)";
//         projectsMenu.style.opacity = "0";

//         openProjectMenu = false
//     }
// })

// competenceBtn.addEventListener("click", () => {
//     competenceBtn.classList.add("activebtn")
//     projectBtn.classList.remove("activebtn")
// })



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