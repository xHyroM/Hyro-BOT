const Discord = require("discord.js")

module.exports = {
    name: "lesbian",
    aliases: ["lezba", "lesbian"],
    category: "fun",
    description: "Ukáže na koľko % si lezba",
    usage: "",
    run: (client, message, args) => {
	   	  
    const taggedUser = message.mentions.users.first();
	   if(!taggedUser) return message.channel.send("❌ Can't find user!");	  
    const embed = new Discord.MessageEmbed()
    
    .setTitle(":ghost: LESBIAN TEST")
    .setDescription(`${taggedUser.username}` + " lesbian `" + Math.floor(Math.random() * 100 + 1) + "%`")
    .setFooter(message.author.username, message.author.avatarURL())
    .setTimestamp();
    
    message.channel.send({embed}).catch(err => message.reply(`❌ Error: ${err}`)); 
  }}