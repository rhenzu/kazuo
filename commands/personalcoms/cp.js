

module.exports ={
  ownerOnly: true,
  aliases:['cp,ca'],
  category: "```Rhenzu's Personal Commands```",
  description: 'Changes Bot Avatar',
  callback: ({client,message})=>{
    
    const image = message.attachments.first().url
    
    client.user.setAvatar (image)
    message.channel.send('profile updated!')
  
    
    
  
}
  
  
}