const express = require("express")
const bodyParser = require("body-parser")
const path = require("path")
const fs = require("fs")

const { token } = require("./config.json")
const { client } = require("./bot")
const { addHandler } = require("./handlers")

const app = express()
const port = 8080

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "client.html"))
})

app.post("/", (req, res) => {
  const { body } = req
  const { handler, username } = body

  addHandler(username, handler)

  res.status(200).send("ok")
})

module.exports = { app }

app.listen(port, () => {
  client.login(token)

  console.log(`Example app listening on port ${port}!`)
})
