const { Client } = require("pg")

const dbClient = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
})

module.exports = { dbClient }
