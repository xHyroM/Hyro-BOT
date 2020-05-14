const Discord = require("discord.js")

module.exports = {
    name: "head",
    aliases: ["cube", "mccube"],
    category: "info",
    description: "Ukáže (MC) hlavu hráča",
    usage: "",
    run: (client, message, args) => {

	const skin = parseInt(args[0]);
	if(!args[0]) return message.channel.send("❌ Please write text!");

 const embed = new Discord.MessageEmbed()
   .setColor("RANDOM")
   .setTitle("<:Earth:640943805830266920> MC HEAD")
   .setDescription("Skin `" + `${args[0]}` + "`\n[▶ Stiahnut](https://minotar.net/helm/" + `${args[0]}` + "/100.png)")
   .setFooter(message.author.username, message.author.avatarURL())
   .setImage("https://minotar.net/helm/" + `${args[0]}` + "/100.png")
   .setTimestamp();

message.channel.send({embed})
      .catch(err => message.reply(`❌ Error: ${err}`)); 
    }}