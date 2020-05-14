const Discord = require("discord.js")
const fs = require("fs")

module.exports = {
    name: "role-give",
    aliases: ["role-give", "rolegive", "addrole","roleadd"],
    category: "moderation",
    usage: "",
    run: async (client, message, args) => {
  //!addrole @andrew Dog Person
  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("❌ You do not have permissions to manage members. Please contact a staff member");
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.cache.get(args[0]);
  if(!rMember) return message.reply("❌ Couldn't find user");
  let role = args.slice(1).join(" ");
  if(!role) return message.reply("❌ Specify a role! without **@**");
  let gRole = message.guild.roles.cache.find(r=>r.name===role)
  if(!gRole) return message.reply("❌ Couldn't find role");

 // if(rMember.cache.roles.has(gRole.id)) return message.reply("❌ They already have that role");
  await(rMember.roles.add(gRole.id));

  try{
    await rMember.send(`You have gived role: ${gRole.name}`).catch(err => message.reply(`❌ Error: ${err}`)); 
  }catch(e){
    message.channel.send(`<@${rMember.id}> they have been given the role ${gRole.name}`).catch(err => message.reply(`❌ Error: ${err}`)); 
  }
    }}