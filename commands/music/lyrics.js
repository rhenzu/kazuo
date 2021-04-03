const { getLyrics, getSong }= require ('genius-lyrics-api')
const distube = require('distube')
module.exports = {
  
  aliases: 'lyrics',
  category: 'Music',
  description: 'Displays lyrics of current song',
  callback: async({client, message, args}) =>{
    
    let queue = client.distube.getQueue(message)
  
    let songs = queue.songs.length(1)
    
const options = {
	apiKey: (process.env.GENIUS),
	title: `${songs}`,
	artist: '',
	optimizeQuery: true
};

getLyrics(options).then((lyrics) => console.log(lyrics));

getSong(options).then((song) =>
	console.log(`
	${song.id}
	${song.url}
	${song.albumArt}
	${song.lyrics}`)
);
  }
}