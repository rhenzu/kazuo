const d = require('discord.js')
const neko = require('akaneko')
module.exports={
  run: async ({client, message, args})=>{
    
    const embed = new d.MessageEmbed()
    
    
    embed.setImage(await neko.lewdNeko())
    return message.channel.send(embed)
    
    
    
  }
  
}