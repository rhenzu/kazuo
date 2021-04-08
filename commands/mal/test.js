const pagination = require('discord.js-pagination')
const malScraper = require('mal-scraper')
const discord = require('discord.js')

module.exports={
  minArgs:'1',
  maxArgs: '15',
run: async({client, message, args})=>{
  
 const key = (args)

const name = `${key}`

 
malScraper.getRecommendationsList(name)
  .then((data) => {
  
  console.log(data)
  
let len = data.length;
      console.log(len);
      const i1 = 0;
      const i2 = 1;
      const i3 = 2;
      const i4 = 3;
      const i5 = 4;
      const i6 = 5;
      const i7 = 6;
      const i8 = 7;
      const i9 = 8;
      const i10 = 9;
if(len>=3){
        let page1 = new discord.MessageEmbed()
         .setTitle(data[i1].anime)
         .setImage(data[i1].pictureImage)
         .setURL(data[i1].animeLink)
         .setDescription(`${data[i1].author}\n ${data[i1].mainRecommendation}`)
        .setColor('RANDOM')
        
        const pages = [
          page1
        ];

        const emoji = ["⬇️", "⬆️"];

        pagination(message, pages, emoji);
  
  message.channel.send(data[0].mainRecommendation[i1])
  
}else{
  message.channel.send('err')
}
})
}}