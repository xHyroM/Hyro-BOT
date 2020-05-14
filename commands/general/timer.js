const Discord = require("discord.js")
const ms = require("ms")

module.exports = {
    name: "timer",
    aliases: ["timer"],
  category: "general",
    description: "Odpočíta čas",
    usage: "",
    run: (client, message, args) => {

  let Timer = args[0];

  if(!args[0]){
    return message.channel.send(":x: " + "| Please write time \"h , m , s\"").catch(err => message.reply(`❌ Error: ${err}`)); 
  }

  if(args[0] <= 0){
    return message.channel.send(":x: " + "| Please write time \"h , m , s\"").catch(err => message.reply(`❌ Error: ${err}`)); 
  }

  message.channel.send(":white_check_mark: " + "| I started counting: " + `${ms(ms(Timer), {long: true})}`).catch(err => message.reply(`❌ Error: ${err}`)); 

  setTimeout(function(){
    message.channel.send(message.author.toString() + ` End of time!, I counted: ${ms(ms(Timer), {long: true})}`).catch(err => message.reply(`❌ Error: ${err}`)); 

  }, ms(Timer));

    }}