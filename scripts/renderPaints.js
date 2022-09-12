import { getPaint, setPaint } from "./database.js"

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.name === "paint") {
            const optionPicked = changeEvent.target.value
            setPaint(parseInt(optionPicked))
        }
    }
)

export const paintOptions = () => {
    const paintSelection = getPaint()
    let paintHTML = "<ul id='paint-options'>"
    const listItems = paintSelection.map(paint => {
        return `<li>
        <input type="radio" value="${paint.id}" name="paint" /> ${paint.color}
        </li>`
    })
    paintHTML += listItems.join("")
    paintHTML += "</ul>"
    return paintHTML
}