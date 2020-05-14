const Discord = require("discord.js")
module.exports = {
    name: "poll",
    aliases: ["poll", "hlasovanie"],
  category: "moderation",
    description: "Hlasovanie o novinke",
    run: (client, message, args) => {
      
	message.channel.bulkDelete(1).then(() => {})
  const text = args.join(" ");
  if(!text) return message.channel.send(":x: Please write text");   
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("❌ You do not have permissions to manage messages. Please contact a staff member");
  
 const embed = new Discord.MessageEmbed()
   .setColor("#e56b00")
   .setTitle("POLL")
   .setDescription(text)
   .setFooter(message.author.username, message.author.avatarURL())
   .setTimestamp();

message.channel.send({embed}).then(embedMessage => {
    embedMessage.react("👍")
    embedMessage.react("👎")
  .catch(err => message.reply(`❌ Error: ${err}`));
  }).catch(err => message.reply(`❌ Error: ${err}`)); 
}}