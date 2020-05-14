const Discord = require("discord.js");
const fs = require('fs');

module.exports = {
    name: "autorole",
    aliases: ["setautorole"],
    category: "moderation",
    run: async (client, message, args) => {

      if(!message.member.hasPermission("MANAGE_GUILD")) return message.reply("❌ You do not have permissions to manage guild. Please contact a staff member");            
        if(!args[0]) return message.channel.send(":x: Please write role name without **@**");

       const embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle("AUTOROLE")
            .setFooter(message.author.username, message.author.avatarURL())
            .setDescription("Add a reaction to continue!")
            .setTimestamp();
      message.channel.send({embed}).then(embedMessage => {
        embedMessage.react('✅').then(() => embedMessage.react('❌'));
        
        const filter = (reaction, user) => {
	        return ['✅', '❌'].includes(reaction.emoji.name) && user.id === message.author.id;
        };
        
        
        embedMessage.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
	          .then(collected => {
		      const reaction = collected.first();

		        if (reaction.emoji.name === '✅') {
let role = JSON.parse(fs.readFileSync("./json/server/autorole.json", "utf8"))
role[message.guild.id] = {
    autorole: args[0],
    status: "Yes"
  };
  
  fs.writeFile("./json/server/autorole.json", JSON.stringify(role), (err) => {
    if (err) console.log(err).catch(err => message.reply(`❌ Error: ${err}`)); 
  });

              
  	          //    message.channel.send("Gender set! [MAN]")
                  const embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle("✅ AUTOROLE ✅")
            .setFooter(message.author.username, message.author.avatarURL())
            .setDescription("AutoRole set! " + args[0])
            .setTimestamp();
                  embedMessage.edit(embed)
                  embedMessage.clearReactions()
            .catch(err => message.reply(`❌ Error: ${err}`)); 
		        } else {
let role = JSON.parse(fs.readFileSync("./json/server/autorole.json", "utf8"))
role[message.guild.id] = {
    autorole: args[0],
    status: "No"
  };
  
  fs.writeFile("./json/server/autorole.json", JSON.stringify(role), (err) => {
    if (err) console.log(err).catch(err => message.reply(`❌ Error: ${err}`)); 
  });
      
  	              //message.channel.send("Gender set! [WOMAN]")
              
              const embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle("❌ AUTOROLE ❌")
            .setFooter(message.author.username, message.author.avatarURL())
            .setDescription("AutoRole not set!")
            .setTimestamp();
                  embedMessage.edit(embed)
                  embedMessage.clearReactions()
            .catch(err => message.reply(`❌ Error: ${err}`)); 
              
		        }
	        })
	          .catch(collected => {
		            message.reply('you reacted with neither a thumbs up, nor a thumbs down.').catch(err => message.reply(`❌ Error: ${err}`)); 
	          });
        
      })
      
/*let role = JSON.parse(fs.readFileSync("./json/server/autorole.json", "utf8"))
role[message.guild.id] = {
    autorole: args[0],
    status: "Yes"
  };
  
  fs.writeFile("./json/server/autorole.json", JSON.stringify(role), (err) => {
    if (err) console.log(err).catch(err => message.reply(`❌ Error: ${err}`)); 
  });
  	message.channel.send('AutoRole set! [ ' + args[0] + " ]")
  .catch(err => message.reply(`❌ Error: ${err}`)); */
      
}}