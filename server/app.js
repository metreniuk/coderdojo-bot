const express = require("express")
const bodyParser = require("body-parser")
const path = require("path")
const fs = require("fs")

require("dotenv").config()

const { bot } = require("./bot")
const { dbClient } = require("./db")
const { addHandler } = require("./handlers")

const app = express()
const port = process.env.PORT || 8080
const botToken = process.env.BOT_TOKEN

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

app.listen(port, () => {
  bot.login(botToken)

  // dbClient.connect()

  // dbClient.query(
  //   "SELECT table_schema,table_name FROM information_schema.tables;",
  //   (err, res) => {
  //     if (err) throw err
  //     for (let row of res.rows) {
  //       console.log(JSON.stringify(row))
  //     }
  //     client.end()
  //   }
  // )

  console.log(`Example app listening on port ${port}!`)
})

module.exports = { app }
