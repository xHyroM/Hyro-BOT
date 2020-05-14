const Discord = require("discord.js")
const fs = require("fs")

module.exports = {
    name: "verify",
    aliases: ["verify"],
  category: "general",
    description: "Overí server",
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
  const vserver = args.join(" ");    
	//if (message.author.id !== '491999008106217473') return message.reply("❌ You do not have permissions to owner bot. Please contact a staff bot member");
  if(!vserver) return message.channel.send(":x: Please write Yes/No");   

  let verifyserver = JSON.parse(fs.readFileSync("./verifyserver.json", "utf8"))
  verifyserver[message.guild.id] = {
    verifyserver: vserver
  };
  
  fs.writeFile("./verifyserver.json", JSON.stringify(verifyserver), (err) => {
    if (err) console.log(err)
  });
  	message.channel.send('Server verifed! [' + vserver + "]")
  .catch(err => message.reply(`❌ Error: ${err}`)); 
    }}