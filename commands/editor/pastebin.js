const fetch = require('node-fetch');
const Discord = require("discord.js")
module.exports = {
    name: "pastebin",
    aliases: ["pastebin", "pastebintext"],
  category: "editor",
    usage: "",
    run: async (client, message, args) => {
    if (!args[0]) return message.channel.send(':x: Please write text!');
      
  var today = new Date();
      var time = (today.getHours()+2) + ":" + today.getMinutes() + ":" + today.getSeconds();  
     var timenormal = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds(); 
var date = today.getFullYear()+'.'+today.getDate()+'.'+(today.getMonth()+1); 
var datenormal = today.getFullYear()+'-'+today.getMonth()+'-'+today.getDate();  
var PastebinAPI = require('pastebin-js'),
    pastebin = new PastebinAPI({
      'api_dev_key' : 'fb4469b9b190215c386e23ac2fb5b38f',
      'api_user_name' : 'HyroCoreSkript',//toto netreba
      'api_user_password' : 'hyrobotpass' //toto netreba
    });


pastebin
  .createPaste(args.slice(0).join(' ') + "\n\n====================================================================================================================================\nUploaded by: 🎇 Hyro | BOT 🎆\nEU Time: " + time + " Time: " + timenormal + "\nEU Date: " + date + " Date: " + datenormal + "\nInvite Link: https://discordapp.com/oauth2/authorize?client_id=492015015449067520&scope=bot&permissions=2147483127\nSupport Link: https://invite.gg/thedevelopers\n====================================================================================================================================")
  .then(function (data) {
    // paste succesfully created, data contains the id
   // message.channel.send("Create pastebin: " + data);
  
    const embed = new Discord.MessageEmbed()
    
    .setColor("RANDOM")
    .setTitle("**PASTEBIN**")
    .setDescription(`**Your link:**\n*${data}*`)
    .setFooter(message.author.username, message.author.avatarURL())
    .setTimestamp();
    
    message.channel.send({embed}) 
    .catch(err => message.reply(`❌ Error: ${err}`));   
  })
  .fail(function (err) {
    // Something went wrong
    message.reply(`❌ Error: ${err}`);   
    console.log(err);
  });
}}
