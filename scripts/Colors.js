import { getColors } from "./database.js";

const colors = getColors()

let htmlString = "<ul>"
export const Colors = () => {
    for (const color of colors) {
        htmlString += ` <li>${color.name}</li>`
    }
    htmlString += "</ul>"
    return htmlString
}

