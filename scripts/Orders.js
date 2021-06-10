import { getOrders, buildCustomOrder, getInteriors, getColors, getTechnologies, getWheels } from "./database.js"

export const Orders = () => {

const orders = getOrders()
const colors = getColors()
const wheels = getWheels()
const interiors = getInteriors()
const technologies = getTechnologies()


let orderHTML = ""

    orderHTML += `<ul>`
    for (const order of orders) {
        const colorCost = colors.find((color) => color.id === order.colorId).price
        const wheelCost = wheels.find((wheel) => wheel.id === order.wheelId).price
        const technologyCost = technologies.find((technology) => technology.id === order.technologyId).price
        const interiorCost = interiors.find((interior) => interior.id === order.interiorId).price
        const totalCost = colorCost + wheelCost + technologyCost + interiorCost
        orderHTML += `<li>Order #${order.id} was placed ${order.timestamp}. Total cost is $${totalCost.toFixed(2)}</li>`
    }
    orderHTML += `</ul>`
    return orderHTML
}