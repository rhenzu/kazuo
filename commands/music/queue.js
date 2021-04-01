const discord = require ('discord.js')
const distube = require('distube')

module.exports = {
  aliases: ['q'],
  description:'Shows the list of all songs added',
  category: 'Music',
  callback: async({client, message, args})=>{
    const voiceChannel = message.member.voice.channel;
    if(!voiceChannel) return message.channel.send('You are not in a voice channel to show queue')
    let queue = client.distube.getQueue(message)
    let added = new discord.MessageEmbed()
  .setTitle('Queue ⏏️')
  .setDescription('Current queue:\n' + queue.songs.map((song, id) => `**${id+1}**. [${song.name}](${song.url}) - \`${song.formattedDuration}\``).join("\n"))
  .setColor('BLUE')
  .setFooter('')
        message.channel.send(added)
    }
   }
  
  
    
