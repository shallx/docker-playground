const express = require('express')
const app = express()

app.get("/", (req, res) => {
  res.json({
    message: "Hello World!",
  });
});

app.listen(7777, () => {
  console.log("Server listening on port 7777");
});
