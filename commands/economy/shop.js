/*const Discord = require("discord.js")
const money = require('discord-money');
const moment = require('moment');
const src = require('src');

module.exports = {
    name: "shop",
    aliases: ["shop"],
    category: "economy",  
    run: (client, message, args) => {
       money.fetchBal(message.author.id).then((i) => {
         
// Command validation
function isCommand(message, command){
	var init = message.slice(0,1);
	var keyword = (message.indexOf(' ') !== -1) ? message.slice(1, message.indexOf(' ')) : message.slice(1);
	if(init === "+" && keyword.toLowerCase() === command.toLowerCase() ){
		return true;
	}
	return false;
}      
      
      // IMAGE EDITOR  
 	if(isCommand(message.content, 'shop')){
			if(message.content.indexOf(' ') !== -1){
				var prt = message.content.split(' ')[1];

				if(prt.toLowerCase() === 'burger'){
            if(i.money < "180") return message.channel.send("❌ You don't have enough money! **(180)**");
              money.updateBal(message.author.id, -180).then((i) => {
                message.channel.send(`✅ You have buy **burger 🍔**`);
            })
          return;
				}      
				if(prt.toLowerCase() === 'pizza'){
            if(i.money < "150") return message.channel.send("❌ You don't have enough money! **(150)**");
              money.updateBal(message.author.id, -100).then((i) => {
                message.channel.send(`✅ You have buy **pizza 🍕**`);
            })
          return;
				}      
				if(prt.toLowerCase() === 'sandwich'){
            if(i.money < "130") return message.channel.send("❌ You don't have enough money! **(130)**");
              money.updateBal(message.author.id, -100).then((i) => {
                message.channel.send(`✅ You have buy **sandwich 🍞**`);
            })
          return;
				}           
			} else{
				message.channel.send("", {
					embed: {
						color: 12320855,
						description: "\n" +
						"`shop burger`: You buy a hamburger\n\n"+
						"`shop pizza`: You buy a pizza\n\n"+
						"`shop sandwich`: You buy a sandwich\n\n"          
					}
				});
			}
  	}
         
       })
    }}*/