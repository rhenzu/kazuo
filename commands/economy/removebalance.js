const discord = ('discord.js')
const economy = require('../../economy')
module.exports ={
  aliases: ['rmvbal','rmvbalance'],
  category: 'Economy',
  description: 'Removes coins to users',
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
    
    const newCoins = await economy.removeCoins(guildId, userId, coins)
    
    
    message.reply(`The user has now ${coins} coins!`)
      
  },
}