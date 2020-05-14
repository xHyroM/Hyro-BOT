const Discord = require("discord.js")

module.exports = {
    name: "captcha",
    aliases: ["captcha","overenie", "recaptcha"],
  category: "editor",
    description: "GOOGLE Recaptcha text",
    usage: "",
    run: (client, message, args) => {

  const text = args.join("+");
  if(!text) return message.channel.send(":x: Please write text");   

 const embed = new Discord.MessageEmbed()
   .setColor("RANDOM")
   .setTitle("CAPTCHA")
   .setDescription("Captcha `" + `${text}` + "`\n")
   .setFooter(message.author.username, message.author.avatarURL())
   .setImage("https://api.alexflipnote.dev/captcha?text=" + `${text}`)
   .setTimestamp();

message.channel.send({embed}).catch(err => message.reply(`❌ Error: ${err}`)); 

    }}