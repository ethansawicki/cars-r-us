import { getWheels, setWheel } from "./database.js";

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "wheel-options") {
            const optionPicked = changeEvent.target.value
            setWheel(parseInt(optionPicked))
        }
    }
)

export const wheelOptions = () => {
    const wheelSelection = getWheels()
    let wheelHTML = "<select id='wheel-options'>"
    const listWheelItems = wheelSelection.map(wheel => {
        return `<option value="${wheel.id}">${wheel.wheelType}</option>`
    })
    wheelHTML += listWheelItems.join("")
    wheelHTML += "</select>"
    return wheelHTML
}