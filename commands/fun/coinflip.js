const Discord = require("discord.js")

module.exports = {
    name: "coinflip",
    aliases: ["flipcoin", "coinflip", "coinsflip", "flipcoins"],
  category: "fun",
    description: "Vyhodíš coin do vzduchu",
    usage: "",
    run: (client, message, args) => {
      	// FLIP COINS

{
      function doRandHT() {
var rand = ['HEADS','TAILS'];

return rand[Math.floor(Math.random()*rand.length)];
}

const embed = new Discord.MessageEmbed()
	.setTitle("**COIN FLIP**")
	.setDescription("Coin fell on `" + doRandHT() + "`")
	.setFooter(message.author.username, message.author.avatarURL())
	.setThumbnail("https://i.giphy.com/media/o9ZsDfUVEJjy0/giphy.gif")
	.setTimestamp();

	message.channel.send({embed}).then(embedMessage => {
		embedMessage.react("💰");
	}).catch(err => message.reply(`❌ Error: ${err}`)); 
}
    }}