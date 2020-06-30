const Discord = require("discord.js");

module.exports = {
    name: "getchannels",
    aliases: ["channelcount"],
    category: "info",
    usage: "",
    run: async (client, message, args) => {
  message.channel.send('Voice Channels: ' + `${message.guild.channels.cache.filter(chan => chan.type === 'voice').size} | Text Channels:  ${message.guild.channels.cache.filter(chan => chan.type === 'text').size}`)
    }}