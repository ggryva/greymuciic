require("dotenv").config();
const { REST, Routes, SlashCommandBuilder } = require("discord.js");
const cmds = [
 new SlashCommandBuilder().setName("play").setDescription("Play song")
 .addStringOption(o=>o.setName("query").setRequired(true).setDescription("YT / Spotify")),
 new SlashCommandBuilder().setName("skip").setDescription("Skip"),
 new SlashCommandBuilder().setName("pause").setDescription("Pause"),
 new SlashCommandBuilder().setName("resume").setDescription("Resume"),
 new SlashCommandBuilder().setName("stop").setDescription("Stop"),
 new SlashCommandBuilder().setName("loop").setDescription("Loop"),
 new SlashCommandBuilder().setName("filter").setDescription("Filter")
 .addStringOption(o=>o.setName("type").setRequired(true).setDescription("bassboost/nightcore")),
 new SlashCommandBuilder().setName("playlist").setDescription("Playlist")
 .addStringOption(o=>o.setName("action").setRequired(true).setDescription("save/load"))
 .addStringOption(o=>o.setName("name").setRequired(true).setDescription("name")),
 new SlashCommandBuilder().setName("247").setDescription("24/7 mode")
];
const rest = new REST({version:"10"}).setToken(process.env.TOKEN);
(async()=>{
 await rest.put(Routes.applicationCommands(process.env.CLIENT_ID),{body:cmds.map(c=>c.toJSON())});
 console.log("Slash commands registered");
})();