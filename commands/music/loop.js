const distube = require('distube')
const d = require('discord.js')
module.exports = {
  aliases: ['repeat'],
  description:'Loops the queue',
  category: 'Music',
  callback: async ({client, message, args}) =>{
    const voiceChannel = message.member.voice.channel;
    if(!voiceChannel) return message.channel.send('You are not in a voice channel to loop queue')
    let mode = client.distube.setRepeatMode(message, parseInt(args[0]));
        mode = mode ? mode == 2 ? "Repeat queue" : "Repeat song" : "Off";
    
    let lp = new d.MessageEmbed()
    .setTitle("Mode set to: `🔁" + mode + "`")
    .setColor('#4dfff0')
    message.channel.send(lp)
   }
  }
