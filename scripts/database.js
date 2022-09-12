const database = {
    interiors: [{
        id: 1,
        fabric: "Beige Fabric",
        price: 1999
    },
    {
        id: 2,
        fabric: "Charcoal Fabric",
        price: 2999
    },
    {
        id: 3,
        fabric: "White Leather",
        price: 4999
    },
    {
        id: 4,
        fabric: "Black Leather",
        price: 5999
    }],
    paints: [{
        id: 1,
        color: "Silver",
        price: 1000
    },
    {
        id: 2,
        color: "Midnight Blue",
        price: 2000
    },
    {
        id: 3,
        color: "Firebrick Red",
        price: 3000
    },
    {
        id: 4,
        color: "Spring Green",
        price: 4000
    }],
    technology: [{
        id: 1,
        package: "Basic Package",
        details: "Basic sound system",
        price: 5000
    },
    {
        id: 2,
        package: "Navigation Package",
        details: "Includes integrated navigation controls",
        price: 6000
    },
    {
        id: 3,
        package: "Visibility Package",
        details: "Includes side and rear cameras",
        price: 7000
    },
    {
        id: 4,
        package: "Ultra Package",
        details: "Includes navigation and visibility packages",
        price: 8000
    }],
    wheels: [{
        id: 1,
        wheelType: "17-inch Pair Radial",
        price: 500
    },
    {
        id: 2,
        wheelType: "17-inch Pair Radial Black",
        price: 1000
    },
    {
        id: 3,
        wheelType: "18-inch Pair Spoke Silver",
        price: 2000
    },
    {
        id: 4,
        wheelType: "18-inch Pair Spoke Black",
        price: 4000
    }],
    orderBuilder: {},
    customOrders: [{
        id: 1,
        paintId: 4,
        interiorId: 2,
        techId: 3,
        wheelId: 4
    }]
}

export const getInterior = () => {
    return database.interiors.map(interior => ({...interior}))
}

export const getPaint = () => {
    return database.paints.map(paint => ({...paint}))
}

export const getTech = () => {
    return database.technology.map(tech => ({...tech}))
}

export const getWheels = () => {
    return database.wheels.map(wheel => ({...wheel}))
}

export const getOrders = () => {
    return database.customOrders.map(order => ({...order}))
}

export const setInterior = (id) => {
    database.orderBuilder.interiorId = id
}

export const setPaint = (id) => {
    database.orderBuilder.paintId = id
}

export const setTech = (id) => {
    database.orderBuilder.techId = id
}

export const setWheel = (id) => {
    database.orderBuilder.wheelId = id
}

export const addCustomOrder = () => {
    const newOrder = {...database.orderBuilder}
    const lastIndex = database.customOrders.length - 1
    newOrder.id = database.customOrders[lastIndex].id + 1
    newOrder.timestamp = Date.now()
    database.customOrders.push(newOrder)
    database.orderBuilder = {}
    document.dispatchEvent(new CustomEvent("stateChanged"))
}