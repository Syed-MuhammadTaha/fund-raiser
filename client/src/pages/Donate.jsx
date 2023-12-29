import React from 'react'
import { loadStripe } from '@stripe/stripe-js'
import axios from 'axios'

export default function Donate() {

    const details = [
        {
            id: 1,
            name: 'Abubakar',
            price: 20000,
            quantity: 1
        }
    ];

    const makePayment = async (e) => {
        try {
            const stripe = await loadStripe('pk_test_51OSJKWH0iLLdHZLK0tY0UXpUZXrWcqow7spXeKuuycGKXrpGzueErBDncbMwcPRIxvC80CqwUpm3yoffp4e21LjE000fbzoSCD');

            const response = await axios.post('/donate', {
                products: details
            });

            const session = response.data; // assuming the session ID is returned in the response

            const result = await stripe.redirectToCheckout({
                sessionId: session.id
            });

            if (result.error) {
                console.log(result.error);
            }
        } catch (error) {
            console.log('Error:', error);
        }
        console.log(details)
    }
    
    
    return (
        <div>
            <button onClick={makePayment}>Donate Now</button>
        </div>
    )
}










// const body = {
//     products: [
//         {
//             id: 1,
//             name: 'Abubakar',
//             price: 20000,
//             quantity: 1
//         }
//     ]
// }
// const headers = {
//     'Content-Type': 'application/json'
// }
// const response = await fetch('/donate',{
//     method: 'POST', 
//     headers: headers,   
//     body: JSON.stringify(body)
// });
// const session = await response.json();
// const result = await stripe.redirectToCheckout({
//     sessionId: session.id
// });
// if (result.error) {
//     console.log(result.error);
// }
