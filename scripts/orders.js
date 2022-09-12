import { getInterior, getOrders, getPaint, getTech, getWheels } from "./database.js"

const buildOrder = (order) => {
    const chosenPaint = getPaint()
    const chosenInterior = getInterior()
    const chosenTech = getTech()
    const chosenWheel = getWheels()

    const foundPaint = chosenPaint.find(
        (paint) => {
            return paint.id === order.paintId
        }
    )
    const foundInterior = chosenInterior.find(
        (interior) => {
            return interior.id === order.interiorId
        }
    )
    const foundTech = chosenTech.find(
        (tech) => {
            return tech.id === order.techId
        }
    )
    const foundWheel = chosenWheel.find(
        (wheel) => {
            return wheel.id === order.wheelId
        }
    )
    const totalCost = foundPaint.price + foundInterior.price + foundTech.price + foundWheel.price
    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })
    return `<li>
    Order #${order.id} cost ${costString}
    </li>`
}

export const Orders = () => {
    const order = getOrders()
    let html = "<ul>"

    const listOrderItems = order.map(buildOrder)
    html += listOrderItems.join("")
    html += "</ul>"
    return html
}