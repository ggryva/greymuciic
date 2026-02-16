const q=require("../music/queue");
module.exports.execute=i=>{
 const d=q.get(i.guild.id); d.loop=!d.loop;
 i.reply("Loop: "+d.loop);
};