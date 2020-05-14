const Discord = require("discord.js")

module.exports = {
    name: "qrcode",
    aliases: ["qr", "qrcode"],
    description: "Vygeneruje QRCode z textu",
  category: "editor",
    usage: "",
    run: (client, message, args) => {

  const text = args.join("+");
  if(!text) return message.channel.send(":x: Please write text");   
  
 const embed = new Discord.MessageEmbed()
   .setColor("RANDOM")
   .setTitle("QR CODE")
   .setDescription("QR Kód: " + `${text}`)
   .setFooter(message.author.username, message.author.avatarURL())
   .setImage("https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + `${text}`)
   .setTimestamp();

message.channel.send({embed}).catch(err => message.reply(`❌ Error: ${err}`)); 

    }}