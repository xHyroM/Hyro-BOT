const Discord = require("discord.js")

module.exports = {
    name: "kiss",
    aliases: ["kiss", "pobozkat"],
    category: "fun",
    description: "Pobozkáš niekoho",
    usage: "",
    run: (client, message, args) => {

    const taggedUser = message.mentions.users.first();
		 if(!taggedUser) return message.channel.send("❌ Can't find user!");	
     const embed = new Discord.MessageEmbed()
    
     
        .setTitle("**POBOZKANIE**")
        .setDescription(`${message.author.username}` + " kissing " + `${taggedUser.username}`)
        .setFooter(message.author.username, message.author.avatarURL())
        .setImage("http://giphygifs.s3.amazonaws.com/media/dMYVHzANYb9p6/giphy.gif")
        .setTimestamp();
    
        message.channel.send({embed}).catch(err => message.reply(`❌ Error: ${err}`));  
    }}