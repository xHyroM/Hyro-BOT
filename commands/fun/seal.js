const Discord = require("discord.js")
const superagent = require("superagent")
const fetch = require('node-fetch');

module.exports = {
    name: "seal",
    aliases: ["seal"],
    category: "fun",
    usage: "",
    run: async (client, message, args) => {
        let msg = await message.channel.send("Generating...")

        fetch("https://apis.duncte123.me/seal")
        .then(res => res.json()).then(body => {
            if(!body) return message.reply("❌ Im not find...")

            let embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle("**SEAL IMAGE**")
            .setImage(body.data.file)
            .setFooter(message.author.username, message.author.avatarURL())
            .setTimestamp()

                msg.edit(embed).catch(err => message.reply(`❌ Error: ${err}`)); 
        })
    }}