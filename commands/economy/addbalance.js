const discord = require('discord.js')
const economy = require('../../economy')
module.exports ={
  aliases: ['addbal','addbalance'],
  category: 'Economy',
  description: 'Adds coins to users',
  callback: async ({message,args}) =>{
    
    const mention = message.mentions.users.first()
    
    if(!mention){
      message.reply('Please specify the user')
      return
    }
    const coins = args[1]
    if(isNaN(coins)){
      message.reply('That is not a valid number')
      return
    }
    const guildId = message.guild.id
    const userId = mention.id
    
    const newCoins = await economy.addCoins(guildId, userId, coins)
    
    
    let embed = new discord.MessageEmbed()
    .setTitle(`A total of ${coins} coins has been added to: `)
    .setDescription(`<@${userId}>`)
    .setColor('YELLOW')
    
    
    message.channel.send(embed)
      
  },
}