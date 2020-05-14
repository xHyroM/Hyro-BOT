const Discord = require("discord.js")
module.exports={
    name: "massrole",
    aliases: ["massrole", "mass-role"],
    category: "moderation",
    run: async(client,message,args)=>{
   if(!message.member.permissions.has("MANAGE_ROLES"))return message.channel.send(`❌ You do not have permissions to manage roles. Please contact a staff member`)     
   if (!args[0]) {
              message.channel.send(":x: Please use ``add`` or ``remove``")  
        return;
    }     
      
     if (args[0].toLowerCase() === "add") {
            const rule = args.slice(1).join(' ')
            let roleDelete = message.guild.roles.cache.find(r=> r.name ===rule)
                        if(!roleDelete) return message.reply("❌ Couldn't find role");
            if(!args[1])return message.channel.send(`❌ Please write role name! without **@**`)       
            const embed = new Discord.MessageEmbed()
            .setTitle(`ROLE MANAGER`)
           .setColor(roleDelete.color)
            .setDescription(message.author.username + " give everyone role `" + roleDelete.name + "`\nColor Hex: `"+ roleDelete.color + "`\nID: `" + roleDelete.id + "`")
            .addField("Wait", "Please wait 1 minute <a:loading:636552815367553024>")
            .setFooter(message.author.username, message.author.avatarURL())
            .setTimestamp()
            message.channel.send(embed).catch(err => console.log(`❌ Error: ${err}`)); 
       message.guild.members.cache.forEach(member => member.roles.add(roleDelete).catch(err => console.log(`❌ Error: ${err}`))) 
       
     }
    if (args[0].toLowerCase() === "remove") {
            const rule = args.slice(1).join(' ')
            let roleDelete = message.guild.roles.cache.find(r=>r.name===rule)
                        if(!roleDelete) return message.reply("❌ Couldn't find role");
            if(!args[1])return message.channel.send(`❌ Please write role name! without **@**`)       
            const embed = new Discord.MessageEmbed()
            .setTitle(`ROLE MANAGER`)
            .setColor(roleDelete.color)
            .setDescription(message.author.username + " remove everyone role `" + roleDelete.name + "`\nColor Hex: `"+ roleDelete.color + "`\nID: `" + roleDelete.id + "`")
            .addField("Wait", "Please wait 1 minute <a:loading:636552815367553024>")
            .setFooter(message.author.username, message.author.avatarURL())
            .setTimestamp()
            message.channel.send(embed).catch(err => console.log(`❌ Error: ${err}`)); 
       message.guild.members.cache.forEach(member => member.roles.remove(roleDelete).catch(err => console.log(`❌ Error: ${err}`))) 
     }        
    }}