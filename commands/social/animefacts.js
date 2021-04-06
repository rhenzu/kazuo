const random = require("anime-facts");

module.exports={
  description: 'Random Anime Fact',
  category: 'Social',
  aliases: ['afacts'],
  
  callback: async({client, message, args})=>{
    
random.getFact().then((fact) => console.log(fact))
    
  }
}