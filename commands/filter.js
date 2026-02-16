const q=require("../music/queue");
module.exports.execute=i=>{
 const d=q.get(i.guild.id); d.filter=i.options.getString("type");
 i.reply("Filter set: "+d.filter);
};