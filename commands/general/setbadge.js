const Discord = require("discord.js")
const fs = require("fs")
const { getMember, formatDate } = require("../../functions.js");

module.exports = {
    name: "setbadge",
    aliases: ["setbadge", "setbadges","badges"],
  category: "general",
    description: "Badges",
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
  //if (message.author.id !== '491999008106217473') return message.reply("❌ You do not have permissions to owner bot. Please contact a staff bot member");    

  const idm = parseInt(args[0]);
	if(!args[0]) return message.channel.send("❌ Please write id player!"); 
      
      
  if(!args[1]) return message.channel.send("❌ Please write text");       
      
      

  let badges = JSON.parse(fs.readFileSync("./json/profile/badges.json", "utf8"))
  badges[args[0]] = {
    badges: args[1]
  };
  
  fs.writeFile("./json/profile/badges.json", JSON.stringify(badges), (err) => {
    if (err) console.log(err)
  });
  	message.channel.send('Badges set! [' + args[1] + "]")
  .catch(err => message.reply(`❌ Error: ${err}`)); 
    }}