const express = require("express");
const cors = require("cors");
const path = require("path");
const enforce = require("express-sslify");

if (process.env.NODE_ENV !== "production") require("dotenv").config();

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const app = express();
const port = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(enforce.HTTPS({ trustProtoHeader: true }));
app.use(cors());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));

  app.get("/service-worker.js", function (req, res) {
    res.sendFile(path.resolve(__dirname, "..", "build", "service-worker.js"));
  });
  
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

app.listen(port, function (error) {
  if (error) throw error;
  console.log("server is running on port" + port);
});

app.post("/payment", function (req, res) {
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: "inr",
    description: "Ecommerce Business",
  };

  stripe.charges.create(body, function (stripeErr, stripeRes) {
    if (stripeErr) {
      res.status(500).send({ error: stripeErr });
    } else {
      res.status(200).send({ success: stripeRes });
    }
  });
});
