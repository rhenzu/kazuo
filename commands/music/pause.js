module.exports = {
  aliases: ['pause'],
  description:'Pauses the song',
  category: 'Music',
  callback: async ({client, message, args}) =>{
    const voiceChannel = message.member.voice.channel;
    if(!voiceChannel) return message.channel.send('You are not in a voice channel to pause music')
    client.distube.pause(message)
    message.channel.send('Music is paused')
    
    
    
   }
  }
  
    
