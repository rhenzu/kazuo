const d = require('discord.js')
const neko = require('akaneko')
module.exports={
  description:"Don't pretend you know nothing about this 👀",
  category:'SafeForWork',
  run: async ({client, message, args})=>{
    const key = (args)
    const num = `${key}`
    if(!message.channel.nsfw){
      message.channel.send('This is not a NSFW channel!').then(msg=>msg.delete({timeout: 5000}))
    
    } else{const embed = new d.MessageEmbed()
    
    
    embed.setImage(await neko.lewdBomb(num))
    return message.channel.send(embed)
    
          }
    
  }
  
}