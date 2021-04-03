const malScraper = require('mal-scraper')
const d = require('discord.js')
module.exports={
  minArgs: '1',
  maxArgs: '7',
  description: "Shows Anime Cover",
  
  run: async({client, message, args})=>{
    let name = 'Darling in the Franxx'
    
    
malScraper.getPictures(name).then((data) => {
  
  let e = new d.MessageEmbed()
  .setTitle(`${name}`)
  .setImage(data[0].imageLink)
  .setColor('RANDOM')
  .setFooter('Powered by MAL')

  
  
  message.channel.send(e)


})
    
}
        
    
  }
