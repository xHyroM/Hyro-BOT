const Discord = require("discord.js")
const fs = require("fs")
var request = require('request');
var cheerio = require('cheerio');
module.exports = {
    name: "setbio",
    aliases: ["setbio", "setdesc","bio","description", "desc"],
  category: "general",
    description: "Nastaví vek",
    usage: "",
    run: (client, message, args) => {
      
  const vserver = args.join(" ");    
  if(!vserver) return message.channel.send(":x: Please write text");   
var lyrics = vserver;
      
       if (lyrics.length > "200") {
         message.channel.send(":x: Please write text (200 character)")
         return;
       }   
      
  //    if (vserver > 50) {
    //    message.channel.send(":x: Please write text (50 character)")
      //  return;
      //}
      
  let bio = JSON.parse(fs.readFileSync("./json/profile/bio.json", "utf8"))
  bio[message.author.id] = {
    bio: vserver
  };
  
  fs.writeFile("./json/profile/bio.json", JSON.stringify(bio), (err) => {
    if (err) console.log(err)
  });
  	message.channel.send('BIO set! [' + vserver + "]")
  .catch(err => message.reply(`❌ Error: ${err}`)); 
    }}