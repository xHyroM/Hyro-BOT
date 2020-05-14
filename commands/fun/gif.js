const Discord = require("discord.js")

module.exports = {
    name: "gif",
    aliases: ["emojigif", "gifs", "emojigifs"],
    category: "fun",
    description: "Random gif emoji",
    usage: "",
    run: (client, message, args) => {

     const embed = new Discord.MessageEmbed()
    
      .setTitle("**RANDOM EMOJI GIF**")
       .setDescription("")
       .setFooter("Powered by http://hyro.wz.sk")
      .setImage("http://hyro.wz.sk/administracia/dashboard/discordapi/gif/" + Math.floor(Math.random() * 100 + 1) +".gif",)
    
message.channel.send({embed}).catch(err => message.reply(`❌ Error: ${err}`)); 
      
    }}