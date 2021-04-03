const discord= require('discord.js')
module.exports = {
  aliases: ['bd'],
  cooldown: '5s',
  permissions: ['MANAGE_MESSAGES'],
  description:'Bulk deletes messages with provided argument',
  category: 'System',
  run:async ({message, args}) =>{
    if(!args[0]) return message.reply('Please enter amount of messages to delete')
    if(isNaN(args[0])) return message.reply('Please enter a number')
    if(args[0] > 500) return message.reply('Cannot delete more than 100 messages')
    if(args[0] < 1) return message.reply('Please provide atleast 1 message to delete')
    const embed = new discord.MessageEmbed()
    .setDescription(`Deleted ${args} Messages`)
    
    await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
      message.channel.bulkDelete(messages)
      message.channel.send(embed).then(msg => msg.delete({timeout: 10000}));
      
    })
    
  }
}