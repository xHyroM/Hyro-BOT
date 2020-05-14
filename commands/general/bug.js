const Discord = require("discord.js")

module.exports = {
    name: "bug",
    aliases: ["bug", "bugs"],
  category: "general",
    description: "Pošle bug developerovi a ten to opraví",
    usage: "",
    run: (client, message, args) => {
         
    let User = message.guild.member(message.guild.members.cache.get("491999008106217473"));
  const text = args.join(" ");
  if(!text) return message.channel.send(":x: Please write text");   
		
    User.send(`Vám poslal správu: ${text}`)
	
	const embed = new Discord.MessageEmbed()

	.setColor("RANDOM")
	.setTitle("**SPRÁVA**")
    .setDescription("The message was `send` <:checked:634724283511472149>")
	.setFooter(message.author.username, message.author.avatarURL())
	.setTimestamp();
    
	message.channel.send({embed}).catch(err => message.reply(`❌ Error: ${err}`)); 
      
}}