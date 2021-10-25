import React from 'react'
import "./FAQ.css"
import payment from "../img/payment.png"

function Payment() {
    return (
        <div className="payment">
            <h1>Payment after delivery by card, paypal or cash.</h1><br></br>

            <h4>" SAFE PAYMENT "</h4>

            <img src={payment}></img>

        </div>
    )
}

export default Payment
