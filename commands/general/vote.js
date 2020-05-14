const { MessageEmbed } = require("discord.js");
const fs = require("fs")

module.exports = {
    name: "vote",
    aliases: ["vote"],
    category: "general",
    run: async (client, message, args) => {
      
      const embed1 = new MessageEmbed()
      .setTitle("VOTE")
      .setDescription("Link | https://top.gg/bot/492015015449067520\nPlease vote for Hyro BOT!")
      .setFooter(message.author.username, message.author.avatarURL())
      .setTimestamp(); 
      message.author.send(embed1).catch(err => message.reply(`❌ Error: ${err}`));       
      
      const embed = new MessageEmbed()
      .setTitle("VOTE")
      .setDescription("Link has send to DM <:checked:634724283511472149>")
      .setFooter(message.author.username, message.author.avatarURL())
      .setTimestamp(); 
      message.channel.send(embed).catch(err => message.reply(`❌ Error: ${err}`)); 
    }}