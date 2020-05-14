const Discord = require("discord.js")

module.exports = {
    name: "support",
    aliases: ["support", "supportserver", "supports"],
    category: "info",
    description: "Support server",
    usage: "",
    run: (client, message, args) => {
  
  
	const embed = new Discord.MessageEmbed()

	.setColor("RANDOM")
	.setTitle("**SUPPORT SERVER**")
	.setFooter(message.author.username, message.author.avatarURL)
  .setThumbnail("http://hyro.wz.sk/upload/uploads/HYRBOT.png")
  .addField("<:HyroBOT:647150985285861386> Hyro BOT", "[**INVITE**](https://discordapp.com/oauth2/authorize?client_id=492015015449067520&scope=bot&permissions=2147483127)")
  .addField("<:Hyro2:645202586894467072> DEVELOPER", "`𝙃𝙮𝙧𝙤#8938`")
  .addField("<:HyroLogoServer:645202580703674378> SUPPORT SERVER", "[**INVITE**](https://discord.gg/cqfdhTr)")
	.setTimestamp();
    
	message.channel.send({embed}).then(embedMessage => {
		embedMessage.react('645202586894467072');
		embedMessage.react('647150985285861386');
    embedMessage.react('645202580703674378');
	}).catch(err => message.reply(`❌ Error: ${err}`));   
}}