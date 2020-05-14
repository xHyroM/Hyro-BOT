const Discord = require("discord.js")

module.exports = {
    name: "Invite",
    aliases: ["invite","invitebot","botinvite","invites"],
    description: "Pošle invite link",
    category: "info",
    usage: "",
    run: (client, message, args) => {
      
	const embed = new Discord.MessageEmbed()

	  .setColor("RANDOM")
	  .setTitle("**INVITE**")
    .setDescription("Invite bol `odoslaný` <:checked:634724283511472149>")
	  .setFooter(message.author.username, message.author.avatarURL)
	  .setTimestamp();
    
	  message.channel.send({embed}).then(embedMessage => {
		  embedMessage.react('647150985285861386');
		  embedMessage.react('645202586894467072');
	  }).catch(err => message.reply(`❌ Error: ${err}`)); 
  
  
	message.author.send("", {
  embed: {
				  color: 1752220,
				  description:
				   "**Invite:** https://discordapp.com/oauth2/authorize?client_id=492015015449067520&scope=bot&permissions=2147483127\n**SERVER** https://discord.gg/cqfdhTr"
			  }
      }).catch(err => message.reply(`❌ Error: ${err}`)); 
    }}