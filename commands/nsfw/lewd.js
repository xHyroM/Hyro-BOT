const Discord = require("discord.js")
const superagent = require('superagent')
module.exports = {
    name: "lewd",
    aliases: ["lewd", "nsfwlewd"],
    category: "nsfw",
    usage: "",
    run: (client, message, args) => {
        if (message.channel.nsfw === true) {
    superagent.get('https://nekobot.xyz/api/image')
    .query({ type: 'lewd'})
    .end((err, response) => {
            const embed = new Discord.MessageEmbed()
      .setFooter(message.author.username, message.author.avatarURL())
            .setColor("RANDOM")
                  .setImage(response.body.message)

             message.channel.send(embed).catch(err => message.reply(`❌ Error: ${err}`)); 
    });
  } else {
    message.channel.send(":x: This isn't NSFW channel!").catch(err => message.reply(`❌ Error: ${err}`)); 
  }
    }}