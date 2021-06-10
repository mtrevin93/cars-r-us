import { getTechnologies,setTechnology } from "./database.js";

const technologies = getTechnologies()

addEventListener(
    "change",
    (event) => {
        if (event.target.name === "technology") {
            // setTechnology(parseInt(event.target.value))
            const myTechnology = technologies.find(technology => technology.id === parseInt(event.target.value))
            setTechnology(myTechnology)
        }
    }
)
export const Technologies = () => {
    
    let htmlString = "<ul>"
    for (const technology of technologies) {
        htmlString += ` <li>
        <input type="radio"name="technology"value="${technology.id}">${technology.name}</li>`
    }
    htmlString += "</ul>"
    return htmlString
}

