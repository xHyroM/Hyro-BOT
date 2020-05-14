const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const fs = require("fs")

module.exports = {
    name: "nameday",
    aliases: ["sviatok", "svatek", "nameday", "name-day"],
    category: "general",
    run: async (client, message, args) => {
  var request = require('request');
  var url = 'https://api.abalin.net/today?';
  
request (url, async function(err, response, body) {
            if(err) {
               console.log(err);
                return message.channel.send("❌ Please write valid adress!");
            }
            body = JSON.parse(body);
            if(body.data.namedays.sk) {
          status = '';
                if(body.data.namedays.sk) {
                  status += '';    
            if(body.data.namedays.cz) {
          status = '';
                if(body.data.namedays.cz) {
                  status += '';    
            if(body.data.namedays.us) {
          status = '';
                if(body.data.namedays.us) {
                  status += '';     
              if(body.data.namedays.de) {
          status = '';
                if(body.data.namedays.de) {
                  status += '';                  
              if(body.data.namedays.it) {
          status = '';
                if(body.data.namedays.it) {
                  status += '';      
                  
            const embed = new MessageEmbed()  
               .setTitle("🎆 NAMEDAY | SVATEK 🎇")
               .addField(":flag_sk: Slovak", body.data.namedays.sk)
               .addField(":flag_cz: Czechia", body.data.namedays.cz)
               .addField(":flag_de: Germany", body.data.namedays.de)
               .addField(":flag_it: Italy", body.data.namedays.it)
               .addField(":flag_us: USA", body.data.namedays.us)
               .setFooter(message.author.username, message.author.avatarURL())
               .setTimestamp();  
            message.channel.send(embed).catch(err => message.reply(`❌ Error: ${err}`)); 
                    } else {
                    status += '❌ Im not find';
               }
           }
                   } else {
                    status += '❌ Im not find';
               }
           }    
                   } else {
                    status += '❌ Im not find';
               }
           }      
                   } else {
                    status += '❌ Im not find';
               }
           }     
                    } else {
                    status += '❌ Im not find';
               }
           }                    
        }); 
    }}