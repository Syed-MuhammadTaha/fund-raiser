const express= require("express")
const router = express.Router()
const Stripe = require('stripe')
const stripe = Stripe('sk_test_51OT909JvFBCqm5cO3mOWVLKvR5cdT6eDnK05rYu0tGuuwfNa6xRHNsa0Mfny4NQPSe2Z0S57SXIqrNISCl7oDJ5M00b178UuU5')
const {stripeIntegration}=require('../controllers/authControllers')
const connection = require('../models/db')
router.post('/create-checkout-session', stripeIntegration)

let endpointSecret;
//endpointSecret = "whsec_cf9560f4ade8241b2cad1751bd0081eaf87c286909945bd81529773dafc5d635";
router.post('/webhook', express.raw({type: 'application/json'}), (request, response) => {
  const sig = request.headers['stripe-signature'];
    let data;
    let eventType;
  if(endpointSecret){
    let event;

    try {
        event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
        console.log('webhook verified')
    } catch (err) {
        console.log(`webhook error:${err.message}`)
        response.status(400).send(`Webhook Error: ${err.message}`);
        return;
    }
    data = event.data.object
    eventType = event.type
}
else{
    data = request.body.data.object
    eventType = request.body.type
}

  // Handle the event
  if (eventType === "checkout.session.completed") {
    stripe.customers
        .retrieve(data.customer)
        .then((customer) => {
            const userId = customer.metadata.userID;
            const fundId = customer.metadata.fundID;
            const amount = customer.metadata.Amount;

            // Insert payment information into the payments table
            const insertPaymentQuery = `
                INSERT INTO payment (amount, paymentDate, id, fundraiseId)
                VALUES (?, NOW(), ?, ?)
            `;

            connection.query(insertPaymentQuery, [amount,userId,fundId], (err, results) => {
                if (err) {
                    console.error('Error inserting payment:', err);
                } else {
                    console.log('Payment inserted successfully:', results);
                    const updateFundraiseQuery = `
                    UPDATE fundraise
                    SET currentAmount = currentAmount + ?
                    WHERE fundraiseId = ?
                `;

                connection.query(updateFundraiseQuery, [amount, fundId], (updateErr, updateResults) =>{
                    if (updateErr) {
                        console.error('Error updating fundraise table:', updateErr);
                    } else {
                        console.log('Fundraise table updated successfully:', updateResults);
                    }
                })
                }
            });
        })
        .catch(err => console.log(err.message));
}

  // Return a 200 response to acknowledge receipt of the event
  response.send().end();
});
module.exports = router