const Discord = require("discord.js")
const superagent = require("superagent")
const fetch = require('node-fetch');

module.exports = {
    name: "llama",
    aliases: ["llama", "lama"],
    category: "fun",
    usage: "",
    run: async (client, message, args) => {
        let msg = await message.channel.send("Generating...")

        fetch("https://apis.duncte123.me/llama")
        .then(res => res.json()).then(body => {
            if(!body) return message.reply("❌ Im not find...")

            let embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle("**LLAMA IMAGE**")
            .setImage(body.data.file)
            .setFooter(message.author.username, message.author.avatarURL())
            .setTimestamp()

                msg.edit(embed).catch(err => message.reply(`❌ Error: ${err}`)); 
        }).catch(err => message.reply(`❌ Error: ${err}`)); 
    }}