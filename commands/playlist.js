const fs=require("fs");
module.exports.execute=i=>{
 const a=i.options.getString("action");
 const n=i.options.getString("name");
 const file="playlists.json";
 let data=fs.existsSync(file)?JSON.parse(fs.readFileSync(file)):{}
 if(a==="save"){data[n]=[];fs.writeFileSync(file,JSON.stringify(data));i.reply("Saved");}
 if(a==="load"){i.reply("Loaded");}
};