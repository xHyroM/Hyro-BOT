const Discord = require("discord.js")
const fs = require("fs")

module.exports = {
    name: "covid19",
    aliases: ["covid", "coronavirus"],
    category: "info",
    usage: "",
    run: (client, message, args, prefix) => {
   
  var request = require('request');
  var url = 'https://api.covid19api.com/summary';
  
request (url, async function(err, response, body) {
            if(err) {
               console.log(err);
                return message.channel.send("❌ Please write valid adress!");
            }
            body = JSON.parse(body);
            if(body.Global.NewConfirmed) {
          status = '';
                if(body.Global.NewConfirmed) {
                  status += '';    
              if(body.Global.NewDeaths) {
          status = '';
                if(body.Global.NewDeaths) {
                  status += '';                
              if(body.Global.NewRecovered) {
          status = '';
                if(body.Global.NewRecovered) {
                  status += '';     
              if(body.Global.TotalConfirmed) {
          status = '';
                if(body.Global.TotalConfirmed) {
                  status += ''; 
              if(body.Global.TotalRecovered) {
          status = '';
                if(body.Global.TotalRecovered) {
                  status += '';                   
               if(body.Global.TotalDeaths) {
          status = '';
                if(body.Global.TotalDeaths) {
                  status += '';     
                  
 const embed = new Discord.MessageEmbed()
   .setColor("RANDOM")
   .setTitle('<:coronavirus:704627303732346940> COVID-19 STATS <:coronavirus:704627303732346940>')
   .addField('🥚 New Confirmed', body.Global.NewConfirmed, true)
   .addField('🩸 New Deaths', body.Global.NewDeaths, true)
   .addField('🎡 New Recovered', body.Global.NewRecovered, true)
   .addField('🧩 Total Confirmed', body.Global.TotalConfirmed,true)
   .addField('💊 Total Recovered', body.Global.TotalRecovered,true)
   .addField('💉 Total Deaths', body.Global.TotalDeaths, true)
   .setFooter(message.author.username, message.author.avatarURL())
   .setTimestamp();
                   
message.channel.send({embed}).catch(err => message.reply(`❌ Error: ${err}`)); 
               
                  } else {
                    status == '0';
               }
           }
                  } else {
                    status == '0';
               }
           }    
                  } else {
                    status == '0';
               }
           }      
                  } else {
                    status == '0';
               }
           }     
                  } else {
                    status == '0';
               }
           }     
                  } else {
                    status == '0';
               }
           }       
      });  
  }}      
      
	/*const embed = new Discord.MessageEmbed()
		.setTitle("**<:coronavirus:704627303732346940> CORONAVIRUS STATS <:coronavirus:704627303732346940>**")
    .addField("<:label1:640575568802480178> Server Name", message.guild.name,)
	  .addField(":id: Server Id", message.guild.id,)
	  .addField("<:Earth:640487164823601153> Server Region", region[message.guild.region], true)
	.addField("<:calendar_1f4c5:640575567397388314> Creation Date", message.guild.createdAt,)
	.addField("<:key1:640575568277929995>Server Verification", verifLevels[message.guild.verificationLevel], true)
	.addField("<:graduationcap:640575567871344651> Server Owner", message.guild.owner.displayName,)
	.addField("<:bustsinsilhouette:640575567514828811> Total | Members | BOT Count", `${message.guild.members.size} | ${message.guild.members.filter(member => !member.user.bot).size} | ${message.guild.members.filter(member => member.user.bot).size}`, true)	
	.addField("<:hat:640575569742004256> Emoji Count", message.guild.emojis.size,)
	.addField("<:spoolofthread:640575569561518080> Roles", message.guild.roles.size,)
	.addField("<:briefcase_1f4bc:640575567304982560> Channels", message.guild.channels.size,)
	.addField("<:checked:634724283511472149> Verify Server", verify,)  
		.setThumbnail(message.guild.iconURL)
              .setFooter(message.author.username, message.author.avatarURL)
            .setTimestamp();
      		message.channel.send({embed}).catch(err => message.reply(`❌ Error: ${err}`));  */ 
 //   }}