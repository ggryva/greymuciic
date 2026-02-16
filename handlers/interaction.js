module.exports = client => {
 client.on("interactionCreate", async i => {
  if(!i.isChatInputCommand()) return;
  const cmd = client.commands.get(i.commandName);
  if(cmd) cmd.execute(i);
 });
};