const Discord = require("discord.js")

module.exports = {
    name: "avatar",
    aliases: ["avatar", "avatars"],
    category: "info",
    description: "Ukáže avatar",
    usage: "",
    run: (client, message, args) => {
        
      const taggedUser = message.mentions.users.first();
	  	if(!taggedUser) return message.channel.send("❌ Can't find user!");	
      const embed = new Discord.MessageEmbed()
      .setAuthor("")
      .setTitle("**AVATAR**")
      .setDescription("")
      .setURL(taggedUser.avatarURL())
      .addField("<:label1:640575568802480178> Username", taggedUser.username)
      .setFooter(message.author.username, message.author.avatarURL())
      .setImage(taggedUser.avatarURL())
      .setTimestamp();

      message.channel.send({embed})
      .catch(err => message.reply(`❌ Error: ${err}`)); 
    }}