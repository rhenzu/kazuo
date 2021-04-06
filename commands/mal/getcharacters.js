const d = require('discord.js')
const malScraper = require('mal-scraper')
module.exports={
  maxArgs:'15',
  minArgs:'1',
  aliases:['getchars, gcs'],
  category:'MyAnimeList',
  description: 'Gets a list of characters from an anime [plain style and works even the characters are less than 10]',
  run: async({client, args, message})=>{
    const key = (args)
    const namee = `${key}`
malScraper.getInfoFromName(namee)
  .then((data)=>{
  const e = new d.MessageEmbed()
  .setThumbnail(data.picture)
  .setDescription(`**Character List from ${data.title}**\n`+data.characters.map((data, id) => ` **${id+1}**. **${data.name}**\n \ \`Seiyuu: \ ${data.seiyuu.name}\` \n \ \`Role: \ ${data.role}\``).join("\n"), {split:true,})
message.channel.send(e)
}
        )
  }
}

       
       
    