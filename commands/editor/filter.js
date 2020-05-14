const Discord = require("discord.js")

module.exports = {
    name: "filter",
    aliases: ["filter", "filters", "filterimage"],
  category: "editor",
    description: "Filter image editor",
    usage: "",
    run: async (client, message, args) => {
      
// Command validation
      
// APP JS
let prefix = "+";
const db = require("quick.db");

let fetched = await db.fetch(`prefix_${message.guild.id}`)
if (fetched === null) prefix = "+";
else prefix = fetched;          
      
function isCommand(message, command){
	var init = message.slice(0,1);
	var keyword = (message.indexOf(' ') !== -1) ? message.slice(1, message.indexOf(' ')) : message.slice(1);
	if(init === prefix && keyword.toLowerCase() === command.toLowerCase() ){
		return true;
	}
	return false;
}      
      
      // IMAGE EDITOR  
 	if(isCommand(message.content, 'filter')){
			if(message.content.indexOf(' ') !== -1){
				var prt = message.content.split(' ')[1];

				if(prt.toLowerCase() === 'blur'){
    const taggedUser = message.mentions.users.first();
		 if(!taggedUser) return message.channel.send("❌ Can't find user!");	
     const embed = new Discord.MessageEmbed()
    
      .setTitle("**FILTER**")
       .setDescription(`Blur filter: ${taggedUser.username}`)
       .setFooter(message.author.username, message.author.avatarURL())
      .setImage("https://api.alexflipnote.dev/filter/blur?image=" + `${taggedUser.avatarURL()}`)
           .setTimestamp();
    
          message.channel.send({embed});
          return;
				}

				if(isCommand(message.content, 'filter')){
					if(message.content.indexOf(' ') !== -1){
						var prt = message.content.split(' ')[1];
		
						if(prt.toLowerCase() === 'invert'){
    const taggedUser = message.mentions.users.first();
		 if(!taggedUser) return message.channel.send("❌ Can't find user!");	
     const embed = new Discord.MessageEmbed()
    
      .setTitle("**FILTER**")
       .setDescription(`Invert filter: ${taggedUser.username}`)
       .setFooter(message.author.username, message.author.avatarURL())
      .setImage("https://api.alexflipnote.dev/filter/invert?image=" + `${taggedUser.avatarURL()}`)
           .setTimestamp();
    
          message.channel.send({embed});
          return;
				}
						}
					}
				if(isCommand(message.content, 'filter')){
					if(message.content.indexOf(' ') !== -1){
						var prt = message.content.split(' ')[1];
		
						if(prt.toLowerCase() === 'color'){
    const taggedUser = message.mentions.users.first();
		 if(!taggedUser) return message.channel.send("❌ Can't find user!");	
     const embed = new Discord.MessageEmbed()
    
      .setTitle("**FILTER**")
       .setDescription(`Color filter: ${taggedUser.username}`)
       .setFooter(message.author.username, message.author.avatarURL())
      .setImage("https://api.alexflipnote.dev/filter/b&w?image=" + `${taggedUser.avatarURL()}`)
           .setTimestamp();
    
          message.channel.send({embed});
          return;
						}
					}
				}
				if(isCommand(message.content, 'filter')){
					if(message.content.indexOf(' ') !== -1){
						var prt = message.content.split(' ')[1];
		
						if(prt.toLowerCase() === 'deepfry'){
    const taggedUser = message.mentions.users.first();
		 if(!taggedUser) return message.channel.send("❌ Can't find user!");	
     const embed = new Discord.MessageEmbed()
    
      .setTitle("**FILTER**")
       .setDescription(`Deepfry filter: ${taggedUser.username}`)
       .setFooter(message.author.username, message.author.avatarURL())
      .setImage("https://api.alexflipnote.dev/filter/deepfry?image=" + `${taggedUser.avatarURL()}`)
           .setTimestamp();
    
          message.channel.send({embed});
          return;
						}
					}
				}
				if(prt.toLowerCase() === 'pixelate'){
    const taggedUser = message.mentions.users.first();
		 if(!taggedUser) return message.channel.send("❌ Can't find user!");	
     const embed = new Discord.MessageEmbed()
    
      .setTitle("**FILTER**")
       .setDescription(`Pixelate filter: ${taggedUser.username}`)
       .setFooter(message.author.username, message.author.avatarURL())
      .setImage("https://api.alexflipnote.dev/filter/pixelate?image=" + `${taggedUser.avatarURL()}`)
           .setTimestamp();
    
          message.channel.send({embed});
          return;
				}

				if(prt.toLowerCase() === 'magik'){
    const taggedUser = message.mentions.users.first();
		 if(!taggedUser) return message.channel.send("❌ Can't find user!");	
     const embed = new Discord.MessageEmbed()
    
      .setTitle("**FILTER**")
       .setDescription(`Magik filter: ${taggedUser.username}`)
       .setFooter(message.author.username, message.author.avatarURL())
      .setImage("https://api.alexflipnote.dev/filter/magik?image=" + `${taggedUser.avatarURL()}`)
           .setTimestamp();
    
          message.channel.send({embed});
          return;
				}
       
       				if(prt.toLowerCase() === 'jpegify'){
    const taggedUser = message.mentions.users.first();
		 if(!taggedUser) return message.channel.send("❌ Can't find user!");	
     const embed = new Discord.MessageEmbed()
    
      .setTitle("**FILTER**")
       .setDescription(`JPEgify filter: ${taggedUser.username}`)
       .setFooter(message.author.username, message.author.avatarURL())
      .setImage("https://api.alexflipnote.dev/filter/jpegify?image=" + `${taggedUser.avatarURL()}`)
           .setTimestamp();
    
          message.channel.send({embed});
          return;
				} 
              				if(prt.toLowerCase() === 'snow'){
    const taggedUser = message.mentions.users.first();
		 if(!taggedUser) return message.channel.send("❌ Can't find user!");	
     const embed = new Discord.MessageEmbed()
    
      .setTitle("**FILTER**")
       .setDescription(`Snow filter: ${taggedUser.username}`)
       .setFooter(message.author.username, message.author.avatarURL())
      .setImage("https://api.alexflipnote.dev/filter/snow?image=" + `${taggedUser.avatarURL()}`)
           .setTimestamp();
    
          message.channel.send({embed});
          return;
				}  
              				if(prt.toLowerCase() === 'gay'){
    const taggedUser = message.mentions.users.first();
		 if(!taggedUser) return message.channel.send("❌ Can't find user!");	
     const embed = new Discord.MessageEmbed()
    
      .setTitle("**FILTER**")
       .setDescription(`Gay filter: ${taggedUser.username}`)
       .setFooter(message.author.username, message.author.avatarURL())
      .setImage("https://api.alexflipnote.dev/filter/gay?image=" + `${taggedUser.avatarURL()}`)
           .setTimestamp();
    
          message.channel.send({embed});
          return;
				}   
              				if(prt.toLowerCase() === 'communist'){
    const taggedUser = message.mentions.users.first();
		 if(!taggedUser) return message.channel.send("❌ Can't find user!");	
     const embed = new Discord.MessageEmbed()
    
      .setTitle("**FILTER**")
       .setDescription(`Communist filter: ${taggedUser.username}`)
       .setFooter(message.author.username, message.author.avatarURL())
      .setImage("https://api.alexflipnote.dev/filter/communist?image=" + `${taggedUser.avatarURL()}`)
           .setTimestamp();
    
          message.channel.send({embed});
          return;
				}          
			} else{
				message.channel.send("", {
					embed: {
						color: 12320855,
						description: "\n" +
						"`filter blur`: Blur filter\n\n"+
						"`filter invert`: Invert filter\n\n"+
						"`filter color`: Color filter\n\n"+
						"`filter deepfry`: Deepfry filter\n\n" +
						"`filter pixelate`: Pixelate filter\n\n" +
						"`filter magik`: Magik filter\n\n" +
						"`filter jpegify`: JPEgify filter\n\n" +
						"`filter snow`: Snow filter\n\n" +    
						"`filter gay`: Gay filter\n\n" + 
						"`filter communist`: Communist filter\n\n"            
					}
				});
			}
  	}
      
    }}