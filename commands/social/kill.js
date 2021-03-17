const fetch = require('node-fetch')
const discord =require('discord.js')
module.exports = {
  aliases: ['kill'],
  description:'Kill someone',
  category: 'Social',
  callback:async({message, args, text, instance, channel})=>{
    const target = message.mentions.users.first()
   const k = ['https://c.tenor.com/hDFU7nFDFhcAAAAM/wasted-anime.gif',
           'https://c.tenor.com/Re9dglY0sCwAAAAM/anime-wasted.gif',
           'https://c.tenor.com/PJbU0yjG3BUAAAAM/anime-girl.gif',
            'https://c.tenor.com/FJmJM5jRVp4AAAAM/wasted-anime.gif;',
            'https://c.tenor.com/C_icwYnAkLsAAAAM/laughing-out-loud-anime.gif;',
            'https://c.tenor.com/R6YHUq8yY5oAAAAM/beyond-the-boundary-wasted.gif;',
            'https://c.tenor.com/QS1lIv8Ml8cAAAAM/anime-fight.gif',
            'https://c.tenor.com/I_msiNVliZ4AAAAM/wasted-haikyuu.gif',]
   
   if(target){
  const targetMember = message.guild.members.cache.get(target.id)
   const r = Math.floor(Math.random()*k.length)
  const embed = new discord.MessageEmbed()
  .setTitle(`You killed @${target.username}`)
  .setDescription('')
  .setImage(k[r])
  .setColor('RANDOM')
  .setFooter('')
message.channel.send(embed)
   }else{
     message.channel.send('Invalid!, Please Specify')
   
    
    
  }
}
}


    
