const Discord = require("discord.js")
module.exports = {
 name: "servername",
aliases: ["servernick", "setservername", "setservernick"],
 category: "moderation",
 usage: "",
 run: async (client, message, args) => {  
  if(!message.member.hasPermission("MANAGE_GUILD")) return message.reply("❌ You do not have permissions to manage guild. Please contact a staff member");
  const text = args.join(" ");
  if(!text) return message.channel.send(":x: Please write text");      
  message.guild.setName(text).catch(err => message.reply(`❌ Error: ${err}`)); 
  message.channel.send("Server name set! [" + text + "]").catch(err => message.reply(`❌ Error: ${err}`)); 
 }}  