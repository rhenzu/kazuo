const fetch = require('node-fetch')
const discord = require('discord.js')
const client = new discord.Client()
const api = require('imageapi.js')
module.exports = {
  minArgs: '0',
  maxArgs: '0',
  syntaxError: 'Invalid, Please use {PREFIX}{COMMAND}',
category: 'Social',
  description: 'Just Random Memes',
  callback:async({message, args, text, instance, channel})=>{
    let reddits = [
      'animememes',
      'ddlcmemes',
      
    ]
    const reddit = reddits[Math.floor(Math.random()*(reddits.length))];
    
    let img = await api(reddit)
    
    const embed = new discord.MessageEmbed()
    .setTitle("Here's your random Meme")
    .setURL(`https://www.reddit.com/r/meme`)
    .setImage(img)
    .setDescription('')
    .setColor('RANDOM')
    .setFooter('')
    message.channel.send(embed)
  }
}

