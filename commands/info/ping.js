const Discord = require("discord.js")

module.exports = {
    name: "ping",
    aliases: ["ping", "botping", "pings", "latency"],
    category: "info",
    description: "Zobrazí ping bota",
    usage: "",
    run: (client, message, args) => {
	var ping = (new Date().getTime() - message.createdTimestamp);
	const embed = new Discord.MessageEmbed()
  
	.setColor("RANDOM")
	.setTitle("**PING**")
    .setDescription("Pong :ping_pong:\n Môj ping je `" + `${ping}` + " ms`")
	.setFooter(message.author.username, message.author.avatarURL())
	.setTimestamp();
    
	message.channel.send({embed}).then(embedMessage => {
		embedMessage.react("📡");
	}).catch(err => message.reply(`❌ Error: ${err}`)); 
      
    }}