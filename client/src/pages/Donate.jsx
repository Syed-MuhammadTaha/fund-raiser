import React from 'react'
import {loadStripe} from '@stripe/stripe-js'

export default function Donate() {

    const details = ['Abubakar', '20000', 'charity'];
    // console.log(details)

    const makePayment = async (e) => {
        const stripe = await loadStripe('pk_test_51OSJKWH0iLLdHZLK0tY0UXpUZXrWcqow7spXeKuuycGKXrpGzueErBDncbMwcPRIxvC80CqwUpm3yoffp4e21LjE000fbzoSCD')

        const body = {
            products:details
        }
        const headers = {
            "Content-Type" : "application/json"
        }
        const response = await fetch("https://localhost:8000/donate", {
            method:"POST",
            headers:headers,
            body:JSON.stringify(body)
        })
        const session = await response.json()

        const result = stripe.redirectToCheckout({
            sessionId:session.id
        });

    }

    return (
    <div>
      <button onClick={makePayment}>Donate Now</button>
    </div>
  )
}
