const distube = require('distube')
module.exports = {
  aliases: ['stop'],
  description:'Stops the songs and leaves channel',
  category: 'Music',
  callback: async ({client, message, args}) =>{
    const voiceChannel = message.member.voice.channel;
    if(!voiceChannel) return message.channel.send('You are not in a voice channel to stop music')
    client.distube.stop(message);
        message.channel.send("Stopped the music!");
   }
  }
  
    
