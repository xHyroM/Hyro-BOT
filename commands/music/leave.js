const Discord = require("discord.js")

module.exports = {
    name: "leave",
    aliases: ["leave", "musicleave"],
    category: "music", 
    description: "Odpojí bota z channelu",
    usage: "",
    run: (client, message, args) => {
	
        var VC = message.member.voice.channel;
        if (!VC)
            return message.reply(":x: You must be in the voice channel")  
      
	      if (message.member.voice.channel) {
        		message.member.voice.channel.leave()
      			message.channel.send(':musical_note: Bot has been successfully disconnected').catch(err => message.reply(`❌ Error: ${err}`)); 
    		};
	return;
    }}