const Discord = require("discord.js")

const { handlers } = require("./handlers")

const botName = "coderdojo-bot"

const bot = new Discord.Client()

bot.on("ready", () => {
  // eslint-disable-next-line
  console.log(`Logged in as ${bot.user.tag}!`)
})

bot.on("message", msg => {
  try {
    const { channel, content, author } = msg
    const { type } = channel

    const { username: authorName } = author

    if (type !== "dm" || authorName === botName) return

    const response = handlers[authorName](content)

    channel.send(response)
  } catch (e) {
    // eslint-disable-next-line
    console.log("BOT ERROR:")
    // eslint-disable-next-line
    console.log(e)
  }
})

module.exports = { bot }
