const Discord = require("discord.js")
const superagent = require("superagent")

module.exports = {
    name: "cat",
    aliases: ["cats", "cat"],
    category: "fun",
    description: "Cat meme random",
    usage: "",
    run: async (client, message, args) => {
          let msg = await message.channel.send("Generating...")

    let {body} = await superagent
    .get(`http://aws.random.cat/meow`)
    //console.log(body.file)
    if(!{body}) return message.channel.send("❌ Im not find...")

        let cEmbed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle("**CAT IMAGE**")
        .setImage(body.file)
        .setTimestamp()
        .setFooter(message.author.username, message.author.avatarURL())

        message.channel.send({embed: cEmbed}).catch(err => message.reply(`❌ Error: ${err}`)); 

        msg.delete().catch(err => message.reply(`❌ Error: ${err}`)); 
    }}