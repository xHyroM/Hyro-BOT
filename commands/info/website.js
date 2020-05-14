const Discord = require("discord.js")

module.exports = {
    name: "website",
    aliases: ["website", "status", "botstatus"],
    category: "info",
    usage: "",
    run: (client, message, args) => {
  

     const embed = new Discord.MessageEmbed()
   .setColor("RANDOM")
   .setTitle("BOT WEBSITE")
   .setDescription("Website: [BOT Status](https://hyro-bot.glitch.me)")
   .setFooter(message.author.username, message.author.avatarURL())
   .setTimestamp();

    message.channel.send({embed})
      .catch(err => message.reply(`❌ Error: ${err}`)); 
    }}