const Discord = require("discord.js")

module.exports = {
    name: "mccube",
    aliases: ["mccube"],
    category: "info",
    description: "Ukáže (MC) hlavu 3d hráča",
    usage: "",
    run: (client, message, args) => {

	const skin = parseInt(args[0]);
	if(!args[0]) return message.channel.send("❌ Please write text!");

 const embed = new Discord.MessageEmbed()
   .setColor("RANDOM")
   .setTitle("<:Earth:640943805830266920> MC CUBE")
   .setDescription("Skin `" + `${args[0]}` + "`\n[▶ Download](https://minotar.net/cube/" + `${args[0]}` + "/100.png)")
   .setFooter(message.author.username, message.author.avatarURL())
   .setImage("https://minotar.net/cube/" + `${args[0]}` + "/100.png")
   .setTimestamp();

message.channel.send({embed})
      .catch(err => message.reply(`❌ Error: ${err}`)); 
    }}