const Discord = require("discord.js")
module.exports = {
    name: "ship",
    aliases: ["ship"],
    category: "general",
    description: "CODE",
    run: async (client, message, args) => {
        let user1 = args[0];
        let user2 = args.slice(1).join(' ');
        if (!user1) return message.channel.send(":x: You did not select the first item to ship")
        if (!user2) return message.channel.send(":x: You did not select the second item to ship")
        var ship = Math.floor(Math.random() * 100) + 1;
        if (ship <= 50) {
                    const badmatch = new Discord.MessageEmbed()
                    .setColor("RANDOM")
                    .setTitle("SHIP")
                        .setFooter(message.author.username, message.author.avatarURL())
    .setTimestamp()
                    .setDescription(user1 + " and " + user2 + " do not match very well\n:broken_heart: " + ship + "% :broken_heart:");
                    message.channel.send(badmatch);
           } else if (ship === 100) {
                const perfectmatch = new Discord.MessageEmbed()
                    .setColor("RANDOM")
                    .setTitle("SHIP")
                    .setDescription(user1 + " and " + user2 + " are meant for eachother\n:heart: " + ship + "% :heart:")
                    .setFooter(message.author.username, message.author.avatarURL())
    .setTimestamp();
                    message.channel.send(perfectmatch);
           } else {
               const match = new Discord.MessageEmbed()
                    .setColor("RANDOM")
                    .setTitle("SHIP")
                   .setFooter(message.author.username, message.author.avatarURL())
    .setTimestamp()
                    .setDescription(user1 + " and " + user2 + " match very well\n:heart: " + ship + "% :heart:");
                    message.channel.send(match);
            }
    }}