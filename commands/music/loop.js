const distube = require('distube')
module.exports = {
  aliases: ['repeat'],
  description:'Loops the queue',
  category: 'Music',
  callback: async ({client, message, args}) =>{
    const voiceChannel = message.member.voice.channel;
    if(!voiceChannel) return message.channel.send('You are not in a voice channel to loop queue')
    client.distube.setRepeatMode(message, parseInt(args[0]));
    message.channel.send('Loop Enabled/Disabled')
   }
  }
  
    
