const Discord = require("discord.js")

module.exports = {
    name: "clear",
    aliases: ["clearchat", "clear"],
    category: "moderation",    
    description: "Vymazanie chatu",
    run: async (client, message, args) => {
     
  //if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("❌ You do not have permissions to manage messages. Please contact a staff member");
  //if(!args[0]) return message.channel.send("❌ Please write number!"); 
 // message.channel.bulkDelete(args[0]).then(() => {})
  
  //const embed = new Discord.MessageEmbed()
    
    //  .setDescription(`Vymazal si ${args[0]} správ/y.`)
    //  .setFooter('Vymazal ' + message.author.username, message.author.avatarURL)
    //  .setTimestamp();
      
    //message.channel.send({embed}).then(m => m.delete(3000));
      
            if (message.deletable) {
            message.delete();
        }
    
        // Member doesn't have permissions
        if (!message.member.hasPermission("MANAGE_MESSAGES")) {
            return message.reply("❌ You do not have permissions to manage messages. Please contact a staff member").then(m => m.delete(5000));
        }

        // Check if args[0] is a number
        if (isNaN(args[0]) || parseInt(args[0]) <= 0) {
            return message.reply("❌ Please write number! (1-100)").then(m => m.delete(5000));
        }

        // Maybe the bot can't delete messages
        if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
            return message.reply("❌ I do not have permissions to manage messages.").then(m => m.delete(5000));
        }

        let deleteAmount;

        if (parseInt(args[0]) > 100) {
            deleteAmount = 100;
        } else {
            deleteAmount = parseInt(args[0]);
        }

        message.channel.bulkDelete(deleteAmount, true)
            .then(deleted => message.channel.send(`I deleted \`${deleted.size}\` messages.`)).then(m => m.delete(3000))
            .catch(err => console.log(`❌ Error: ${err}`));  
    }}