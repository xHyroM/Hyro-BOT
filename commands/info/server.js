const Discord = require("discord.js")
const fs = require("fs")

module.exports = {
    name: "server",
    aliases: ["server-info", "server", "servers", "serverinfo", "infoserver", "info-server"],
    category: "info",
    description: "Server informácie",
    usage: "",
    run: (client, message, args, prefix) => {
      
      let verifyserver = JSON.parse(fs.readFileSync("./verifyserver.json", "utf8"));
      if(!verifyserver[message.guild.id]){
          verifyserver[message.guild.id] = {
            verifyserver: "No"
          };
      }
      
      let verify = verifyserver[message.guild.id].verifyserver;
      
      	    function checkDays(date) {
        let now = new Date();
        let diff = now.getTime() - date.getTime();
        let days = Math.floor(diff / 86400000);
        return days + (days == 1 ? " day" : " days") + " ago";
    };
    let verifLevels = {
      "NONE": "None",
      "LOW": "Low",
      "MEDIUM": "Medium",
      "HIGH": "(╯°□°）╯︵  ┻━┻",
      "VERY_HIGH": "┻━┻ミヽ(ಠ益ಠ)ノ彡┻━┻"};
    let region = {
        "brazil": ":flag_br: Brazil",
        "eu-central": ":flag_eu: Central Europe",
		"europe": ":flag_eu: Europe",
        "singapore": ":flag_sg: Singapore",
        "us-central": ":flag_us: U.S. Central",
        "sydney": ":flag_au: Sydney",
        "us-east": ":flag_us: U.S. East",
        "us-south": ":flag_us: U.S. South",
        "us-west": ":flag_us: U.S. West",
        "eu-west": ":flag_eu: Western Europe",
        "vip-us-east": ":flag_us: VIP U.S. East",
        "london": ":flag_gb: London",
        "amsterdam": ":flag_nl: Amsterdam",
        "hongkong": ":flag_hk: Hong Kong",
        "russia": ":flag_ru: Russia",
        "southafrica": ":flag_za:  South Africa",
        "japan": ":flag_jp: Japan",
        "india": ":flag_in: India"
    };	
		
	const embed = new Discord.MessageEmbed()
		.setTitle("**SERVER**")
    .addField("<:label1:640575568802480178> Server Name", message.guild.name,)
	  .addField(":id: Server Id", message.guild.id,)
	  .addField("<:Earth:640487164823601153> Server Region", region[message.guild.region], true)
	.addField("<:calendar_1f4c5:640575567397388314> Creation Date", message.guild.createdAt,)
	.addField("<:key1:640575568277929995>Server Verification", verifLevels[message.guild.verificationLevel], true)
	.addField("<:graduationcap:640575567871344651> Server Owner", message.guild.owner.displayName,)
	.addField("<:bustsinsilhouette:640575567514828811> Total | Members | BOT Count", `${message.guild.members.cache.size} | ${message.guild.members.cache.filter(member => !member.user.bot).size} | ${message.guild.members.cache.filter(member => member.user.bot).size}`, true)	
	.addField("<:hat:640575569742004256> Emoji Count", message.guild.emojis.cache.size,)
	.addField("<:spoolofthread:640575569561518080> Roles", message.guild.roles.cache.size,)
	.addField("<:briefcase_1f4bc:640575567304982560> Channels", message.guild.channels.cache.size,)
	.addField("<:checked:634724283511472149> Verified Server", verify,)  
		.setThumbnail(message.guild.iconURL())
              .setFooter(message.author.username, message.author.avatarURL())
            .setTimestamp();
      		message.channel.send({embed}).catch(err => message.reply(`❌ Error: ${err}`));   
    }}