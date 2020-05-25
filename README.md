# NodeJS_e-commerce-miniproject-backend

This is the backend part of the project written in ReactJS simulating an e-commerce cloths shop that I coded along the following Udemy course: \
[Complete React Developer in 2020 (w/ Redux, Hooks, GraphQL) By Andrei Neagoie and Yihua Zhang](https://www.udemy.com/course/complete-react-developer-zero-to-mastery/).

This part of the project (thought still following very closely the instructor's code) differs significantly from the course's implementation.
As that combined the react application and the NodeJS application deploying them as one via Heroku. Whilst this may result in an easier/more convenient development/deployment, I do not believe it to be a realistic implementation thus I wanted to have the two applications completely decoupled.

Besided that, this NodeJS application is very very simplistic, it simply consists of an [expressJS](https://expressjs.com/) server which accepts *POST* requests to the */stripe-payment* endpoint and processes such payments via the [Stripe npm package](https://www.npmjs.com/package/stripe).

This allows the payment to be processed in a realisting way and to be recognised by the [Stripe platform](https://stripe.com).

\
\
&NewLine;

### Additional Note
The project requires an environmental variable called *STRIPE_SECRET_KEY* containing the secret key associated to the project's stripe account.

This key, during development can be locally set in the *.env* file as:
```
STRIPE_SECRET_KEY=actual_stripe_secret_key
```
For the current deployment the variable is set in the heroku envoronment.
