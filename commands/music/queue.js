const distube = require('distube')

module.exports = {
  aliases: ['q'],
  description:'Shows the list of all songs added',
  category: 'Music',
  run: async ({client, message, args})=>{
    const voiceChannel = message.member.voice.channel;
    if(!voiceChannel) return message.channel.send('You are not in a voice channel to show queue')
    let queue = client.distube.getQueue(message);
        message.channel.send('Current queue:\n' + queue.songs.map((song, id) =>
            `**${id + 1}**. ${song.name} - \`${song.formattedDuration}\``
        ).slice(0, 10).join("\n"));
    }
   }
  
  
    
