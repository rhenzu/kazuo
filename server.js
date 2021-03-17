
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
  client.user.setActivity('LOL', {type:'PLAYING'})
  console.log('ready')
  
  const distube = require('distube')
  client.distube = new distube(client, {searchSongs: false, emitNewSongOnly: true, leaveOnFinish: true, youtubeDL: true, updateYouTubeDL: true})
    
    
    
  const status = (queue) => `Volume: \`${queue.volume}%\` | Filter: \`${queue.filter || "Off"}\` | Loop: \`${queue.repeatMode ? queue.repeatMode == 2 ? "All Queue" : "This Song" : "Off"}\` | Autoplay: \`${queue.autoplay ? "On" : "Off"}\``;
  client.distube
    .on("playSong", (message, queue, song) => message.channel.send(
        `Playing \`${song.name}\` - \`${song.formattedDuration}\`\nRequested by: ${song.user}`
    ))
    .on("addSong", (message, queue, song) => message.channel.send(
        `Added ${song.name} - \`${song.formattedDuration}\` to the queue by ${song.user}`
    ))
    .on("playList", (message, queue, playlist, song) => message.channel.send(
        `Play \`${playlist.name}\` playlist (${playlist.songs.length} songs).\nRequested by: ${song.user}\nNow playing \`${song.name}\` - \`${song.formattedDuration}\`\n${status(queue)}`
    ))
  .on("addList", (message, queue, playlist) => message.channel.send(
        `Added \`${playlist.name}\` playlist (${playlist.songs.length} songs) to queue\n${status(queue)}`
    ))
  .on("finish", message =>  message.channel.send("No more song in queue"))
  .on("empty", message => message.channel.send("Channel is empty. Leaving the channel"))
   .on("initQueue", queue => {
       queue.autoPlay = false;
       queue.volume = 50;
  })
       
  
  
  
  
  
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


