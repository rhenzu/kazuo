const malScraper = require('mal-scraper')
const d = require('discord.js')
module.exports={
  minArgs: '1',
  maxArgs: '10',
  description: "Shows Anime Cover",
  
  run: async({client, message, args})=>{
    const keyword = (args)
    let name = `${keyword}`
    
    
malScraper.getInfoFromName(name).then((data) => {
  console.log(data)
  
  const ind = Math.floor(Math.random()*data.characters.length)
  
  let e = new d.MessageEmbed()
  .setTitle(data.title)
  .setURL(data.url)
  .setThumbnail(data.picture)
  .setDescription (data.synopsis)
  .setImage(data.characters[ind].picture)
  .addFields(
    {name: 'Episodes', value: `${data.episodes}`},
    {name: 'Score', value: `${data.score}`},
    {name: 'Aired', value: `${data.aired}`},
    {name: 'Status', value: `${data.status}`},
    {name: 'Duration', value: `${data.duration}`},
    {name:'Genre', value: `${data.genres}`},
    {name: 'Type', value: `${data.type}`},
    {name: "Here's a random character from this anime:", value: `**Name:** ${data.characters[ind].name} \ | \ **Role:** ${data.characters[ind].role}`},
  )
  .setColor('RANDOM')
  

  
  
  message.channel.send(e)


})
    
}
    
  }
