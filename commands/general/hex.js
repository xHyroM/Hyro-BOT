const Discord = require("discord.js")

module.exports = {
    name: "hex",
    aliases: ["hex", "color"],
  category: "general",
    description: "Hex Generator",
    usage: "",
    run: (client, message, args) => {
    
  var randomColor = "000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});     
  var url = 'https://api.alexflipnote.dev/color/' + randomColor; 
  var request = require('request');
  
  request (url, async function(err, response, body) {
            if(err) {
               console.log(err);
                return;
            }
            body = JSON.parse(body);
            if(body.rgb) {
          status = '';
                if(body.rgb) {
                  status += '';   
          if(body.hex) {
          status = '';
                if(body.hex) {
                  status += '';        
          if(body.brightness) {
          status = '';
                if(body.brightness) {
                  status += '';         
          if(body.int) {
          status = '';
                if(body.int) {
                  status += '';                    
      

    
    const embed = new Discord.MessageEmbed()
    .setColor((randomColor))
    .setTitle("HEX GENERATOR")
    .setDescription("HEX: `" + body.hex + "`\nRGB: `" + body.rgb + "`\nINT: `" + body.int + "`\nBRIGHTNESS: `" + body.brightness + "`")
    .setFooter(message.author.username, message.author.avatarURL())
    .setImage("https://api.alexflipnote.dev/color/image/gradient/" + (randomColor))
    //.setImage("https://api.alexflipnote.dev/color/image/" + (randomColor))
    .setTimestamp();

  message.channel.send({embed})
      .catch(err => message.reply(`❌ Error: ${err}`)); 
                  
                  } else {
                    status += 'RGB (Not Found)';
               }
          }
                  } else {
                    status += 'HEX (Not Found)';
               }            
           }
                  } else {
                    status += 'BRIGHTNESS (Not Found)';
               }            
           }  
                  } else {
                    status += 'INT (Not Found)';
               }            
           }                  
        })
    }}