const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_zEW08UT0bmyP8tKW9Lx5iCe500pw5LYP1W");

// API

// App config
const app = express();

// Middleware
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get("/", (req, res) => res.status(200).send("hello world"));
app.post("/payments/create", async (req, res) => {
  const total = req.query.total;

  console.log("Payment Request Recieved! for this amount >", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, //subunits of currency
    currency: "usd",
  });
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen command
exports.api = functions.https.onRequest(app);

//Example endpoint
//http://localhost:5001/clone-ad10b/us-central1/api
