const Discord = require("discord.js")
module.exports = {
    name: "alert",
    aliases: ["oznameni", "alert"],
    category: "moderation",    
    description: "Alert oznámenie",
    run: (client, message, args) => {

     message.channel.bulkDelete(1).then(() => {})
  if(!args[0]) return message.channel.send(":x: Please write title!") 
  if(!args[1]) return message.channel.send(":x: Please write text!")
   if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("❌ You do not have permissions to manage messages. Please contact a staff member");
      
      
  const embed = new Discord.MessageEmbed()
    .setColor("#e56b00")
    .setDescription(args.slice(1).join(' '))
  .setTitle(args[0])
    .setFooter(message.author.username, message.author.avatarURL())
    .setTimestamp();
message.channel.send({embed}).catch(err => message.reply(`❌ Error: ${err}`));  
    }}