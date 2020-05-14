const Discord = require("discord.js")

module.exports = {
    name: "kill",
    aliases: ["zabit", "kill"],
    category: "fun",
    description: "Niekoho zabijete",
    usage: "",
    run: (client, message, args) => {

    const taggedUser = message.mentions.users.first();
		 if(!taggedUser) return message.channel.send("❌ Can't find user!");	
     const embed = new Discord.MessageEmbed()
    
     
      .setTitle("**KILL | ZABIT**")
       .setDescription(`${message.author.username}` + " killed " + `${taggedUser.username}`)
      .setImage("https://media.giphy.com/media/QHYHhShm1sjVS/giphy.gif")
      .setFooter(message.author.username, message.author.avatarURL())
      .setTimestamp();    
      message.channel.send({embed}).catch(err => message.reply(`❌ Error: ${err}`)); 
    }}