const fetch = require('node-fetch');
const Discord = require("discord.js")
module.exports = {
    name: "transcript",
    aliases: ["transcript", "transcripttext"],
  category: "general",
    usage: "",
    run: async (client, message, args) => {
      
              message.channel.messages.fetch({ limit: 100 })
            .then(async messages => {
                let text = "";

                for (let [key, value] of messages) {
                    const date = new Date(value.createdTimestamp);
                    let dateString = `${date.getDate()}/${(date.getMonth()+1)} ${(date.getHours()+2)}h ${date.getMinutes()}m`;

                    text += `${value.author.tag} at ${dateString}: ${value.content}\n`;
                }
      
      const fetch = require('node-fetch');
        const options = {
        method: 'POST',
        body: text + "\n\n====================================================================================================================================\nUploaded by: 🎇 Hyro | BOT 🎆\nEU Time: " + "time" + " Time: " + "timenormal" + "\nEU Date: " + "date" + " Date: " + "datenormal" + "\nInvite Link: https://discordapp.com/oauth2/authorize?client_id=492015015449067520&scope=bot&permissions=2147483127\nSupport Link: https://invite.gg/thedevelopers\n====================================================================================================================================", 
        headers: {
            'Content-Type': 'application/json' 
        } 
    }
// https://hyro-bot-hastebin.glitch.me/ https://hasteb.in/documents
    let res = await fetch(`https://hyro-bot-hastebin.glitch.me/documents`, options);
    res = await res.json().catch(err => message.reply(`❌ Error: ${err}`));  

      
    const embed = new Discord.MessageEmbed()
    
    .setColor("RANDOM")
    .setTitle("**TRANSCRIPT**")
    .setDescription(`**Your link:**\n*https://hyro-bot-hastebin.glitch.me/${res.key}*`)
    .setFooter(message.author.username, message.author.avatarURL())
    .setTimestamp();
    
    message.channel.send({embed}) 
    .catch(err => message.reply(`❌ Error: ${err}`));   
 
    })
      
    }}