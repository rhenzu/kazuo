const discord = require('discord.js')
const malScraper= require('mal-scraper')
const pagination = require('discord.js-pagination')
module.exports={
  run:async({message,client,args})=>{
    const key = (args)
   const namee = `${key}`

malScraper.getInfoFromName(namee)
  .then((data) =>{
  console.log(data)
  const len = data.characters.length
  console.log(len)
  const t = `${data.title}`
  const i1 = 0
  const i2 = 1
  const i3 = 2
  const i4 = 3
  const i5 = 4
  const i6 = 5
  const i7 = 6
  const i8 = 7
  const i9 = 8
  const i10 = 9
    
    let page1 = new discord.MessageEmbed()
    .setTitle(t)
    .setURL(data.characters[i1].link)
    .setDescription(`**${data.characters[i1].name}**\n\`Seiyuu:\` \ \`${data.characters[i1].seiyuu.name}\`\n\`Role:\` \ \`${data.characters[i1].role}\``)
    .setImage(`${data.characters[i1].picture}`)
    .setThumbnail(`${data.characters[i1].seiyuu.picture}`)
    .setColor('RANDOM')
    
    let page2 = new discord.MessageEmbed()
    .setTitle(t)
    .setURL(data.characters[i2].link)
    .setDescription(`**${data.characters[i2].name}**\n\`Seiyuu:\` \ \`${data.characters[i2].seiyuu.name}\`\n\`Role:\` \ \`${data.characters[i2].role}\``)
    .setImage(`${data.characters[i2].picture}`)
    .setThumbnail(`${data.characters[i2].seiyuu.picture}`)
    .setColor('RANDOM')
    
    let page3 = new discord.MessageEmbed()
    .setTitle(t)
    .setURL(data.characters[i3].link)
    .setDescription(`**${data.characters[i3].name}**\n\`Seiyuu:\` \ \`${data.characters[i3].seiyuu.name}\`\n\`Role:\` \ \`${data.characters[i3].role}\``)
    .setImage(`${data.characters[i3].picture}`)
    .setThumbnail(`${data.characters[i3].seiyuu.picture}`)
    .setColor('RANDOM')
    
    let page4 = new discord.MessageEmbed()
    .setTitle(t)
    .setURL(data.characters[i4].link)
    .setDescription(`**${data.characters[i4].name}**\n\`Seiyuu:\` \ \`${data.characters[i4].seiyuu.name}\`\n\`Role:\` \ \`${data.characters[i4].role}\``)
    .setImage(`${data.characters[i4].picture}`)
    .setThumbnail(`${data.characters[i4].seiyuu.picture}`)
    .setColor('RANDOM')
    
    let page5 = new discord.MessageEmbed()
    .setTitle(t)
    .setURL(data.characters[i5].link)
    .setDescription(`**${data.characters[i5].name}**\n\`Seiyuu:\` \ \`${data.characters[i5].seiyuu.name}\`\n\`Role:\` \ \`${data.characters[i5].role}\``)
    .setImage(`${data.characters[i5].picture}`)
    .setThumbnail(`${data.characters[i5].seiyuu.picture}`)
    .setColor('RANDOM')
    
    let page6 = new discord.MessageEmbed()
    .setTitle(t)
    .setURL(data.characters[i6].link)
    .setDescription(`**${data.characters[i6].name}**\n\`Seiyuu:\` \ \`${data.characters[i6].seiyuu.name}\`\n\`Role:\` \ \`${data.characters[i6].role}\``)
    .setImage(`${data.characters[i6].picture}`)
    .setThumbnail(`${data.characters[i6].seiyuu.picture}`)
    .setColor('RANDOM')
    
    let page7 = new discord.MessageEmbed()
    .setTitle(t)
    .setURL(data.characters[i7].link)
    .setDescription("-"+`**${data.characters[i7].name}**\n\`Seiyuu:\` \ \`${data.characters[i7].seiyuu.name}\`\n\`Role:\` \ \`${data.characters[i7].role}\``)
    .setImage(`${data.characters[i7].picture}`)
    .setThumbnail(`${data.characters[i7].seiyuu.picture}`)
    .setColor('RANDOM')
    
    let page8 = new discord.MessageEmbed()
    .setTitle(t)
    .setURL(data.characters[i8].link)
    .setDescription("-"+`**${data.characters[i8].name}**\n\`Seiyuu:\` \ \`${data.characters[i8].seiyuu.name}\`\n\`Role:\` \ \`${data.characters[i8].role}\``)
    .setImage(`${data.characters[i8].picture}`)
    .setThumbnail(`${data.characters[i8].seiyuu.picture}`)
    .setColor('RANDOM')
    
    let page9 = new discord.MessageEmbed()
    .setTitle(t)
    .setURL(data.characters[i9].link)
    .setDescription("-"+`**${data.characters[i9].name}**\n\`Seiyuu:\` \ \`${data.characters[i9].seiyuu.name}\`\n\`Role:\` \ \`${data.characters[i9].role}\``)
    .setImage(`${data.characters[i9].picture}`)
    .setThumbnail(`${data.characters[i9].seiyuu.picture}`)
    .setColor('RANDOM')
    
    let page10 = new discord.MessageEmbed()
    .setTitle(t)
    .setURL(data.characters[i10].link)
    .setDescription("-"+`**${data.characters[i10].name}**\n\`Seiyuu:\` \ \`${data.characters[i10].seiyuu.name}\`\n\`Role:\` \ \`${data.characters[i10].role}\``)
    .setImage(`${data.characters[i10].picture}`)
    .setThumbnail(`${data.characters[i10].seiyuu.picture}`)
    .setColor('RANDOM')
    
    
    
    
    
                
                const pages=[
                page1,
                page2,
                  page3,
                  page4,
                  page5,
                  page6,
                  page7,
                  page8,
                  page9,
                  page10
                
                ]
          
                
    const emoji=["⬇️","⬆️"]
    
    pagination(message, pages, emoji)

})
  }
}
                                 
                                               
  
  
  
