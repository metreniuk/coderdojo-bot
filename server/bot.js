const Discord = require("discord.js")

const { handlers } = require("./handlers")

const botName = "coderdojo-bot"

const bot = new Discord.Client()

bot.on("ready", () => {
  console.log(`Logged in as ${bot.user.tag}!`)
})

bot.on("message", msg => {
  try {
    const { channel, content, author } = msg
    const { type, recipient } = channel
    const { username } = recipient
    const { username: authorName } = author

    if (type !== "dm" || authorName === botName) return

    let response
    console.log({ handlers })
    console.log(handlers[authorName])
    response = handlers[authorName](content)

    channel.send(response)
  } catch (e) {
    console.log("BOT ERROR:")
    console.log(e)
  }
})

module.exports = { bot }
