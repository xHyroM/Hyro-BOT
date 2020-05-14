const Discord = require("discord.js")

module.exports = {
    name: "supreme",
    aliases: ["supreme"],
    description: "Supreme text",
  category: "editor",
    usage: "",
    run: (client, message, args) => {
      
  const text = args.join("+");
  if(!text) return message.channel.send(":x: Please write text");   
	//const qr = parseInt(args);
	//if(!args[0]) return message.channel.send("❌ Please write text!");
	
 const embed = new Discord.MessageEmbed()
   .setColor("RANDOM")
   .setTitle("SUPREME")
   .setDescription("Supreme: " + `${text}`)
   .setFooter(message.author.username, message.author.avatarURL())
   .setImage("https://api.alexflipnote.dev/supreme?text=" + `${text}`)
   .setTimestamp();

message.channel.send({embed}).catch(err => message.reply(`❌ Error: ${err}`)); 

    }}