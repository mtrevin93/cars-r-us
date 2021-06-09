import { getTechnologies } from "./database.js";

const technologies = getTechnologies()

let htmlString = "<ul>"
export const Technologies = () => {
    for (const technology of technologies) {
        htmlString += ` <li>${technology.name}</li>`
    }
    htmlString += "</ul>"
    return htmlString
}

