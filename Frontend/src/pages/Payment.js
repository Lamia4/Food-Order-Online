import React from 'react'
import "./FAQ.css"
import payment from "../img/payment.png"

function Payment() {
    return (
        <div className="payment">
            <h1>Leider zurzeit nur barzahlung möglich</h1>

            <h4>Allernächst können Sie per kreditcard oder paypal bezahlen.</h4>

            <img src={payment}></img>

        </div>
    )
}

export default Payment
