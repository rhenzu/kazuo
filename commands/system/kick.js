const fetch = require('node-fetch')
module.exports = {
  syntaxError: 'Invalid, Please specify',
  permissions: ['ADMINISTRATOR'],
  permissions: ['KICK_MEMBERS'],
category: 'System',
  description: 'Kicks a member Only works on a valid User',
  callback:({message, args, text, instance, channel})=>{
    
  const target = message.mentions.users.first()
  if(target){
  const targetMember = message.guild.members.cache.get(target.id)
  targetMember.kick()
    message.channel.send('Successfully Kicked '+target.username)
  }else{
    message.channel.send('Invalid!, Please Specify')
}
}
}
