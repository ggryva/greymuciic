const q=require("../music/queue");
module.exports.execute=i=>{
 const d=q.get(i.guild.id);
 if(d){d.player.stop();i.reply("Skipped");}
};