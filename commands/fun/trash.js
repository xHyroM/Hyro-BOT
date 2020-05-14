const Discord = require("discord.js")

module.exports = {
    name: "trash",
    aliases: ["trash", "kos"],
    category: "fun",
    description: "Hodíš niekoho do koša",
    usage: "",
    run: (client, message, args) => {

    const taggedUser = message.mentions.users.first();
	 if(!taggedUser) return message.channel.send("❌ Can't find user!");	  
     const embed = new Discord.MessageEmbed()
    
     
        .setTitle("**TRASH | Kôš**")
        .setColor("RANDOM")
        .setDescription(`${message.author.username}` + " trash " + `${taggedUser.username}`)
        .setFooter(message.author.username, message.author.avatarURL)
        .setImage("https://api.alexflipnote.dev/trash?face=" + message.author.avatarURL() + "&trash=" + taggedUser.avatarURL())
        .setTimestamp();
    
        message.channel.send({embed}).catch(err => message.reply(`❌ Error: ${err}`));  
    }}