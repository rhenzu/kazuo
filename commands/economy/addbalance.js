const discord = ('discord.js')
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
    
    
    const embed = new discord.MessageEmbed()
    
    .setTitle('Ok')
    .setDescription('ok')
    .setColor('RANDOM')
    .setFooter('.')
    
    
    message.channel.send(embed)
      
  },
}