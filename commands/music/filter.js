const distube = require("distube");
module.exports = {
  alias: ["fr"],
  description:
    "Puts a filter to music  Filters: 3d, bassboost, echo, karaoke, nightcore, vaporwave, reverse,",
  category: "Music",
  run: async ({ client, message, args }) => {
    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel) return message.channel.send('You are not in a voice channel to filter music')
      if (!args.length) return message.channel.send('Please specify the filter you want to add')
    const filter = args.join(" ");
    client.distube.setFilter(message, filter);
    message.channel.send("Filter set to " + filter);
  }
};
