const Discord = require("discord.js")
var flip = require('flip-text')
module.exports = {
    name: "fliptext",
    aliases: ["textflip", "fliptext"],
  category: "general",
    usage: "",
    run: (client, message, args) => {
  const text = args.join(" ");
  if(!text) return message.channel.send(":x: Please write text");
                          
        
    const embed = new Discord.MessageEmbed()
    .setColor(text)
    .setTitle("FLIP TEXT")
    .setDescription("Fliped Text: `" + flip(text) + "`")
    .setFooter(message.author.username, message.author.avatarURL())
    //.setImage("https://api.alexflipnote.dev/color/image/" + (randomColor))
    .setTimestamp();

  message.channel.send({embed})
      .catch(err => message.reply(`❌ Error: ${err}`)); 
                  
    }}