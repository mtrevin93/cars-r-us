import { getWheels, setWheel } from "./database.js";

const wheels = getWheels()

addEventListener(
    "change",
    (event) => {
        if (event.target.name === "wheel") {
            // setWheel(parseInt(event.target.value))
            const myWheel = wheels.find(wheel => wheel.id === parseInt(event.target.value))
            setWheel(myWheel)
        }
    }
)

export const Wheels = () => {
    let htmlString = "<ul>"
    for (const wheel of wheels) {
        htmlString += ` <li>
        <input type="radio"name="wheel"value=${wheel.id}">${wheel.name}
        </li>`
    }
    htmlString += "</ul>"
    return htmlString
}

