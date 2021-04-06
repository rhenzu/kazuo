var Meta = require('html-metadata-parser');
 
 

module.exports={
  
run: async({client, message, args})=>{

const url = 'https://myanimelist.net/anime/20047/Sakura_Trick'
const char = 'https://myanimelist.net/character/90177/Utaha_Kasumigaoka'


 
Meta.parser(char, function (err, result) {
 
    console.log(result);
})}}