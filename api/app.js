const { Telegraf } = require('telegraf')
require('dotenv').config()
// const axios = require('axios')
const { TELEGRAM_TOKEN } = process.env

const bot = new Telegraf(TELEGRAM_TOKEN)

bot.start((ctx) => ctx.reply(`Welcome to the most silly bot you'll ever see`));
bot.help((ctx) => ctx.reply(`Write anything to me and I'll repeat it :)`));
bot.on('text', (ctx) => ctx.reply(ctx.message.text)); //listen to every text message
bot.on('message', ctx => ctx.reply('Command not recognized')); //avoid timeouts with unsupported commands

export async function telegramBotWebhook(req, res) {
	bot.handleUpdate(req.body, res);
}

export default telegramBotWebhook;
