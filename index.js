const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 4000;

mongoose
  .connect("mongodb://root:password@mongo:27017/express-mongo") // mongo is the name of the container in docker-compose file, it resolves to the IP address of the container
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.json({
    message: "Hello Mars! How do you do!!",
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
