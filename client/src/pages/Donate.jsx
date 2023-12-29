import React from 'react'
import { loadStripe } from '@stripe/stripe-js'
import axios from 'axios'

export default function Donate() {

  const details = ['Abubakar', '20000', 'charity'];

  const makePayment = async (e) => {
    try {
      const stripe = await loadStripe('pk_test_51OSJKWH0iLLdHZLK0tY0UXpUZXrWcqow7spXeKuuycGKXrpGzueErBDncbMwcPRIxvC80CqwUpm3yoffp4e21LjE000fbzoSCD');

      const response = await axios.post('https://localhost:8000/donate', {
        products: details
      });

      const session = response.data; // assuming the session ID is returned in the response

      const result = await stripe.redirectToCheckout({
        sessionId: session.id
      });

      if (result.error) {
        // Handle any errors that occur during the redirect to checkout
        console.error(result.error.message);
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  }

  return (
    <div>
      <button onClick={makePayment}>Donate Now</button>
    </div>
  )
}
