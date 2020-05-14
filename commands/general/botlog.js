const app = require("../../app.js");

const Discord = require("discord.js")

module.exports = {
    name: "botlog",
    aliases: ["botlog"],
  category: "general",
    usage: "",
    run: (client, message, args) => {
       const embedmsg = new Discord.MessageEmbed()
      .setColor("RED")
      .setTitle("Access denied!")
      .setDescription("**" + message.author.username + "** you do not have access to this command!\nThe command is only for bot **owner**!\n\n**An error occurred?** Contact: 𝙃𝙮𝙧𝙤#8938")
      .setThumbnail("https://upload.hicoria.com/files/1G2dEqYZ.png")
      .setFooter(message.author.username, message.author.avatarURL())
      .setTimestamp(); 
	if (message.author.id !== '491999008106217473') return message.channel.send(embedmsg);    
//	if (message.author.id !== '491999008106217473') return message.reply("❌ You do not have permissions to owner bot. Please contact a staff bot member");
  const vserver = args[0];    
  if(!vserver) return message.channel.send(":x: Please write type! [info, success, maintenance, error]");   
 const logmessage = args.slice(1).join(' ');    
  if(!logmessage) return message.channel.send(":x: Please write log message!");         
          app.addLog({
            "log_type": vserver,
            "log_message": logmessage,
            "log_date": Date.now(),
        });
      
   const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("🏵️ BOT LOG 🏵️")
    .setDescription("Type `" + vserver + "`\nMsg `" + logmessage + "`")
   .addField("💨 Wait 💫", "Please wait 5 minutes to added.")
	.setFooter(message.author.username, message.author.avatarURL())
    .setTimestamp();

      
	message.channel.send({embed}).then(embedMessage => {
		embedMessage.react("🏵️");
    process.exit(1);
	})      
      
    }}     