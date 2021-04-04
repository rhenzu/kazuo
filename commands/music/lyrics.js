const { getLyrics, getSong }= require ('genius-lyrics-api')
const d = require('discord.js')
module.exports = {
  
  aliases: 'lyrics',
  category: 'Music',
  description: 'Displays lyrics of current song',
  callback: async({client, message, args}) =>{
    
    const [title, artist] = args
    
const options = {
	apiKey: (process.env.GENIUS),
	title: `${title}`,
	artist: `${artist}`,
	optimizeQuery: true
};
    
getLyrics(options).then((lyrics) => {
  console.log(lyrics)
  const e = new d.MessageEmbed()
  
  .setTitle(`${title}`)
  .setDescription(`${lyrics}`)
  .setColor('RANDOM')
  .setFooter('From Genius')
  message.channel.send(e)
    
  
  
  
  
})



  }
}