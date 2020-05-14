const Discord = require("discord.js")
const fs = require("fs")
module.exports = {
    name: "report",
    aliases: ["nahlasit", "report"],
  category: "general",
    description: "Reportnete uživateľa",
    usage: "",
    run: (client, message, args) => {

    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send(":x: Can't find user!");    
    let rreason = args.join(" ").slice(22);
	    if(!rreason) return message.channel.send(":x: Please enter a reason");  

    let reportEmbed = new Discord.MessageEmbed()
    .setDescription("")
    .setTitle("REPORTS")
    .setColor("#15f153")
    .addField("Reported User", `${rUser} with ID: ${rUser.id}`)
    .addField("Reported By", `${message.author} with ID: ${message.author.id}`)
    .addField("Channel", message.channel)
    .addField("Time", message.createdAt)
    .setThumbnail(message.author.avatarURL)
    .addField("Reason", rreason);
    
        let logchannel = JSON.parse(fs.readFileSync("./json/server/logchannel.json", "utf8"));
      if(!logchannel[message.guild.id]){
          logchannel[message.guild.id] = {
            logchannel: "asdoiasdioja"
          };
      }     
      
      let logchan = logchannel[message.guild.id].logchannel;
    let reportschannel = message.guild.channels.find(`name`, logchan);
    if(!reportschannel) return message.channel.send(`:x: Please setup log channel! setlog (Channel name without **#**)`);


    
    const embed = new Discord.MessageEmbed()
   .setColor("RANDOM")
	  .setTitle("**REPORTS**")
    .setDescription("Report was `send` <:checked:634724283511472149>")
	.setFooter(message.author.username, message.author.avatarURL())
	.setTimestamp();
    
	message.channel.send({embed})
      .catch(err => message.reply(`❌ Error: ${err}`)); 
    
    
    reportschannel.send(reportEmbed).catch(err => message.reply(`❌ Error: ${err}`)); 

    return;
    }}