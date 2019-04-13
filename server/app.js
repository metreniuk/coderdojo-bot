const express = require("express")
const bodyParser = require("body-parser")
const path = require("path")

require("dotenv").config()

const { bot } = require("./bot")
// const { dbClient } = require("./db")
const { addHandler, handlers } = require("./handlers")

const app = express()
const port = process.env.PORT || 8080
const botToken = process.env.BOT_TOKEN

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "client.html"))
})

app.get("/check", (req, res) => {
  const stringifiedHandlers = Object.entries(handlers).map(([key, value]) => ({
    [key]: value
      .toString()
      .split("\n")
      .join(" ")
      .split("\r")
      .join(" ")
      .slice(14),
  }))
  console.log("/check", stringifiedHandlers)
  res.status(200).json(stringifiedHandlers)
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

  // eslint-disable-next-line
  console.log(`Example app listening on port ${port}!`)
})

module.exports = { app }
