const Discord = require("discord.js")

module.exports = {
    name: "8ball",
    aliases: ["magic", "8ball"],
    category: "fun",
    description: "Magická koule opýtaj sa otázku",
    usage: "",
    run: (client, message, args) => {
	  
	function doMagic8BallVoodoo() {
		var rand = ['Možno', 'Nie', 'Hyro BOT je bot', 'Hyro by povedal ,,Zabudni určite nie"', 'Neviem', 'Toto som sa nenaučil, ale viem že hyro je hyro', 'Určite', 'To je humus!', 'No neviem ako...', 'Spýtaj sa ešte raz, musím sa ukľudniť.', 'Fakt neviem!', 'Mám moc veľa IQ (-500) aby som ti odpovedal na otázku', 'Hyro je hyro, odpoveď je ano', 'Hyro je hyro, odpoveď je nie'];
	
		return rand[Math.floor(Math.random()*rand.length)];
	}	  
	  
	 if(!args[0]) return message.channel.send("❌ Please write text!");
	 
	 const embed = new Discord.MessageEmbed()

	.setColor("RANDOM")
	.setTitle("**:black_circle:  MAGIC BALL  :black_circle:**")
    .setDescription("Question: `" + args.join(" ") + "`\nAnswer: `" + doMagic8BallVoodoo() + "`")
	.setFooter(message.author.username, message.author.avatarURL())
	.setTimestamp();
    
	message.channel.send({embed}).catch(err => message.reply(`❌ Error: ${err}`));  
}}