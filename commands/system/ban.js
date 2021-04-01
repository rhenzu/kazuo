const fetch = require('node-fetch')
module.exports = {
  syntaxError: 'Invalid, Please specify',
  permissions: ['ADMINISTRATOR'],
  permissions: ['BAN_MEMBERS'],
category: 'System',
  description: 'Bans a member Only works on a valid User',
  callback:({message, args, text, instance, channel})=>{
    
  const target = message.mentions.users.first()
  if(target.bot) return message.channel.send('Not a valid user¡')
  if(target){
  const targetMember = target.id
  targetMember.ban()
    message.channel.send('Successfully Banned '+targetMember)
  }else{
    message.channel.send('Invalid!, Please Specify')
}
}
}
