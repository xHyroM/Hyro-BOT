const Discord = require("discord.js")
const love = Math.random() * 100;
const loveIndex = Math.floor(love / 10);
const loveLevel = "💖".repeat(loveIndex) + "💔".repeat(10 - loveIndex);

module.exports = {
    name: "love",
    aliases: ["zalubit", "love"],
    category: "fun",
    description: "Zalúbiš sa do niekoho",
    usage: "",
    run: (client, message, args) => {

    const taggedUser = message.mentions.users.first();
		 if(!taggedUser) return message.channel.send("❌ Can't find user!");	
     const embed = new Discord.MessageEmbed()
    
     
      .setTitle("**LOVE**")
      .setDescription(`${message.author.username}` + " fell in love with " + `${taggedUser.username}` + "")
      .setFooter(message.author.username, message.author.avatarURL())
      .setImage("https://api.alexflipnote.dev/ship?user=" + message.author.avatarURL() + "&user2=" + taggedUser.avatarURL())
      .setTimestamp();
    
      message.channel.send({embed}).catch(err => message.reply(`❌ Error: ${err}`)); 
  
    }}