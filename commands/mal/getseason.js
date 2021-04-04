const d = require('discord.js')
const malScraper = require('mal-scraper')
module.exports={
  run: async({client, args, message})=>{
    const [season, year] = args


malScraper.getSeason(year, season)
  .then((data) =>{
  const ses = season.toUpperCase()
  message.channel.send(`**ANIME - ${ses} - ${year}:**\n`+data.TV.map((data, id) => ` **${id+1}**. **${data.title}** - \ \`${data.releaseDate}\``).join("\n"), {split:true,})

  
  
  
  
  
}
       
       
       
       
       
       )}
  
  
  
  
  
  
  
}