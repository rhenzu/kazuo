module.exports = {
  aliases: ['continue'],
  description:'Resumes the song current song',
  category: 'Music',
  callback: async ({client, message, args}) =>{
    const voiceChannel = message.member.voice.channel;
    if(!voiceChannel) return message.channel.send('You are not in a voice channel to resume music')
    client.distube.resume(message)
    message.channel.send('Music is now resumed')
   }
  }
  
    
