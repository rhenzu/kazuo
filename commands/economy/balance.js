const economy = require('../../economy')

module.exports = {
  aliases: ['bal'],
  category: 'Economy',
  description:'coins',
  callback: async ({message}) =>{
    
    const target = message.mentions.users.first() || message.author
    const targetId = target.id
    console.log(target)
    
    const guildId = message.guild.id
    const userId = target.id
    
    const coins = await economy.getCoins(guildId, userId)
    message.reply(`The user has ${coins} coins!`)
  },
  
}