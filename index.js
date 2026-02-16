require("dotenv").config();
const { Client, GatewayIntentBits, Collection } = require("discord.js");
const express = require("express");
const app = express();

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildVoiceStates]
});

client.commands = new Collection();
["play","skip","pause","resume","stop","loop","filter","playlist","247"]
.forEach(c => client.commands.set(c, require(`./commands/${c}`)));

require("./handlers/interaction")(client);

client.once("ready", () => {
  console.log("👑 JOCKIE GOD MODE REAL ONLINE");
});

app.get("/", (_,res)=>res.send("God Mode API OK"));
app.listen(process.env.PORT||3000);

client.login(process.env.TOKEN);
