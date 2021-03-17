const distube = require('distube')
module.exports = {
  syntaxError: 'Please provide arguments',
  aliases: ['p'],
  description: 'Plays a song with the provide link or terms',
  category: 'Music',
  run: async ({client, message, args}) =>{
    const music = args.join(' ')
    const voiceChannel = message.member.voice.channel;
    if(!voiceChannel) return message.channel.send("You are not in a voice channel")
    const permissions = voiceChannel.permissionsFor(message.client.user)
    if(!permissions.has('SPEAK')) return  message.channel.send("I dont have the permission to speak in that voice channel")
    if(!permissions.has('CONNECT')) return message.channel.send("I don't have the permission to connect in that voice channel")
    if(!args.length) return message.channel.send('Please provide some arguments')
    client.distube.play(message, music)
    
  }
}