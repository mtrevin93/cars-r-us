import { getInteriors,setInterior } from "./database.js";

const interiors = getInteriors()

addEventListener(
    "change",
    (event) => {
        if (event.target.name === "interior") {
            // setInterior(parseInt(event.target.value))
            const myInterior = interiors.find(interior => interior.id === parseInt(event.target.value))
            setInterior(myInterior)
        }
    }
)

export const Interiors = () => {
    let htmlString = "<ul>"
    for (const interior of interiors) {
        htmlString += ` <li>
       <input type="radio"name="interior"value="${interior.id}"> ${interior.name}
        </li>`
    }
    htmlString += "</ul>"
    return htmlString
}

