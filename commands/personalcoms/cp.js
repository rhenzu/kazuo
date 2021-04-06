

module.exports ={
  ownerOnly: true,
  aliases:['cp,ca'],
  category: "OwnerPersonalCommands",
  description: 'Changes Bot Avatar',
  callback: ({client,message})=>{
    
    const image = message.attachments.first().url
    
    client.user.setAvatar (image)
    message.channel.send('profile updated!')
  
    
    
  
}
  
  
}