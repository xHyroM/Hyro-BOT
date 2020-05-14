const Discord = require("discord.js")
const fs = require("fs")
const bot = new Discord.Client()
module.exports = {
    name: "ban",
    aliases: ["ban"],
    category: "moderation",    
    description: "Zabanovať uživateľa",
    run: async (client, message, args) => {

  // APP JS
let prefix = "+";
const db = require("quick.db");
//const send = require("quick.hook");

let fetched = await db.fetch(`prefix_${message.guild.id}`)
if (fetched === null) prefix = "+";
else prefix = fetched;      
      
        let logchannel = JSON.parse(fs.readFileSync("./json/server/logchannel.json", "utf8"));
      if(!logchannel[message.guild.id]){
          logchannel[message.guild.id] = {
            logchannel: "asdoiasdioja"
          };
      }     
      
      let logchan = logchannel[message.guild.id].logchannel;
    let reportschannel = message.guild.channels.cache.find(channel => channel.name === logchan);
    if(!reportschannel) return message.channel.send(`:x: Please setup log channel! ${prefix}setlog`);
            var today = new Date();
      var time = (today.getHours()+2) + ":" + today.getMinutes() + ":" + today.getSeconds();   
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply("❌ You do not have permissions to ban members. Please contact a staff member");
    const user = message.mentions.users.first();
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
    if(!kUser) return message.channel.send("❌ Can't find user!");
    let kReason = args.join(" ").slice(22);
	   if(!kReason) return message.channel.send(":x: Please enter a reason");  
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("❌ No can do pal!");
    if(kUser.hasPermission("BAN_MEMBERS")) return message.channel.send("❌ That person can't be banned!");

    const embed = new Discord.MessageEmbed()
    .setDescription("")
    .setTitle("BAN MEMBER")
    .setColor("#e56b00")
    .addField("Banned User", `${kUser} with ID ${kUser.id}`)
    .addField("Banned By", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Banned In", message.channel)
    .addField("Time", time)
    .addField("Reason", kReason)
	.setFooter(message.author.username, message.author.avatarURL())
	.setThumbnail(message.author.avatarURL())
    .setTimestamp();
    
message.guild.members.ban(user);
  reportschannel.send({embed}).catch(err => message.reply(`❌ Error: ${err}`));  
    
    return;
  }}