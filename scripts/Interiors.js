import { getInteriors } from "./database.js";

const interiors = getInteriors()

let htmlString = "<ul>"
export const Interiors = () => {
    for (const interior of interiors) {
        htmlString += ` <li>${interior.name}</li>`
    }
    htmlString += "</ul>"
    return htmlString
}

