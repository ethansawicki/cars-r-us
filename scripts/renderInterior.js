import { getInterior, setInterior } from "./database.js";

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.name === "interior") {
            const optionPicked = changeEvent.target.value
            setInterior(parseInt(optionPicked))
        }
    }
)

export const interiorOptions = () => {
    const interiorSelection = getInterior()
    let interiorHTML = "<ul id='interior-options'>"
    const listItems = interiorSelection.map(interior => {
        return `<li>
        <input type="radio" value="${interior.id}" name="interior" /> ${interior.fabric}
        </li>`
    })
    interiorHTML += listItems.join("")
    interiorHTML += "</ul>"
    return interiorHTML
}