var interval;
const malScraper = require('mal-scraper')
const DiscordJS = require('discord.js')
const WOKCommands = require('wokcommands')
const fetch = require('node-fetch')
require('dotenv').config()
const mongoose = require('mongoose')
const mongo = require('./mongo')


const client = new DiscordJS.Client({
  partials: ['MESSAGE', 'REACTION'],
})
client.on('ready', () => {
  client.user.setActivity('!help', {type:'LISTENING'})
  console.log('ready')
  
  
  const distube = require('distube')
  client.distube = new distube(client, {searchSongs: false, emitNewSongOnly: true, leaveOnFinish: false, leaveOnEmpty: false, youtubeDL: true, updateYouTubeDL: true})
    
    
 const status = (queue) => `Volume: \`${queue.volume}%\` | Filter: \`${queue.filter || "Off"}\` | Loop: \`${queue.repeatMode ? queue.repeatMode == 2 ? "All Queue" : "This Song" : "Off"}\` | Autoplay: \`${queue.autoplay ? "On" : "Off"}\``;

  
  
  client.distube
  .on("initQueue", queue=>{
    queue.autoplay = false;
    queue.volume = 70;
    
  })
    .on("playSong", (message, queue, song) => {
        let playing = new DiscordJS.MessageEmbed()
  .setTitle('Playing ▶️')
  .setDescription(`**Song Title**: \ ${song.title}\n\n🕛**Duration**: \ ${song.formattedDuration}\n\n🔴**Live**: \ ${song.isLive}\n\n👍**Likes**: \ ${song.likes} \ | \ 👎**Dislikes**: \ ${song.dislikes}\n\n🔥**Views**: \ ${song.views}`)
  .setImage(`${song.thumbnail}`)
  .setColor('GREEN')
  .setFooter(`by: \ ${song.user.tag}`)
        message.channel.send(playing)})
    .on("addSong", (message, queue, song) => {
        let added = new DiscordJS.MessageEmbed()
  .setTitle('Added to Queue ➡️')
  .setDescription(`**Song Title**: \ ${song.title}\n\n🕛: \ ${song.formattedDuration}\n\n🔴: \ ${song.isLive}\n\n👍: \ ${song.likes} \ | \ 👎: \ ${song.dislikes}\n\n🔥: \ ${song.views}`)
  .setImage(`${song.thumbnail}`)
  .setColor('YELLOW')
  .setFooter(`added by: \ ${song.user.tag}`)
        message.channel.send(added)})
    .on("playList", (message, queue, playlist, song) => message.channel.send(
        `Play \`${playlist.name}\` playlist (${playlist.songs.length} songs).\nRequested by: ${song.user}\nNow playing \`${song.name}\` - \`${song.formattedDuration}\`\n${status(queue)}`
    ))
  .on("addList", (message, queue, playlist) => message.channel.send(
        `Added \`${playlist.name}\` playlist (${playlist.songs.length} songs) to queue\n${status(queue)}`
    ))
       
  
  
  
  
  
  new WOKCommands(client, {
    commandsDir: 'commands'
  })
  .setBotOwner('542617898062053377')
  .setMongoPath(process.env.CLUSTER)
  .setDefaultPrefix('!')
  
  .setCategorySettings([
      {
        name: 'AI',
        emoji: '🌐'
      },
      {
        name: 'Music',
        emoji: '🎶'
      },
      {
        // You can change the default emojis as well
        name: 'System',
        emoji: '🔐',
        // You can also hide a category from the help menu
        // Admins bypass this
      },
    {
      name: 'Social',
      emoji: '👋',
    },
    {
      name: 'AutomatedCommands',
      emoji: '🤖',
    },
    {
      name:"```Rhenzu's Personal Commands```",
      emoji: '🔏',
    },
    {
      name: 'Economy',
      emoji: '🏦',
    }
    ])

})
client.login(process.env.BOT)


