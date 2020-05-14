const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const { getMember, formatDate } = require("../../functions.js");

module.exports = {
    name: "userinfo",
    aliases: ["who", "user", "userinfo", "user-info", "aboutuser"],
    description: "UserInfo informácie",
    category: "info",
    usage: "[username | id | mention]",
    run: (client, message, args) => {
        const member = getMember(message, args.join(" "));
        // Member variables
        const joined = formatDate(member.joinedAt);
        const roles = member.roles.cache
            .filter(r => r.id !== message.guild.id)
            .map(r => r).join(", ") || 'None';
      let status = {
        "dnd": "<:dnd:700349878747791360> Do Not Distrub",
        "online": "<:online:700349884791914496> Online",
        "idle": "<:idle:700349879008100373> Idle",
        "offline": "<:offline:700349880195088485> Offline"
      }
      
      let gfamfa = {
        "true": "Yes",
        "false": "No",
      }
      
      let botyn = {
        "false": "No",
        "true": "Yes",
      }
        // User variables
        const created = formatDate(member.user.createdAt);
        const embed = new MessageEmbed()
            .setColor(member.displayHexColor === '#000000' ? '#ffffff' : member.displayHexColor)        
              	  .addField("<:label1:640575568802480178> Username", member.displayName,)
	  .addField(":id: ID", member.user.id,)
  .addField(':cd: Joined at:', joined,)
	  .addField(':school_satchel: Created at:', created,)
  .addField(':postbox: Status:', status[member.presence.status],) //member.presence.status
	  .addField(":computer: TAG", member.user.tag,)  
    //.addField("<:key1:640575568277929995> 2FA/MFA", gfamfa[member.client.user.mfaEnabled],)  
    .addField(":robot: BOT", botyn[member.user.bot],)     
        if (member.user.presence.game)    
    embed.addField('<:spoolofthread:640575569561518080> Playing', stripIndents`${member.user.presence.game.name}`)    
     embed.addField(":robot: ROLES", roles,)    
                
           		.setFooter(message.author.username, message.author.avatarURL())
		          .setThumbnail(member.user.avatarURL())
		          .setTimestamp()
        message.channel.send(embed).catch(err => message.reply(`❌ Error: ${err}`)); 
    }
}