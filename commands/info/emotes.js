const Discord = require("discord.js")
const fs = require("fs")

module.exports = {
    name: "emotes",
    aliases: ["emote-list", "emotes-list", "emote", "emotes", "emoji-list", "emojilist", "emoji"],
    category: "info",
    description: "Emotes list",
    usage: "",
    run: (client, message, args, prefix) => {
      const emojiList = message.guild.emojis.cache.map((e, x) => (`${e}`)).join(' | ')
      	const embed = new Discord.MessageEmbed()
		.setTitle("**Custom Emoji List (" + message.guild.emojis.cache.size + ")**")
    .setDescription(emojiList)
    .setFooter(message.author.username, message.author.avatarURL())
    .setTimestamp();    
      		message.channel.send({embed}).catch(err => message.reply(`❌ Error: ${err}`));   
    }}