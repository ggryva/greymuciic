const yt = require("yt-search");
const spotify = require("../music/spotify");
const player = require("../music/player");
module.exports.execute = async i => {
 if(!i.member.voice.channel) return i.reply("Join VC");
 const q = i.options.getString("query");
 const song = q.includes("spotify") ? await spotify(q) : (await yt(q)).videos[0];
 await player(i, song);
 i.reply(`🎶 ${song.title}`);
};