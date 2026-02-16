const q=require("../music/queue");
module.exports.execute=i=>{q.get(i.guild.id)?.player.pause();i.reply("Paused");};