const { getData } = require("spotify-url-info");
const yt = require("yt-search");
module.exports = async url => {
 const d = await getData(url);
 const r = await yt(`${d.name} ${d.artists[0].name}`);
 return r.videos[0];
};