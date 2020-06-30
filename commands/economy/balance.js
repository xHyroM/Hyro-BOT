const Discord = require("discord.js");

module.exports = {
  name: "balance",
  aliases: ["bal", "balance", "money"],
  category: "economy",
  run: async (client, message, args) => {
    const eco = require("discord-economy");
    var output = await eco.FetchBalance(message.author.id);

    const embed = new Discord.MessageEmbed()
      .setTitle(":moneybag: Money | Cash :moneybag:")
      .setColor("RANDOM")
      .setDescription("You have **" + output.balance + "** money")
      .setFooter(message.author.username, message.author.avatarURL())
      .setTimestamp();

    message.channel.send(embed).catch(err => message.reply(`❌ Error: ${err}`));
  }
};
