const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

if( process.env.NODE_ENV !== 'production' ) require('dotenv').config();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();
const port = process.env.port || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.listen( port, error => {
    if( error ) throw error;
    console.log(`Server running on port ${port}`);
})

app.post('/stripe-payment', (req,res) => {
    const stripeRequestData = {
        source: req.body.token.id,
        amount: req.body.amount,
        currency: req.body.currency
    };

    stripe.charges.create(stripeRequestData, (stripeError, stripeResponse) => {
        if( stripeError ){
            res.status(500).send( stripeError );
        } else {
            res.status(200).send({ response: stripeResponse });
        }
    });
});