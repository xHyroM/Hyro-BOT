const Discord = require("discord.js")
const fetch = require('node-fetch');

module.exports = {
    name: "alpaca",
    aliases: ["alpaca", "alpacas"],
    category: "fun",
    usage: "",
    run: async (client, message, args) => {
          let msg = await message.channel.send("Generating...")

    fetch("https://apis.duncte123.me/alpaca")
      .then(res => res.json()).then(body => {
    //console.log(body.file)
    if(!body) return message.channel.send("❌ Im not find...")

        let cEmbed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle("**ALPACA IMAGE**")
        .setImage(body.data.file)
        .setTimestamp()
        .setFooter(message.author.username, message.author.avatarURL())

        message.channel.send({embed: cEmbed}).catch(err => message.reply(`❌ Error: ${err}`)); 

        msg.delete().catch(err => message.reply(`❌ Error: ${err}`)); 
        })
    }}