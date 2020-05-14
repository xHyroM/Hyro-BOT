const Discord = require("discord.js")
const money = require('discord-money');
const moment = require('moment');
const src = require('src');

module.exports = {
    name: "money",
    aliases: ["bal", "balance", "money"],
    category: "economy",  
    description: "Ukáže koľko máš penazí",
    run: (client, message, args) => {
            money.fetchBal(message.author.id).then((i) => { // money.fetchBal grabs the userID, finds it, and puts it into 'i'.
				            message.channel.send({embed: {
                            color: 15844367,
                            description: `**Money:** ${i.money}`,
                            author: {
                                name: `MONEY | BALANCE`,
                                icon_url: message.author.avatarURL()
                            }
                        }}).catch(err => message.reply(`❌ Error: ${err}`)); 
            })
    }}