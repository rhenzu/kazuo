const discord = require('discord.js')
module.exports = {
  aliases: ['continue'],
  description:'Resumes the song current song',
  category: 'Music',
  callback: async ({client, message, args}) =>{
    const voiceChannel = message.member.voice.channel;
    if(!voiceChannel) return message.channel.send('You are not in a voice channel to resume music')
    client.distube.resume(message)
    let resume = new discord.MessageEmbed()
    .setTitle('Resumed ▶️')
    .setColor('#bbff4d')
    
    message.channel.send(resume)
   }
  }
  
    
