import {Colors} from "./Colors.js"
import {Interiors} from "./Interiors.js"
import {Wheels} from "./Wheels.js"
import {Technologies} from "./Technology.js"
import {Orders} from "./Orders.js"
import {CustomOrder} from "./CustomOrder.js"
// import {CustomOrder} from "./CustomOrder.js"

export const CarsRUs = () => {
    return `
    <h1>Cars R Us</h1>

    <article class="choices">
        <section class="options__colors options">
            <h2>Colors</h2>
            <p>${Colors()}</p>
            </section>
        <section class="options__interiors options">
            <h2>Interiors</h2>
            <p>${Interiors()}</p>
            </section>
        <section class="options__technologies options">
            <h2>Technologies</h2>
            <p>${Technologies()}</p>
            </section>
        <section class="options__wheels options">
            <h2>Wheels</h2>
            <p>${Wheels()}</p>
    </article>

        <article class=button>
        ${CustomOrder()}
        </article>
        
        <article class="customOrders">
            <h2>Custom Car Orders</h2>
            </p>${Orders()}</p>
        </article>
        `
    }