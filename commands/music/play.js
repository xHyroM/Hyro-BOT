const Discord = require("discord.js")

module.exports = {
    name: "play",
    aliases: ["play", "p"],
    category: "music", 
    description: "BOT začne hrať hudbu",
    usage: "",
    run: (client, message, args) => {

/*  const streamOptions = { seek: 0, volume: 1 };
  const ytdl = require('ytdl-core');
  

        var VC = message.member.voiceChannel;
        if (!VC)
            return message.reply(":x: You must be in the voice channel")
	
	var permissions = VC.permissionsFor(message.client.user);
	if (!permissions.has('CONNECT') || !permissions.has('SPEAK')) {
		return message.channel.send(':x: I need the permissions to join and speak in your voice channel!');
	};
  
	
	var link = args[0]
        if (!link)
            return message.reply(":x: You must enter a link")
	
    VC.join()
        .then(connection => {
	   message.channel.send(":musical_note: Music started playing!")
            const stream = ytdl(args[0]);
            const dispatcher = connection.playStream(stream, streamOptions);

        })
      .catch(err => message.reply(`❌ Error: ${err}`)); */
    }}