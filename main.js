const { Telegraf } = require('telegraf')
require('dotenv').config()

console.log(process.env.BOT_TOKEN);

const bot = new Telegraf(process.env.BOT_TOKEN)
console.log(bot);

bot.start((ctx) => {
    let message = ` Please use the /fact command to receive a new fact`
    ctx.reply(message)
})

bot.launch()