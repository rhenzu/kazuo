const discord = require ('discord.js')

module.exports ={
  aliases:['pfp'],
  category: 'Social',
  description: 'Shows User Avatar',
  callback: async ({message, args}) =>{
    
    const user = message.mentions.users.first() || message.author
    if(user){
      const targ = message.guild.members.cache.get(user.id)
      let avatar = user.displayAvatarURL({size: 4096 , dynamic:true})
      let embed = new discord.MessageEmbed()
      .setTitle(`${user.tag}'s Avatar`)
      .setDescription('')
      .setImage(avatar)
      .setFooter('')
      .setColor('RANDOM')
      
      message.channel.send(embed)
      
    }
  }
    
}