const fetch = require('node-fetch');
const Discord = require("discord.js")
module.exports = {
    name: "hastebin",
    aliases: ["hastebin", "hastebintext"],
  category: "editor",
    usage: "",
    run: async (client, message, args) => {
    if (!args[0]) return message.channel.send(':x: Please write text!');

  var today = new Date();
      var time = (today.getHours()+2) + ":" + today.getMinutes() + ":" + today.getSeconds();  
     var timenormal = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();  
var date = today.getFullYear()+'.'+today.getDate()+'.'+(today.getMonth()+1); 
var datenormal = today.getFullYear()+'-'+today.getMonth()+'-'+today.getDate();       
    const options = {
        method: 'POST',
        body: args.slice(0).join(' ') + "\n\n====================================================================================================================================\nUploaded by: 🎇 Hyro | BOT 🎆\nEU Time: " + time + " Time: " + timenormal + "\nEU Date: " + date + " Date: " + datenormal + "\nInvite Link: https://discordapp.com/oauth2/authorize?client_id=492015015449067520&scope=bot&permissions=2147483127\nSupport Link: https://invite.gg/thedevelopers\n====================================================================================================================================", 
        headers: {
            'Content-Type': 'application/json' 
        } 
    }
// https://hyro-bot-hastebin.glitch.me/ https://hasteb.in/documents
    let res = await fetch(`https://hyro-bot-hastebin.glitch.me/documents`, options);
    res = await res.json().catch(err => message.reply(`❌ Error: ${err}`));  

      
    const embed = new Discord.MessageEmbed()
    
    .setColor("RANDOM")
    .setTitle("**HASTEBIN**")
    .setDescription(`**Your link:**\n*https://hyro-bot-hastebin.glitch.me/${res.key}*`)
    .setFooter(message.author.username, message.author.avatarURL())
    .setTimestamp();
    
    message.channel.send({embed}) 
    .catch(err => message.reply(`❌ Error: ${err}`));   
   // message.channel.send(`:white_check_mark: | Posted text to Hastebin at this URL: https://hastebin.com/${res.key}`);      
    }}