const Discord = require("discord.js")

module.exports = {
    name: "achievement",
    aliases: ["achievement", "ach"],
  category: "editor",
    description: "MC Achievement text",
    usage: "",
    run: (client, message, args) => {

  const text = args.join("+");
  if(!text) return message.channel.send(":x: Please write text");   

 const embed = new Discord.MessageEmbed()
   .setColor("RANDOM")
   .setTitle("Achievement")
   .setDescription("Achievement `" + `${text}` + "`\n")
   .setFooter(message.author.username, message.author.avatarURL())
   .setImage("https://api.alexflipnote.dev/achievement?text=" + `${text}`)
   .setTimestamp();

message.channel.send({embed}).catch(err => message.reply(`❌ Error: ${err}`)); 

    }}