const express = require('express')
const app = express()
const port = process.env.PORT || 4000

app.get('/', (req, res) => {
  res.json({
    message: 'Hello Mars! How do you do!!'
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})