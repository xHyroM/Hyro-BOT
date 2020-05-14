const Discord = require("discord.js")
module.exports = {
    name: "ruleta",
    category: "fun",
    description: "Ruleta ukáže či si umrel alebo prežil",
    usage: "ruleta",
    run: async (client, message, args) => {

{
      function doRandHT() {
var rand = [':grinning:ˆ---------:gun: = **You survived!** <:love:644559167666913306>',':skull:˞----------:gun: = **You dead!** :drop_of_blood:'];

return rand[Math.floor(Math.random()*rand.length)];
}

const embed = new Discord.MessageEmbed()
		.setTitle("**RULETA**")
		.setColor("RANDOM")
		.setDescription("" + doRandHT() + "")
		.setFooter(message.author.username, message.author.avatarURL())
		.setTimestamp();
	
	message.channel.send({embed}).catch(err => message.reply(`❌ Error: ${err}`)); 	
}

    }}