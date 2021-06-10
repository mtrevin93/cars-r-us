import { getOrders, buildCustomOrder, getInteriors, getColors, getTechnologies, getWheels } from "./database.js"

addEventListener("click", 
    (event) => {
        if (event.target.id === "orderButton") {
        buildCustomOrder()
    }
    }
)

export const CustomOrder = () => {
let htmlString = `<button id="orderButton">Create Custom Order`
return htmlString
}