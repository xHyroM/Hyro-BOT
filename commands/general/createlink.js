const Discord = require("discord.js")

module.exports = {
    name: "ilink",
    aliases: ["ilink", "createlink", "invitelink"],
  category: "general",
    description: "Vytvorí invite link na server",
    usage: "",
    run: (client, message, args) => {
		 
		  if(!message.member.hasPermission("CREATE_INSTANT_INVITE")) return message.reply("❌ You do not have permissions to create invite. Please contact a staff member");
		 
		 var ILINK = args[0]
        if (!ILINK)
            return message.reply(":x: You must send as many as can be connected - *(Max 100)*")
		 
 var options = {
  maxUses: args[0]
};
  var invite = message.channel.createInvite(options).then(function(newInvite){
message.channel.send("<:label1:640575568802480178> Invite code: **" + newInvite.code + "**").catch(err => message.reply(`❌ Error: ${err}`)); 
    }).catch(err => message.reply(`❌ Error: ${err}`)); 
  }}