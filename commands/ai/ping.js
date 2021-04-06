const discord = require('discord.js')
const client = new discord.Client()
module.exports = {
  aliases: ['ping'],
  description:'Returns latency info',
  callback: async({message,arg,client}) =>{
    
       message.channel.send(`🏓Pong - ${client.ws.ping}ms`)
    }   
  }



    
