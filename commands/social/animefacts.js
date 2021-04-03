const random = require("anime-facts");

module.exports={
  
  callback: async({client, message, args})=>{
    
random.getFact().then((fact) => console.log(fact))
    
  }
}