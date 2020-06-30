const Discord = require("discord.js")
const money = require('discord-money');
const moment = require('moment');
const src = require('src');

module.exports = {
    name: "daily",
    aliases: ["odmena", "daily", "dennaodmena"],
    category: "economy",  
    description: "Daily odmena",
    run: async (client, message, args) => {
      const eco = require("discord-economy"); 
      var output = await eco.Daily(message.author.id)
    
    if (output.updated) {
 
      var profile = await eco.AddToBalance(message.author.id, 100)
      const embed = new Discord.MessageEmbed()
      .setTitle(":moneybag: Daily Reward :moneybag:")
      .setColor("RANDOM")
      .setDescription("You got **100** cash added to your account! New balance: **" + profile.newbalance + "**")
      .setFooter(message.author.username, message.author.avatarURL())
      .setTimestamp();
      
      message.channel.send(embed).catch(err => message.reply(`❌ Error: ${err}`)); 
    } else {
      const embed = new Discord.MessageEmbed()
      .setTitle(":moneybag: Daily Reward :moneybag:")
      .setColor("RANDOM")
      .setDescription("You already received reward! Next reward is **" + output.timetowait + "**")
      .setFooter(message.author.username, message.author.avatarURL)
      .setTimestamp();
      message.channel.send(embed).catch(err => message.reply(`❌ Error: ${err}`)); 
    }  
  }}