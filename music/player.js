const { joinVoiceChannel, createAudioPlayer, createAudioResource, AudioPlayerStatus } = require("@discordjs/voice");
const ytdl = require("ytdl-core");
const queue = require("./queue");

module.exports = async (interaction, song) => {
 let q = queue.get(interaction.guild.id);
 if(!q){
  q = { songs:[], loop:false, filter:null };
  q.player = createAudioPlayer();
  q.connection = joinVoiceChannel({
    channelId: interaction.member.voice.channel.id,
    guildId: interaction.guild.id,
    adapterCreator: interaction.guild.voiceAdapterCreator
  });
  queue.set(interaction.guild.id,q);
 }
 q.songs.push(song);
 if(q.songs.length>1) return;

 const play = () => {
  const s = q.songs[0];
  const stream = ytdl(s.url,{filter:"audioonly",highWaterMark:1<<25});
  q.player.play(createAudioResource(stream));
  q.connection.subscribe(q.player);
 };

 play();
 q.player.on(AudioPlayerStatus.Idle,()=>{
  if(!q.loop) q.songs.shift();
  if(q.songs.length) play();
 });
};