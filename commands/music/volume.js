const distube = require('distube')
const d = require('discord.js')
module.exports = {
  aliases: ['vl'],
  description:'Controls music volume',
  category: 'Music',
  callback: async ({client, message, args}) =>{
    const voiceChannel = message.member.voice.channel;
    if(!voiceChannel) return message.channel.send('You are not in a voice channel to set volume')
    client.distube.setVolume(message, args[0]);
    let vol = new d.MessageEmbed()
    .setTitle('Volume setted to 🔊 : '+args)
    .setColor('WHITE')
    message.channel.send(vol)
    
   }
  }
  
    
