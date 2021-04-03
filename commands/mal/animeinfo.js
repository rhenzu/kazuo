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
  
  let e = new d.MessageEmbed()
  .setTitle(data.title)
  .setDescription (`${data.synopsis}`)
  .setThumbnail(data.picture)
  .setColor('RANDOM')
  .setFooter(data.genres)

  
  
  message.channel.send(e)


})
    
}
    
  }
