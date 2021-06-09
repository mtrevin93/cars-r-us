import { getWheels } from "./database.js";

const wheels = getWheels()

let htmlString = "<ul>"
export const Wheels = () => {
    for (const wheel of wheels) {
        htmlString += ` <li>${wheel.name}</li>`
    }
    htmlString += "</ul>"
    return htmlString
}

