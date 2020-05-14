const fs = require("fs")
const Discord = require("discord.js")
function clean(text) {
    if (typeof(text) === "string")
        return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    else
        return text;
}
module.exports = {
    name: "eval",
    aliases: ["eval"],
    category: "general",
    run: async (client, message, args) => {
        const embedmsg = new Discord.MessageEmbed()
      .setColor("RED")
      .setTitle("Access denied!")
      .setDescription("**" + message.author.username + "** you do not have access to this command!\nThe command is only for bot **owner**!\n\n**An error occurred?** Contact: 𝙃𝙮𝙧𝙤#8938")
      .setThumbnail("https://upload.hicoria.com/files/1G2dEqYZ.png")
      .setFooter(message.author.username, message.author.avatarURL())
      .setTimestamp(); 
	if (message.author.id !== '491999008106217473') return message.channel.send(embedmsg);        
	//if (message.author.id !== '491999008106217473') return message.channel.send("❌ You do not have permissions to owner bot. Please contact a staff bot member");      
    //message.delete();
    args = args.join(" ");
    try {
        var evaled = eval(args);
        if (typeof evaled !== 'string')
            evaled = require('util').inspect(evaled);
        const embed = new Discord.MessageEmbed()
        .setTitle("EVAL")
        .setColor("RANDOM")
        .addField("Input: ", "```" + args + "```")
        .addField("Output: ", "```" + clean(evaled) + "```")
        message.channel.send(embed)
       // message.channel.send(`\`\`\`xl\n${clean(evaled)}\n\`\`\``);
    } catch (err) {
      const embed = new Discord.MessageEmbed()
        .setTitle("EVAL")
        .setColor("RANDOM")
        .addField("Input: ", "```" + args + "```")
        .addField("Output: ", "```" + clean(err) + "```")
        message.channel.send(embed)
   //    message.channel.send(`\`\`\`xl\n${clean(err)}\n\`\`\``);
    }

        
      
    }}