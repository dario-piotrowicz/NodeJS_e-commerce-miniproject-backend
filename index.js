const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

if( process.env.NODE_ENV !== 'production' ) require('dotenv').config();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let corsOptions = {
    origin: process.env.NODE_ENV === 'production'
                ? 'https://ecomm-miniproject.herokuapp.com'
                : '*'
};
app.use(cors(corsOptions));

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