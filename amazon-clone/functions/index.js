const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { request  } = require("express");
const { response } = require("express");
const stripe = require("stripe")
    ("sk_test_51IOFcnDlgBr8l3woYS8w4HWiLnDiNwrLTO6pRzZlm3KGoc0g6FuUJeW0oGOT9nlW3aBziBT6atSKn76tFjRsO4sa00o8WUjuv8")

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

app.get('/', (request, response) => response.status(200).send('hello world'));

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;
    console.log('payment Request Reciveed for this amount>>>', total);
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: 'usd',
    });
    response.status(201).send({
        clientSecret:paymentIntent.client_secret
    })
    
})




exports.api = functions.https.onRequest(app);






// http://localhost:5001/clone-46817/us-central1/api


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
// http://localhost:4000/functions