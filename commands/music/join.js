const Discord = require("discord.js")

module.exports = {
    name: "join",
    aliases: ["join", "musicjoin"],
    category: "music", 
    description: "BOT sa pripojí do miestnosti",
    usage: "",
    run: (client, message, args) => {
	
        var VC = message.member.voice.channel;
        if (!VC)
            return message.reply(":x: You must be in the voice channel")  
      
      	var permissions = VC.permissionsFor(message.client.user);
	if (!permissions.has('CONNECT') || !permissions.has('SPEAK')) {
		return message.channel.send(':x: I need the permissions to join and speak in your voice channel!');
	}; 
      
	      if (message.member.voice.channel) {
        		message.member.voice.channel.join()
      			message.channel.send(':musical_note: Bot has been successfully joined').catch(err => message.reply(`❌ Error: ${err}`)); 
    		}
	return;
    }}