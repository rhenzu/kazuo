console.log('Running...')

const DiscordJS = require('discord.js')
const path = require('path')
const WOKCommands = require('wokcommands')

const { Intents } = DiscordJS

const client = new DiscordJS.Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    Intents.FLAGS.GUILD_MEMBERS,
    ]
})

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  new WOKCommands(client, {
    commandsDir: path.join(__dirname, 'commands'),
    testServers: ['730771529725640779']
  })
})

client.login('ODE4NDAyMzg1NTM3MjY5ODAw.YEXinQ.RoiUn0KmfWJhM8xKfhMoCNpzJ74');
