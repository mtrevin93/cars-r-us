import { getInteriors,setInterior } from "./database.js";

const interiors = getInteriors()

addEventListener(
    "change",
    (event) => {
        if (event.target.name === "interior") {
            setInterior(parseInt(event.target.value))
        }
    }
)

let htmlString = "<ul>"
export const Interiors = () => {
    for (const interior of interiors) {
        htmlString += ` <li>
       <input type="radio"name="interior"value="${interior.id}"> ${interior.name}
        </li>`
    }
    htmlString += "</ul>"
    return htmlString
}

