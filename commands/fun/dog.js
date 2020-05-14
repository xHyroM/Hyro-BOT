const Discord = require("discord.js")
const superagent = require("superagent")
module.exports = {
    name: "dog",
    aliases: ["dogs", "dog"],
    category: "fun",
    description: "Dog meme random",
    usage: "",
    run: async (client, message, args) => {
      
    let msg = await message.channel.send("Generating...")

    let {body} = await superagent
    .get(`https://dog.ceo/api/breeds/image/random`)
    //console.log(body.file)
    if(!{body}) return message.channel.send("I broke! Try again.")

        let dEmbed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle("**DOG IMAGE**")
        .setImage(body.message)
        .setTimestamp()
        .setFooter(message.author.username, message.author.avatarURL())

        message.channel.send({embed: dEmbed}).catch(err => message.reply(`❌ Error: ${err}`)); 

        msg.delete().catch(err => message.reply(`❌ Error: ${err}`)); 
    }}