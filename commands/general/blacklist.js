/*const Discord = require("discord.js");
const fs = require('fs');

module.exports = {
    name: "blacklist",
    aliases: ["blacklist"],
    category: "general",
    run: async (client, message, args) => {
      const embedmsg = new Discord.MessageEmbed()
      .setColor("RED")
      .setTitle("Access denied!")
      .setDescription("**" + message.author.username + "** you do not have access to this command!\nThe command is only for bot **owner**!\n\n**An error occurred?** Contact: 𝙃𝙮𝙧𝙤#8938")
      .setThumbnail("https://upload.hicoria.com/files/1G2dEqYZ.png")
      .setFooter(message.author.username, message.author.avatarURL)
      .setTimestamp(); 
	if (message.author.id !== '491999008106217473') return message.channel.send(embedmsg);          
//	if (message.author.id !== '491999008106217473') return message.channel.send("❌ You do not have permissions to owner bot. Please contact a staff bot member");      
    //message.delete();
    let blacklist = JSON.parse(fs.readFileSync("./blacklist.json", "utf8"));
    let user = args[0];
    const amount = parseInt(user);

    if (isNaN(amount)) {
        return message.reply(':x: Please enter a valid UserID');
    }
    if (!user) return message.reply(':x: You need to imput a User ID');
    addUrl(user)
      
function addUrl(user) {
  return new Promise((res, rej) => {
    fs.readFile("./blacklist.json", "utf8", function(err, contents) {
      var j = JSON.parse(contents);
      if (j.indexOf(user) > -1) {
      //  rej("URL_IN_DB");
        message.channel.send(":x: This user is already in database.")
        return;
      } else {
        message.channel.send("✅ User: " + user + " added to blacklist!")
        j.push(user);
      }
      fs.writeFile("./blacklist.json", JSON.stringify(j), "utf8", () => {
        res();
      });
    });
  });
     
}
}}*/


const Discord = require("discord.js");
const fs = require('fs');

module.exports = {
    name: "blacklist",
    aliases: ["blacklist", "bl"],
    category: "general",
    run: async (client, message, args) => {

      const embedmsg = new Discord.MessageEmbed()
      .setColor("RED")
      .setTitle("Access denied!")
      .setDescription("**" + message.author.username + "** you do not have access to this command!\nThe command is only for bot **owner**!\n\n**An error occurred?** Contact: 𝙃𝙮𝙧𝙤#8938")
      .setThumbnail("https://upload.hicoria.com/files/1G2dEqYZ.png")
      .setFooter(message.author.username, message.author.avatarURL())
      .setTimestamp();    
	if (message.author.id !== '491999008106217473') return message.channel.send(embedmsg);  
  
      if (!args[0]) {
        const arrayOfUsersIds = JSON.parse(fs.readFileSync("./blacklist.json", "utf8"));//[''];
      const list = new Discord.MessageEmbed()
      .setColor("#dcf522")
      .setTitle("BlackList | ID List")
      .addField("Users Ids:", arrayOfUsersIds)
      .setFooter(message.author.username, message.author.avatarURL())
      .setTimestamp()
        
               
              message.channel.send(list)  
        return;
    }     
            
      
      if (args[0].toLowerCase() === "list") {
        const arrayOfUsersIds = JSON.parse(fs.readFileSync("./blacklist.json", "utf8"));//[''];
      const list = new Discord.MessageEmbed()
      .setColor("#dcf522")
      .setTitle("BlackList | ID List")
      .addField("Users Ids:", arrayOfUsersIds)
      .setFooter(message.author.username, message.author.avatarURL())
      .setTimestamp()
        
               
              message.channel.send(list)  
    }     
      
//	if (message.author.id !== '491999008106217473') return message.channel.send("❌ You do not have permissions to owner bot. Please contact a staff bot member");      
    //message.delete();
      
  if (args[0].toLowerCase() === "add") {    
    let blacklist = JSON.parse(fs.readFileSync("./blacklist.json", "utf8"));
    let user = args[1];
    const amount = parseInt(user);

    if (isNaN(amount)) {
        return message.reply(':x: Please enter a valid UserID');
    }
    if (!user) return message.reply(':x: You need to imput a User ID');
    addUrl(user)
      
function addUrl(user) {
  return new Promise((res, rej) => {
    fs.readFile("./blacklist.json", "utf8", function(err, contents) {
      var j = JSON.parse(contents);
      if (j.indexOf(user) > -1) {
      //  rej("URL_IN_DB");
        message.channel.send(":x: This user is already in database.")
        return;
      } else {
        message.channel.send("✅ User: " + user + " added to blacklist!")
        j.push(user);
      }
      fs.writeFile("./blacklist.json", JSON.stringify(j), "utf8", () => {
        res();
      });
    });
  });
     
}}
}}