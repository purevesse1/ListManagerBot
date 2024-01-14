import { Bot } from 'grammy'
import addToList from './commands/addToList'
import showList from './commands/showList'
import checkItem from './commands/checkItem'
import { i18n, I18nContext } from './i18n'

const TOKEN = process.env.TOKEN
if (!TOKEN) {
  throw Error('TOKEN variable required')
}
const bot = new Bot<I18nContext>(String(TOKEN))

bot.use(i18n);

bot.command('start', (ctx) => ctx.reply(ctx.t('welcome-message')))
bot.command('atl', addToList)
bot.command('sl', showList)
bot.command('check', checkItem)
bot.on('message', (ctx) => ctx.reply('Got another message!'))

bot.on('my_chat_member')


bot.start().catch((e: any) => {
  console.error(e)
})
