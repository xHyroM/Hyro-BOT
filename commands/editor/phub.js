const Discord = require("discord.js")

module.exports = {
    name: "phub",
    aliases: ["phub", "pornhub"],
    description: "PHUB text",
  category: "editor",
    usage: "",
    run: (client, message, args) => {

	const qr = parseInt(args);
	if(!args[0]) return message.channel.send("❌ Please write text!");
	if(!args[1]) return message.channel.send("❌ Please write text! [2]");  
	
 const embed = new Discord.MessageEmbed()
   .setColor("RANDOM")
   .setTitle("PHUB")
   .setDescription("PHUB: " + `${args[0]}` + " " +`${args[1]}`)
   .addField("For a space, write **+**", " ⁫⁫⁫⁫‬‬‬‬‬    ")
   .setFooter(message.author.username, message.author.avatarURL())
   .setImage("https://api.alexflipnote.dev/pornhub?text=" + `${args[0]}` + "&text2=" + `${args[1]}`)
   .setTimestamp();

message.channel.send({embed}).catch(err => message.reply(`❌ Error: ${err}`)); 

    }}