const Discord = require("discord.js")
const math = require("mathjs")
module.exports = {
 name: "math",
 aliases: ["math", "maths", "mathoperation", "mathsoperation"],
 category: "general",
 usage: "",
 run: (client, message, args) => {
   if(!args[0]) return message.channel.send("❌ Please write input a calculation.");
   
   let resp;
   try {
       resp = math.eval(args.join(" ")); 
   } catch (e) {
     return message.channel.send("❌ Please write valid input a calculation.");
   }
   
  const embed = new Discord.MessageEmbed()
  embed.setColor("RANDOM")
  embed.setTitle("Math Calculation")
  embed.setDescription(args.join(" ") + " = " + resp)
  .setFooter(message.author.username, message.author.avatarURL())
  .setTimestamp() 
   
  if(resp === "Infinity") {
     return message.channel.send("❌ Please write valid input a calculation.");
   }
   
   message.channel.send(embed).catch(err => message.reply(`❌ Error: ${err}`)); 
 }}