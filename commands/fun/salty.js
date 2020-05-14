const Discord = require("discord.js")

module.exports = {
    name: "salty",
    aliases: ["salty", "osolit"],
    category: "fun",
    description: "Posolíš niekoho",
    usage: "",
    run: (client, message, args) => {

    const taggedUser = message.mentions.users.first();
		 if(!taggedUser) return message.channel.send("❌ Can't find user!");	
     const embed = new Discord.MessageEmbed()
    
     
      .setTitle("**SALTY | SOL**")
       .setDescription(`${message.author.username}` + " salty " + `${taggedUser.username}`)
       .setFooter(message.author.username, message.author.avatarURL())
      .setImage("https://api.alexflipnote.dev/salty?image=" + taggedUser.avatarURL())
           .setTimestamp();
    
message.channel.send({embed}).catch(err => message.reply(`❌ Error: ${err}`)); 
    }}