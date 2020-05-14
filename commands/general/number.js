const Discord = require("discord.js")

module.exports = {
    name: "number",
    aliases: ["numbers", "number"],
  category: "general",
    description: "Number Generator",
    usage: "",
    run: (client, message, args) => {

    const nunber1 = parseInt(args[0]);
	   
	if(!nunber1) return message.channel.send("❌ Please write number! *(Small)*");
	 
	  const nunber2 = parseInt(args[1]);
	  
	  if(!nunber2) return message.channel.send("❌ Please write number! *(Big)*");
	  
	var randomNunber = Math.floor(Math.random() * `${args[1]}` + `${args[0]}`);
	
    const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("NUMBER GENERATOR")
    .setDescription("Random number\n`" + (randomNunber) + "`")
	.setFooter(message.author.username, message.author.avatarURL())
	.setThumbnail("https://api.alexflipnote.dev/supreme?text=" + (randomNunber))
    .setTimestamp();

    message.channel.send({embed})
      .catch(err => message.reply(`❌ Error: ${err}`)); 
    }}