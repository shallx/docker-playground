const express = require("express");
const mongoose = require("mongoose");
const {
  MONGO_IP,
  MONGO_USER,
  MONGO_PASSWORD,
  MONGO_PORT,
} = require("./config/config");
const app = express();
const port = process.env.PORT || 4000;

const mongoURL = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`;

const connectWithRetry = () => {
  mongoose
    .connect(mongoURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }) // mongo is the name of the container in docker-compose file, it resolves to the IP address of the container
    .then(() => console.log("MongoDB connected"))
    .catch((err) => {
      console.log(err);
      setTimeout(connectWithRetry, 5000); // retry after 5 seconds
    });
};

connectWithRetry();

app.get("/", (req, res) => {
  res.json({
    message: "Hello Mars! How do you do!!",
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
