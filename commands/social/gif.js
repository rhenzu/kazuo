const fetch = require('node-fetch')
const discord = require('discord.js')
module.exports = {
  minArgs: '1',
  maxArgs: '2',
  syntaxError: 'Invalid, Please use {PREFIX}{COMMAND} <Arguments>',
category: 'Social',
  description: 'Random gifs with the provided argument',
  callback:async({message, args, text, instance, channel})=>{
  const keywords = (args)
    let url = `https://g.tenor.com/v1/search?q=${keywords}&key=LIVDSRZULELA&ContentFilter=HIGH`;
    let response = await fetch(url);
    let json = await response.json();
    const index = Math.floor(Math.random()*json.results.length);
    message.reply("Here's your random "+keywords)
    message.channel.send(json.results[index].url);
  }
}

