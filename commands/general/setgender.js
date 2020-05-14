const { MessageEmbed } = require("discord.js");
const { promptMessage } = require("../../functions.js");
const Discord = require("discord.js")
const fs = require("fs")
const bot = new Discord.Client()
const chooseArr = ["👦", "👧"];
module.exports = {
    name: "setgender",
    aliases: ["gender", "pohlavie", "setpohlavie"],
  category: "general",
    usage: "",
    run: async (client, message, args) => {
      
        const embed = new MessageEmbed()
            .setColor("RANDOM")
            .setTitle(":male_sign: MAN | WOMAN :female_sign:")
            .setFooter(message.author.username, message.author.avatarURL())
            .setDescription("Add a reaction to continue!")
            .setTimestamp();
      message.channel.send({embed}).then(embedMessage => {
        embedMessage.react('👦').then(() => embedMessage.react('👧'));
        
        const filter = (reaction, user) => {
	        return ['👦', '👧'].includes(reaction.emoji.name) && user.id === message.author.id;
        };
        
        
        embedMessage.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
	          .then(collected => {
		      const reaction = collected.first();

		        if (reaction.emoji.name === '👦') {
		        	  let pohlavie = JSON.parse(fs.readFileSync("./json/profile/pohlavie.json", "utf8"))
                pohlavie[message.author.id] = {
                  pohlavie: ":male_sign: | Man"
                  };
  
                fs.writeFile("./json/profile/pohlavie.json", JSON.stringify(pohlavie), (err) => {
                    if (err) console.log(err)
                });
              
  	          //    message.channel.send("Gender set! [MAN]")
                  const embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle(":male_sign:  MAN  :male_sign:")
            .setFooter(message.author.username, message.author.avatarURL())
            .setDescription("You selected MAN!")
            .setTimestamp();
                  embedMessage.edit(embed)
                  embedMessage.reactions.removeAll()
            .catch(err => message.reply(`❌ Error: ${err}`)); 
		        } else {
              	let pohlavie = JSON.parse(fs.readFileSync("./json/profile/pohlavie.json", "utf8"))
                pohlavie[message.author.id] = {
                  pohlavie: ":female_sign: | Woman"
                  };
  
                fs.writeFile("./json/profile/pohlavie.json", JSON.stringify(pohlavie), (err) => {
                    if (err) console.log(err)
                });
  	              //message.channel.send("Gender set! [WOMAN]")
              
              const embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle(":female_sign:  WOMAN  :female_sign:")
            .setFooter(message.author.username, message.author.avatarURL())
            .setDescription("You selected WOMAN!")
            .setTimestamp();
                  embedMessage.edit(embed)
                  embedMessage.reactions.removeAll()
            .catch(err => message.reply(`❌ Error: ${err}`)); 
              
		        }
	        })
	          .catch(collected => {
		            message.reply('you reacted with neither a thumbs up, nor a thumbs down.').catch(err => message.reply(`❌ Error: ${err}`)); 
	          });
        
      })
      
    }   
}