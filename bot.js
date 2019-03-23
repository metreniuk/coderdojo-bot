const Discord = require("discord.js")

const { handlers } = require("./handlers")

const botName = "coderdojo-bot"

const client = new Discord.Client()

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on("message", msg => {
  const { channel, content, author } = msg
  const { type, recipient } = channel
  const { username } = recipient
  const { username: authorName } = author

  if (type !== "dm" || authorName === botName) return

  let response
  try {
    console.log({ handlers })
    console.log(handlers[authorName])
    response = handlers[authorName](content)
  } catch (e) {
    console.log("BOT ERROR:")
    console.log(e)
  }

  channel.send(response)
})

module.exports = { client }
