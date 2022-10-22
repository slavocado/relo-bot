const { Telegraf } = require('telegraf')
require('dotenv').config()
const express = require('express')
const axios = require('axios')
const { PORT, TELEGRAM_TOKEN, SERVER_URL } = process.env

// Telegram API Configuration
const TELEGRAM_API = `https://api.telegram.org/bot${TELEGRAM_TOKEN}`
const URI = `/webhook/${TELEGRAM_TOKEN}`
const webhookURL = `${SERVER_URL}${URI}`

// create Express and Telegraf
const app = express()
const bot = new Telegraf(TELEGRAM_TOKEN)

app.use(express.json())

// set webhook for bot
app.use(bot.webhookCallback(URI))
bot.telegram.setWebhook(webhookURL)

// Bot configuration
bot.start((ctx) => ctx.reply('Welcome'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there!'))


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(PORT, async () => {
    // setting up our webhook url on server spinup
    try {
        console.log(`Server is up and Running at PORT : ${PORT}`)
    } catch (error) {
        console.log(error.message)
    }
})
