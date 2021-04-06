const d = require('discord.js')
const neko = require('akaneko')
module.exports={
  description:"Don't pretend you know nothing about this 👀",
  category:'SafeForWork',
  run: async ({client, message, args})=>{
    
    const embed = new d.MessageEmbed()
    
    
    embed.setImage(await neko.lewdNeko())
    return message.channel.send(embed)
    
    
    
  }
  
}