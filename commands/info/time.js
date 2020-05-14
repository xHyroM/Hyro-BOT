const Discord = require("discord.js")
var moment = require("moment/min/moment-with-locales.min.js");

module.exports = {
    name: "time",
    aliases: ["time", "cas"],
    description: "Ukáže aký je čas",
    category: "info",
    usage: "",
    run: async (client, message, args) => {
      	var ping = (new Date().getTime() - message.createdTimestamp);
    //  moment.locale("cs")
     // var now = moment().format("LTS", "cs");
var today = new Date();
      var time = (today.getHours()+2) + ":" + today.getMinutes() + ":" + today.getSeconds();   
	const embed = new Discord.MessageEmbed()
  
	.setColor("RANDOM")
	.setTitle("**TIME**")
    .setDescription("Want to know what time it is? ✒️\n Time `" + `${time}` + "`")
	.setFooter(message.author.username, message.author.avatarURL())
	.setTimestamp();
    
	message.channel.send({embed}).then(embedMessage => {
		embedMessage.react("⏲️");
	}).catch(err => message.reply(`❌ Error: ${err}`)); 
    }}