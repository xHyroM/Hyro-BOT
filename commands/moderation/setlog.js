const Discord = require("discord.js")
const fs = require("fs")

module.exports = {
    name: "setlog",
    aliases: ["setlog", "setlogchannel"],
  category: "moderation",
    description: "Set log channel",
    usage: "",
    run: (client, message, args) => {
      
  const vserver = args.join(" ");    
	if(!message.member.hasPermission("MANAGE_GUILD")) return message.reply("❌ You do not have permissions to manage server. Please contact a staff member");
  if(!vserver) return message.channel.send(":x: Please write log channel without **#**");   

  let logchannel = JSON.parse(fs.readFileSync("./json/server/logchannel.json", "utf8"))
  logchannel[message.guild.id] = {
    logchannel: vserver
  };
  
  fs.writeFile("./json/server/logchannel.json", JSON.stringify(logchannel), (err) => {
    if (err) console.log(err).catch(err => message.reply(`❌ Error: ${err}`)); 
  });
  	message.channel.send('Log channel set! [' + vserver + "]")
  .catch(err => message.reply(`❌ Error: ${err}`)); 
    }}