const Discord = require('discord.js');
const superagent = require('superagent');
const fs = require("fs")
module.exports = {
    name: "wallpaper",
    aliases: ["wallpaper"],
    category: "verify",
    usage: "",
    run: async (client, message, args) => {
      
      let verifyserver = JSON.parse(fs.readFileSync("./verifyserver.json", "utf8"));
      if(!verifyserver[message.guild.id]){
          verifyserver[message.guild.id] = {
            verifyserver: "No"
          };
      }
      
      let verify = verifyserver[message.guild.id].verifyserver;   
      
      if (message.channel.nsfw === true) { 
        const embedmsg = new Discord.MessageEmbed()
      .setColor("RED")
      .setTitle("Access denied!")
      .setDescription("**" + message.author.username + "** you do not have access to this command!\nThe command is only for **verified** servers!\n\n**An error occurred?** Contact: 𝙃𝙮𝙧𝙤#8938")
      .setThumbnail("https://upload.hicoria.com/files/1G2dEqYZ.png")
      .setFooter(message.author.username, message.author.avatarURL())
      .setTimestamp(); 
       if (verify !== 'Yes') return message.channel.send(embedmsg);  
  //    if (verify !== 'Yes') return message.channel.send("❌ Server is not verified!");      
      
    const { body } = await superagent
    .get("https://nekos.life/api/v2/img/wallpaper" /*"https://nekos.life/api/v2/img/ngif"*/);

    const embed = new Discord.MessageEmbed()
    .setColor("#ff9900")
    .setTitle(`WallPaper`)
    .setImage(body.url) 
        .setFooter(message.author.username, message.author.avatarURL())
        .setTimestamp(); 
    message.channel.send({embed})
        
      } else {
   message.channel.send(":x: This isn't NSFW channel!").catch(err => message.reply(`❌ Error: ${err}`)); 
  }
}}