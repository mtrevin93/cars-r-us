const database = {

    //Data
    colors: [
        { id: 1, name: "Silver", price: 10000 },
        { id: 2, name: "Midnight Blue", price: 13000},
        { id: 3, name: "Firebrick Red", price: 14000},
        { id: 4, name: "Spring Green", price: 12000},
    ],
    interiors: [
        { id: 1, name: "Beige Fabric", price: 5000 },
        { id: 2, name: "Charcoal Fabric", price: 6000},
        { id: 3, name: "White Leather", price: 10000},
        { id: 4, name: "Black Leather", price: 12000},
    ],
    technologies: [
        { id: 1, name: "Basic Package", price: 2000 },
        { id: 2, name: "Navigation Package", price: 3000},
        { id: 3, name: "Visibility Package", price: 3000},
        { id: 4, name: "Ultra Package", price: 5000},
    ],
    wheels: [
        { id: 1, name: "17-inch Pair Radial", price: 800 },
        { id: 2, name: "17-inch Pair Radial Black", price: 1000},
        { id: 3, name: "18-inch Pair Radial Spoke Silver", price: 1200},
        { id: 4, name: "18-inch Pair Spoke Black", price: 1400},
    ],
    orders: [
        {id: 1, colorId: 2, interiorId: 3, technologyId: 4, wheelId: 4,timestamp: 1614659931693}
    ],
}
//Get Functions
export const getColors = () => {
    return [...database.colors]
}
export const getInteriors = () => {
    return [...database.interiors]
}
export const getTechnologies = () => {
    return [...database.technologies]
}
export const getWheels = () => {
    return [...database.wheels]
}
export const getOrders = () => {
    return [...database.orders]
}
//Set Functions
export const setColor = (color) => {
    customOrder.colorId = color.id
}
export const setInterior = (interior) => {
    customOrder.interiorId = interior.id
}
export const setTechnology = (technology) => {
    customOrder.technologyId = technology.id
}
export const setWheel = (wheel) => {
    customOrder.wheelId = wheel.id
}
//Order Builder
let customOrder = {}
export const buildCustomOrder = () => {
    const newOrder = customOrder
    const lastArrayIndex = database.orders.length -1
    const lastOrder = database.orders[lastArrayIndex]
    customOrder.id = lastOrder.id +1
    newOrder.timestamp = Date.now()
    database.orders.push(newOrder)
    customOrder = {}

    document.dispatchEvent(new CustomEvent("stateChanged")) 
    
}