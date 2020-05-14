const Discord = require("discord.js")
module.exports={
    name: "slowmode",
    category:"moderation",
    description:"Set the slowmode for the channel!",
    run: async(bot,message,args)=>{
      if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("❌ You do not have permissions to manage messages. Please contact a staff member");
        if(!args[0])return message.channel.send(`❌ Please write time! (s)`)
        if(isNaN(args[0]))return message.channel.send(`❌ Please write valid number!`)
        let reason = args.slice(1).join(' ')
        if(!reason){
            reason="No reason provided!"
        }
        message.channel.setRateLimitPerUser(args[0],reason)
        const embed = new Discord.MessageEmbed()
        .setTitle(`SLOWMODE`)
        .setDescription("Slowmode: `" + args[0] + "`\nReason: `" + reason + "`")
        .setColor("RANDOM")
       .setFooter(message.author.username, message.author.avatarURL())
       .setTimestamp();        
        message.channel.send(embed).catch(err => message.reply(`❌ Error: ${err}`)); 
    }
}