import { getTechnologies,setTechnology } from "./database.js";

const technologies = getTechnologies()

addEventListener(
    "change",
    (event) => {
        if (event.target.name === "technology") {
            setTechnology(parseInt(event.target.value))
        }
    }
)

let htmlString = "<ul>"
export const Technologies = () => {
    for (const technology of technologies) {
        htmlString += ` <li>
        <input type="radio"name="technology"value="${technology.id}">${technology.name}</li>`
    }
    htmlString += "</ul>"
    return htmlString
}

