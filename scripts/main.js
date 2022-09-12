import { addCustomOrder } from "./database.js"
import { Orders } from "./orders.js"
import { interiorOptions } from "./renderInterior.js"
import { paintOptions } from "./renderPaints.js"
import { techOptions } from "./renderTech.js"
import { wheelOptions } from "./renderWheels.js"

document.addEventListener(
    "click",
    (clickEvent) => {
        if (clickEvent.target.id === "submit-order") {
            addCustomOrder()
        }
    }
)

const renderHTML = () => {
    let htmlSelector = document.querySelector('#main-container')
    let html = ``
    html += `<h1>Cars R Us</h1>`
    html += `<div><h3>Interior Options</h3>${interiorOptions()}</div>`
    html += `<div><h3>Paint Options</h3>${paintOptions()}</div>`
    html += `<div><h3>Tech Packages</h3>${techOptions()}</div>`
    html += `<div><h3>Wheel Types</h3>${wheelOptions()}</div>`
    html += `<button id="submit-order">Submit Order</button>`
    html += `<div><h2>Custom Orders</h2>${Orders()}</div>`

    htmlSelector.innerHTML = html
    return htmlSelector
}

renderHTML()

document.addEventListener("stateChanged", event => {
    renderHTML()
})