import { getTech, setTech } from "./database.js";

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "tech-options") {
            const optionPicked = changeEvent.target.value
            setTech(parseInt(optionPicked))
        }
    }
)

export const techOptions = () => {
    const techSelection = getTech()
    let techHTML = "<select id='tech-options'>"
    const listTechItems = techSelection.map(tech => {
        return `<option value="${tech.id}">${tech.package} (${tech.details})</option>`
    })
    techHTML += listTechItems.join("")
    techHTML += "</select>"
    return techHTML
}