const max = 10
const queue = 'ytmusic-player-queue #contents'
const item = '.ytmusic-player-queue'
const items = `${queue} ${item}`
const track = '.song-info .song-title'
const artist = '.byline-wrapper .byline'
const template = (idx, track, artist) => `${idx + 1}. _${track}_ by ${artist}`;
const frt = [...document.querySelectorAll(items)].slice(0, max).map((x, idx) => template(idx, x.querySelector(track).title, x.querySelector(artist).title))
console.log(frt.join('\n'))
