const d = require('discord.js')
const malScraper = require('mal-scraper')
module.exports={
  run: async({client, args, message})=>{
    const [season, year] = args


malScraper.getSeason(year, season)
  .then((data) =>{
  message.channel.send(`**Anime - ${season} - ${year}:**\n`+data.TV.map((data, id, year, season) => ` **${id+1}**. **${data.title}** - \ \`${data.releaseDate}\``).join("\n"), {split:true,})

  
  
  
  
  
}
       
       
       
       
       
       )}
  
  
  
  
  
  
  
}