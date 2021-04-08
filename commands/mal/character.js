const jikan = require('jikan-node')
const mal = new jikan()
const d = require('discord.js')
module.exports={
  aliases:['char','chr'],
  run: async ({client, message, args})=>{
    const key = (args)
    const type = 'character'
    const name = `${key}`
    mal.search(type, name).then((info) => {
      console.log(info)
      mal.findCharacter(info.results[0].mal_id).then((data)=>{
        
        let ste = data.about
        let regex = /\\n/g;
        ste=ste.replace(regex, '')
        console.log(data)
        
        for(let i = 0; i < ste.length; i += 2000) {
    const toSend = ste.substring(i, Math.min(ste.length, i + 2000));
        
    let e = new d.MessageEmbed()
    .setTitle(data.animeography[0].name)
    .setURL(data.url)
    .setDescription(`**${data.name}**\n ${toSend}\n **Favorites** \ \`${"❤️"+data.member_favorites}\``)
    .setImage(data.image_url)
    .setThumbnail(data.animeography[0].image_url)
    .setColor('RANDOM')
      message.channel.send(e)
        }
      })
      })
  }
}
