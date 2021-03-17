const distube = require('distube')
module.exports={
  alias:['ap'],
  description: 'Toggles autoplay On / Off',
  category: 'Music',
  run: ({client, message, args})=>{
    const voiceChannel = message.member.voice.channel;
    if(!voiceChannel) return message.channel.send('You are not in a voice channel to toggle autoplay')
        let mode = client.distube.toggleAutoplay(message);
        message.channel.send("Set autoplay mode to `" + (mode ? "On" : "Off") + "`");
    }
    
  }
  
  
