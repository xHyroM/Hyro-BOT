const Discord = require("discord.js")
const ms = require("ms");
const fs = require("fs")
module.exports = {
    name: "mute",
    aliases: ["tempmute", "mute"],
    category: "moderation",    
    description: "Mute uživateľa",
    run: async (client, message, args) => {

const taggedUser = message.mentions.users.first();
  
if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply("❌ You do not have permissions to kick members. Please contact a staff member");

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
                  var today = new Date();
      var time = (today.getHours()+2) + ":" + today.getMinutes() + ":" + today.getSeconds();   
    let logchan = logchannel[message.guild.id].logchannel;
    let reportschannel = message.guild.channels.cache.find(channel => channel.name === logchan);
    if(!reportschannel) return message.channel.send(`:x: Please setup log channel! ${prefix}setlog`);  
  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
  if(!tomute) return message.reply(":x: Can't find user!");
  if(!!tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("::x: That person can't be muted!");
  let muterole = message.guild.roles.cache.find(r=>r.name==="Muted")
  //start of create role
  if(!muterole){
    try{
      muterole = message.guild.createRole({
        name: "Muted",
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  //end of create role
  let mutereason = args[1];
  if(!mutereason) return message.reply(":x: Please enter a reason");

 (tomute.roles.add(muterole.id));

  const embed = new Discord.MessageEmbed()
    .setDescription("")
    .setTitle("MUTE MEMBER")
    .setColor("#e56b00")
    .addField("Muted User", `${taggedUser.username} with ID ${taggedUser.id}`)
    .addField("Muted By", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Muted In", message.channel)
    .addField("Muted Reason", `${mutereason}`)
    .addField("Time", time)
	.setFooter(message.author.username, message.author.avatarURL())
	.setThumbnail(message.author.avatarURL())
    .setTimestamp();
  
  reportschannel.send({embed}).catch(err => message.reply(`❌ Error: ${err}`));  


//end of module
    }}