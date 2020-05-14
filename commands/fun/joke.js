const Discord = require("discord.js")

module.exports = {
    name: "joke",
    aliases: ["joke", "jokes"],
    category: "fun",
    usage: "",
    run: (client, message, args) => {

    const taggedUser = message.mentions.users.first();
	 if(!taggedUser) return message.channel.send("❌ Can't find user!");	  
     const embed = new Discord.MessageEmbed()
    
     
        .setTitle("**JOKE**")
        .setColor("RANDOM")
        .setFooter(message.author.username, message.author.avatarURL())
        .setImage("https://api.alexflipnote.dev/amiajoke?image=" + taggedUser.avatarURL())
        .setTimestamp();
    
        message.channel.send({embed}).catch(err => message.reply(`❌ Error: ${err}`));  
    }}