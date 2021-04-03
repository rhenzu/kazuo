const discord = require('discord.js');


module.exports={
  ownerOnly: true,
  aliases: ['spam'],
  description: "You don't want to spam ping your friends do you?",
  
  callback: async({client, message, args, interval})=>{
    
  const target = message.mentions.users.first()
  if(target){
  const targetMember = message.guild.members.cache.get(target.id)
  message.channel.send(`${message.author} You Evil! 😆😆😆`)
    interval = setInterval (function () {
        message.channel.send(`${targetMember}`)
      }, 1 * 3000);
    }else{
    message.channel.send('Invalid!, Please Specify')

  
}
}
}

