import { getWheels, setWheel } from "./database.js";

const wheels = getWheels()

addEventListener(
    "change",
    (event) => {
        if (event.target.name === "wheel") {
            setWheel(parseInt(event.target.value))
        }
    }
)

let htmlString = "<ul>"
export const Wheels = () => {
    for (const wheel of wheels) {
        htmlString += ` <li>
        <input type="radio"name="wheel"value=${wheel.id}">${wheel.name}
        </li>`
    }
    htmlString += "</ul>"
    return htmlString
}

