const q=require("../music/queue");
module.exports.execute=i=>{q.get(i.guild.id)?.player.unpause();i.reply("Resumed");};