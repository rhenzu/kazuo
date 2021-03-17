  const distube = require('distube')
  module.exports = {
  aliases: ['fs'],
  description:'Skips the song that is currently playing',
  category: 'Music',
  callback: async ({client, message, args}) =>{
    const voiceChannel = message.member.voice.channel;
    if(!voiceChannel) return message.channel.send('You are not in a voice channel to skip music')
    client.distube.skip(message);
   }
  }
  
    
