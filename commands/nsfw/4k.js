const Discord = require("discord.js")
const superagent = require('superagent')
module.exports = {
    name: "4k",
    aliases: ["4k", "nsfw4k"],
    category: "nsfw",
    usage: "",
    run: (client, message, args) => {
    if (message.channel.nsfw === true) {
    superagent.get('https://nekobot.xyz/api/image')
    .query({ type: '4k'})
    .end((err, response) => {
      
      const embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setFooter(message.author.username, message.author.avatarURL())
      .setImage(response.body.message)
      message.channel.send(embed).catch(err => message.reply(`❌ Error: ${err}`));
    });
  } else {
    message.channel.send(":x: This isn't NSFW channel!").catch(err => message.reply(`❌ Error: ${err}`)); 
  }
    }}