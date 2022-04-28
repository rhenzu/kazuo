const DiscordJS = require('discord.js')
const canvas = require('canvas')

module.exports = {
  category: 'Gacha',
  description: 'Test Gacha',
  slash: false,
callback: async ({client, message}) => {
  const canv = canvas.createCanvas(1920, 1080)
  const ctx = canv.getContext('2d')
  const pic = 'https://cdn.glitch.global/929cc13b-ddfe-4e4d-9b42-6a6df15fccd1/IMG_20220207_210853.png?v=1651130927304'
  
  const img = await canvas.loadImage(pic)
  ctx.drawImage(img, 0, 0, canv.width, canv.height)
  
  const attachment = new DiscordJS.MessageAttachment(canv.toBuffer(), 'test.png')
  console.log(img)
  console.log(attachment)
  message.reply(img)
}
}