const Discord = require("discord.js")

module.exports = {
    name: "didyoumean",
    aliases: ["myslis", "didyoumean"],
  category: "editor",
    description: "Napíše text a opraví ho",
    usage: "",
    run: (client, message, args) => {

	const text = parseInt(args[0]);
	if(!args[0]) return message.channel.send("❌ Please write text!");
	const myslis = parseInt(args[1]);
	if(!args[1]) return message.channel.send("❌ Please write text! [2]");

 const embed = new Discord.MessageEmbed()
   .setColor("RANDOM")
   .setTitle("MYSLIS")
   .setDescription("Text `" + `${args[0]}` + "`\n\nDidYouMean `" + `${args[1]}` + "`")
   .addField("For a space, write **+**", " ⁫⁫⁫⁫‬‬‬‬‬    ")
   .setFooter(message.author.username, message.author.avatarURL())
   .setImage("https://api.alexflipnote.dev/didyoumean?top=" + `${args[0]}` + "&bottom=" + `${args[1]}`)
   .setTimestamp();

message.channel.send({embed}).catch(err => message.reply(`❌ Error: ${err}`)); 
    }}