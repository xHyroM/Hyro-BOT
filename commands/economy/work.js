const Discord = require("discord.js")
const money = require('discord-money');
const moment = require('moment');
const src = require('src');

module.exports = {
    name: "work",
    aliases: ["work", "praca"],
    category: "economy",  
    description: "Práca za ktorú dostaneš peniaze",
    run: async (client, message, args) => {
            const eco = require("discord-economy"); 
            var output = await eco.Daily(message.author.id)
                if (money[message.author.username + message.guild.name] != moment().format('L')) {
                    money[message.author.username + message.guild.name] = moment().format('L')
                        var profile = await eco.AddToBalance(message.author.id, 50) // The daily ends of the day, so everyday they can get a daily bonus, if they missed it, they can't get it back again.
                        message.channel.send({embed: {
                            color: 3447003,
                            description: 'You got **50** cash added to your account! New balance: **' + profile.newbalance + '**',
                            author: {
                                name: `${message.author.username}#${message.author.discriminator}`,
                                icon_url: message.author.avatarURL()
                            }
                        }});
                } else {
                    message.channel.send({embed: {
                        color: 3447003,
                        description: 'You already received reward! Next reward is **' + moment().endOf('hour').fromNow() + '**.', // When you got your daily already, this message will show up.
                        author: {
                            name: `${message.author.username}#${message.author.discriminator}`,
                            icon_url: message.author.avatarURL()
                        }
                    }});
                }
    }}