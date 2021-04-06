module.exports={
  description: 'Random Art',
  category: "OwnerPersonalCommands",
  callback: ({message})=>{
    
    const arts =[
      'https://cdn.glitch.com/103242d7-1fa1-4d94-886e-e1f1edf22451%2FUntitled599_20210317192427.png?v=1615980344923',
      'https://cdn.glitch.com/103242d7-1fa1-4d94-886e-e1f1edf22451%2FUntitled599_20210317192427.png?v=1615980344923','https://cdn.glitch.com/103242d7-1fa1-4d94-886e-e1f1edf22451%2FUntitled599_20210317192427.png?v=1615980344923',
      'https://cdn.glitch.com/103242d7-1fa1-4d94-886e-e1f1edf22451%2FUntitled599_20210317192427.png?v=1615980344923','https://cdn.glitch.com/103242d7-1fa1-4d94-886e-e1f1edf22451%2FUntitled599_20210317192427.png?v=1615980344923',
      'https://cdn.glitch.com/103242d7-1fa1-4d94-886e-e1f1edf22451%2FUntitled599_20210317192427.png?v=1615980344923','https://cdn.glitch.com/103242d7-1fa1-4d94-886e-e1f1edf22451%2FUntitled599_20210317192427.png?v=1615980344923',
      'https://cdn.glitch.com/103242d7-1fa1-4d94-886e-e1f1edf22451%2FUntitled599_20210317192427.png?v=1615980344923','https://cdn.glitch.com/103242d7-1fa1-4d94-886e-e1f1edf22451%2FUntitled599_20210317192427.png?v=1615980344923',
      'https://cdn.glitch.com/103242d7-1fa1-4d94-886e-e1f1edf22451%2FUntitled599_20210317192427.png?v=1615980344923','https://cdn.glitch.com/103242d7-1fa1-4d94-886e-e1f1edf22451%2FUntitled599_20210317192427.png?v=1615980344923',
      'https://cdn.glitch.com/103242d7-1fa1-4d94-886e-e1f1edf22451%2FUntitled599_20210317192427.png?v=1615980344923','https://cdn.glitch.com/103242d7-1fa1-4d94-886e-e1f1edf22451%2FUntitled599_20210317192427.png?v=1615980344923',
      'https://cdn.glitch.com/103242d7-1fa1-4d94-886e-e1f1edf22451%2FUntitled599_20210317192427.png?v=1615980344923','https://cdn.glitch.com/103242d7-1fa1-4d94-886e-e1f1edf22451%2FUntitled599_20210317170106.png?v=1615971726676',
    ]
    const r = Math.floor(Math.random()*arts.length)
    console.log(r)
    if([r] === 1){
      message.reply('Congrats you Found the Sushi Art')
      message.channel.send(arts[r])
    }else{
    
    message.channel.send(arts[r])
    
  }
}
}