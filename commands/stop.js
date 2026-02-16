const q=require("../music/queue");
module.exports.execute=i=>{
 const d=q.get(i.guild.id);
 if(d){d.songs=[];d.player.stop();d.connection.destroy();q.delete(i.guild.id);}
 i.reply("Stopped");
};