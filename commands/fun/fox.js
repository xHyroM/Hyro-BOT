const Discord = require("discord.js")
const superagent = require("superagent")
module.exports = {
    name: "fox",
    aliases: ["fox", "foxes"],
    category: "fun",
    description: "Fox meme random",
    usage: "",
    run: async (client, message, args) => {
      
    let msg = await message.channel.send("Generating...")

    let {body} = await superagent
    .get(`https://randomfox.ca/floof/`)
    //console.log(body.file)
    if(!{body}) return message.channel.send("I broke! Try again.")

        let dEmbed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle("**FOX IMAGE**")
        .setImage(body.image)
        .setTimestamp()
        .setFooter(message.author.username, message.author.avatarURL())

        message.channel.send({embed: dEmbed}).catch(err => message.reply(`❌ Error: ${err}`)); 

        msg.delete().catch(err => message.reply(`❌ Error: ${err}`)); 
    }}