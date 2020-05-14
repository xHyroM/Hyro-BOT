const Discord = require("discord.js")

module.exports = {
    name: "challenge",
    aliases: ["challenge"],
  category: "editor",
    description: "MC Challenge text",
    usage: "",
    run: (client, message, args) => {

  const text = args.join("+");
  if(!text) return message.channel.send(":x: Please write text");   

 const embed = new Discord.MessageEmbed()
   .setColor("RANDOM")
   .setTitle("CHALLENGE")
   .setDescription("Challenge `" + `${text}` + "`\n")
   .setFooter(message.author.username, message.author.avatarURL())
   .setImage("https://api.alexflipnote.dev/challenge?text=" + `${text}`)
   .setTimestamp();

message.channel.send({embed}).catch(err => message.reply(`❌ Error: ${err}`)); 

    }}