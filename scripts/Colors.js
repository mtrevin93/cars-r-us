import { getColors, setColor } from "./database.js";

const colors = getColors()

addEventListener(
    "change",
    (event) => {
        if (event.target.name === "color") {
            // setColor(parseInt(event.target.value))
            const myColor = colors.find(color => color.id === parseInt(event.target.value))
            setColor(myColor)
        }
    }
)

export const Colors = () => {
    let htmlString = "<ul>"
    for (const color of colors) {
        htmlString += ` <li>
        <input type="radio"name="color"value="${color.id}">${color.name}
        </li>`
    }
    htmlString += "</ul>"
    return htmlString
}

