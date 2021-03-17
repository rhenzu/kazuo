const distube = require('distube')
module.exports = {
  aliases: ['vl'],
  description:'Controls music volume',
  category: 'Music',
  callback: async ({client, message, args}) =>{
    const voiceChannel = message.member.voice.channel;
    if(!voiceChannel) return message.channel.send('You are not in a voice channel to set volume')
    client.distube.setVolume(message, args[0]);
    message.channel.send('Volume is now set to '+args)
    
   }
  }
  
    
