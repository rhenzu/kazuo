const d = require('discord.js')
const malScraper = require('mal-scraper')
module.exports={
  minArgs: '2',
  maxArgs: '2',
  category: 'MyAnimeList',
  aliases:['gets, gseason'],
  description: 'Gets Information of TV anime from a specified season and year [this is fucking cursed i have a lot of error doing this command lol you might see some of the results are out of dates LOL]',
  run: async({client, args, message})=>{
    const [season, year] = args


malScraper.getSeason(year, season)
  .then((data) =>{
  const ses = season.toUpperCase()
  message.channel.send(`**ANIME - ${ses} - ${year}:**\n`+data.TV.map((data, id) => ` **${id+1}**. **${data.title}** - \ \`${data.releaseDate}\``).join("\n"), {split:true,})

  
  
  
  
  
}
       
       
       
       
       
       )}
  
  
  
  
  
  
  
}