const Discord = require("discord.js")

module.exports = {
    name: "acube",
    aliases: ["acube", "akocka", "adminkocka"],
    category: "moderation",  
    description: "Admin kocka +akocka [number]",
    run: (client, message, args) => {
	if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("❌ You do not have permissions to administrator. Please contact a staff member");
	const nunber1 = parseInt(args[0]);
  if(!nunber1) return message.channel.send("❌ Please write number!");    

  if(isNaN(nunber1)) return message.channel.send(":x: Please write number");   

     if(nunber1 > 6){
       return message.channel.send(":x: Please write number (1-6)"); 
     }      
 
    if(nunber1 < 0.0){
       return message.channel.send(":x: Please write number (1-6)"); 
     }       
      
      
    if(nunber1 < -1){
       return message.channel.send(":x: Please write umber (1-6)"); 
     } 
	
    const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle(":game_die: CUBE :game_die:")
    .setDescription("You threw a dice and you dropped the number `" + args[0] + "`")
	.setFooter(message.author.username, message.author.avatarURL())
	.setThumbnail("http://hyro.wz.sk/upload/uploads/gifcube.gif")
    .setTimestamp();

	message.channel.send({embed}).then(embedMessage => {
		embedMessage.react("🎲")
    .catch(err => message.reply(`❌ Error: ${err}`));  
	});
}}