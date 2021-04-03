const discord = require('discord.js');


module.exports={
  minArgs: 1,
  maxArgs: -1,
  ownerOnly: true,
  aliases: ['mspam'],
  description: "You don't want to spam messages do you?",
  
  callback: async({client, message, args, interval})=>{
    
  const ms = (args)
  if(args){
  message.channel.send(`${message.author} Please tell this is not intentional 😆☢️`)
    interval = setInterval (function () {
        message.channel.send(ms)
      }, 1 * 2000);
    }else{
    message.channel.send('Invalid!, Please Specify')

  
}
}
}

