const discord = require('discord.js')
const client = new discord.Client()
module.exports = {
  ownerOnly: true,
  aliases: ['ping'],
  description:'Returns latency info',
  category: "```Rhenzu's Personal Commands```",
  callback: async({message,arg,client}) =>{
    
       message.channel.send(`🏓Pong - ${client.ws.ping}ms`)
    }   
  }



    
