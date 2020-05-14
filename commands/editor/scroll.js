const Discord = require("discord.js")

module.exports = {
    name: "scroll",
    aliases: ["scroll"],
    description: "Scroll text",
  category: "editor",
    usage: "",
    run: (client, message, args) => {

  const text = args.join("+");
  if(!text) return message.channel.send(":x: Please write text");   
	
 const embed = new Discord.MessageEmbed()
   .setColor("RANDOM")
   .setTitle("SUPREME")
   .setDescription("Scroll: " + `${text}`)
   .setFooter(message.author.username, message.author.avatarURL())
   .setImage("https://api.alexflipnote.dev/scroll?text=" + `${text}`)
   .setTimestamp();

message.channel.send({embed}).catch(err => message.reply(`❌ Error: ${err}`));  
    }}