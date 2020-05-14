const Discord = require("discord.js")

module.exports = {
    name: "shorten",
    aliases: ["shortenurl", "shorten"],
  category: "general",
    description: "Skráti URL",
    usage: "",
    run: (client, message, args) => {

const shorten = require('isgd');

if (!args[0]) return message.channel.send(":x: shorten [URL] (TEXT)")
  
if (!args[1]) {
  shorten.shorten(args[0], function(res) {
    if (res.startsWith('Error')) message.channel.send('**Please write url!')
    
    const embed = new Discord.MessageEmbed()
    
    .setColor("RANDOM")
    .setTitle("**SHORT URL**")
    .setDescription(`**Your link:**\n*${res}*`)
    .setFooter(message.author.username, message.author.avatarURL())
    .setTimestamp();
    
    message.channel.send({embed}) 
    .catch(err => message.reply(`❌ Error: ${err}`)); 
  })
} else {
  
  shorten.custom(args[0], args[1], function(res) {
    if (res.startsWith("Error")) return message.channel.send(`**Text must be longer than 5 characters / Or the link already exists (TEXT)**`);
    
    const embed = new Discord.MessageEmbed()
    
    .setColor("RANDOM")
    .setTitle("**SHORT URL**")
    .setDescription(`**Your link:**\n*${res}*`)
    .setFooter(message.author.username, message.author.avatarURL())
    .setTimestamp();
    
    message.channel.send({embed}) 
    .catch(err => message.reply(`❌ Error: ${err}`)); 
      })
  
      } 
    }}