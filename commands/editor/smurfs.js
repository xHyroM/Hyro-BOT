const Discord = require("discord.js")

module.exports = {
    name: "smurfs",
    aliases: ["smurfs", "smurfstext"],
    description: "Smurfs text",
  category: "editor",
    usage: "",
    run: (client, message, args) => {
      
  const text = args.join("+");
  if(!text) return message.channel.send(":x: Please write text");   
	//const qr = parseInt(args);
	//if(!args[0]) return message.channel.send("❌ Please write text!");
	
 const embed = new Discord.MessageEmbed()
   .setColor("RANDOM")
   .setTitle("SMURFS")
   .setDescription("Smurfs: "+ `${text}`)
   .setFooter(message.author.username, message.author.avatarURL())
   .setImage("https://flamingtext.com/net-fu/proxy_form.cgi?script=smurfs-logo&text=" + text + "&_loc=generate&imageoutput=true")
   .setTimestamp();

message.channel.send({embed}).catch(err => message.reply(`❌ Error: ${err}`)); 

    }}