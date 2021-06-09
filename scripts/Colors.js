import { getColors, setColor } from "./database.js";

const colors = getColors()

addEventListener(
    "change",
    (event) => {
        if (event.target.name === "color") {
            setColor(parseInt(event.target.value))
        }
    }
)

let htmlString = "<ul>"
export const Colors = () => {
    for (const color of colors) {
        htmlString += ` <li>
        <input type="radio"name="color"value="${color.value}">${color.name}
        </li>`
    }
    htmlString += "</ul>"
    return htmlString
}

