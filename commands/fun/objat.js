const Discord = require("discord.js")

module.exports = {
    name: "hug",
    aliases: ["hug", "objat"],
    category: "fun",
    description: "Niekoho obejmeš",
    usage: "",
    run: (client, message, args) => {

    const taggedUser = message.mentions.users.first();
	   if(!taggedUser) { //return message.channel.send("❌ Can't find user!");	  
            const embed = new Discord.MessageEmbed()
    
     
      .setTitle("**HUG**")
      .setDescription(`${message.author.username}` + " he has no user to hug")
      .setFooter(message.author.username, message.author.avatarURL())
      .setTimestamp()
      .setImage("https://media.giphy.com/media/ZEgBHVeRlmTqjCPlqx/giphy.gif")
    
      message.channel.send({embed}).catch(err => message.reply(`❌ Error: ${err}`)); 
       return;
     }
     const embed = new Discord.MessageEmbed()
    
     
      .setTitle("**HUG**")
      .setDescription(`${message.author.username}` + " hugging " + `${taggedUser.username}`)
      .setFooter(message.author.username, message.author.avatarURL())
      .setTimestamp()
      .setImage("http://giphygifs.s3.amazonaws.com/media/EvYHHSntaIl5m/giphy.gif")
    
      message.channel.send({embed}).catch(err => message.reply(`❌ Error: ${err}`)); 
    }}