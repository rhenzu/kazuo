const distube = require('distube')
const discord = require('discord.js')
module.exports ={
  alias: ['randomize'],
  description: 'Shuffles the current queue',
  category: 'Music',
  run: async ({client, message, args}) =>{
    const voiceChannel = message.member.voice.channel;
    if(!voiceChannel) return message.channel.send('You are not in a voice channel to shuffle queue')
    
    
    client.distube.shuffle(message)
    let shuffle = new discord.MessageEmbed()
    .setTitle('Shuffled 🔀')
    .setColor('#bae1ff')
    message.channel.send(shuffle)
    
  }
  
  
}