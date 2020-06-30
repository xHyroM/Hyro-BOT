const fs = require("fs")
const Discord = require("discord.js")
const money = require('discord-money');
const moment = require('moment');
const src = require('src');

module.exports = {
    name: "slot",
    aliases: ["slot"],
    category: "economy",
    run: async (client, message, args) => {
const eco = require("discord-economy"); 
var output = await eco.FetchBalance(message.author.id)    
if(output.balance < "100") return message.channel.send("❌ You don't have enough money! **(100)**");      
//var profile = await eco.SubtractToBalance(message.author.id, 0)  
      
        let slots = ["🍔", "🍕", "🧀"];
  let result1 = Math.floor((Math.random() * slots.length));
  let result2 = Math.floor((Math.random() * slots.length));
  let result3 = Math.floor((Math.random() * slots.length));
  let name = message.author.displayName;
  let icon = message.author.displayAvatarURL;

  var randomMoney = Math.floor(Math.random() * `565` + `100`);    
  
  if (slots[result1] === slots[result2] && slots[result2] === slots[result3]) { // slots[result1] === slots[result2] && slots[result3]
    var profilee = await eco.AddToBalance(message.author.id, randomMoney)
    let embed = new Discord.MessageEmbed()
      .setTitle(":slot_machine: SLOTS | ECONOMY :slot_machine:")
      .setColor("GREEN")
      .addField("Result: ", "You win! " + randomMoney + "$ New balance: " + profilee.newbalance)
      .addField('Look: ', slots[result1] + slots[result2] + slots[result3], true) 
      .setFooter(message.author.username, message.author.avatarURL())
      .setTimestamp()
    message.channel.send(embed);
    
    
  } else {
    var profiler = await eco.AddToBalance(message.author.id, -100)
    let embed2 = new Discord.MessageEmbed()
      .setTitle(":slot_machine: SLOTS | ECONOMY :slot_machine:")
      .setColor("RED")
      .addField("Result: ", "You lost! 100$ New Balance: **" + profiler.newbalance + "**")
      .addField('Look: ', slots[result1] + slots[result2] + slots[result3], true)
      .setFooter(message.author.username, message.author.avatarURL())
      .setTimestamp()
    message.channel.send(embed2);
    
  } 
}}