const express = require("express")
const bodyParser = require("body-parser")
const fs = require("fs")

const { token } = require("./config.json")
const { client } = require("./bot")
const { addHandler } = require("./handlers")

const htmlFile = fs.readFileSync("./client.html", "utf-8")

const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", (req, res) => {
  res.send(htmlFile)
})

app.post("/:username", (req, res) => {
  const {
    params: { username },
    body,
  } = req
  const { handler } = body

  addHandler(username, handler)

  res.status(200).send("ok")
})

app.listen(port, () => {
  client.login(token)

  console.log(`Example app listening on port ${port}!`)
})
