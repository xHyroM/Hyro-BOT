const Discord = require("discord.js")
const fs = require("fs")
const db = require("quick.db")
var request = require('request');
var cheerio = require('cheerio');
module.exports = {
    name: "botnick",
    aliases: ["botnick", "setbotnick"],
  category: "moderation",
    description: "Nastaví prefix serveru",
    usage: "",
    run: (client, message, args) => { 
      
   if(!message.member.hasPermission("MANAGE_NICKNAMES")) return message.reply("❌ You do not have permissions to manage nicknames. Please contact a staff member");             
    
      let username = args.join(' ');
      if (username.length < 1) return message.reply('❌ Please write text!')
       message.guild.members.cache.get('492015015449067520').setNickname(username);
        const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle(":rosette: NICK CHANGED :rosette:")
        .addField("Bot username set successfully!", username + " is now the nickname for the bot :white_check_mark:")
      	.setFooter(message.author.username, message.author.avatarURL())
    .setTimestamp();
        message.channel.send({embed}).then(embedMessage => {
		embedMessage.react("🏵️");
	}) 
      

    }}