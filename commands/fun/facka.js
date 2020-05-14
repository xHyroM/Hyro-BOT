const Discord = require("discord.js")
const { getMember, formatDate } = require("../../functions.js");
module.exports = {
    name: "slap",
    aliases: ["facka", "slap"],
    category: "fun",
    description: "Niekomu dáte facku",
    usage: "",
    run: (client, message, args) => {
    const member = getMember(message, args.join(" "));
    const taggedUser = message.mentions.users.first();
		 if(!taggedUser) { //return message.channel.send("❌ Can't find user!");	
       const embed = new Discord.MessageEmbed()
        .setTitle("**SLAP**")
       .setDescription(`${message.author.username}` + " slapped himself")
      .setImage("https://media.giphy.com/media/3XlEk2RxPS1m8/giphy.gif")
      .setFooter(message.author.username, message.author.avatarURL())
      .setTimestamp();
    message.channel.send({embed}).catch(err => message.reply(`❌ Error: ${err}`));  
       return;
     }
     const embed = new Discord.MessageEmbed()
    
     
      .setTitle("**SLAP**")
       .setDescription(`${message.author.username}` + " slapped " + `${taggedUser.username}`)
      .setImage("https://media.giphy.com/media/3XlEk2RxPS1m8/giphy.gif")
      .setFooter(message.author.username, message.author.avatarURL())
      .setTimestamp();
    message.channel.send({embed}).catch(err => message.reply(`❌ Error: ${err}`));  
    }}