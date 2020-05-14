const Discord = require("discord.js")
module.exports={
    name: "createrole",
    aliases: ["createrole", "rolecreate", "create-role", "role-create"],
    category: "moderation",
    run: async(client,message,args)=>{
             if(!message.member.permissions.has("MANAGE_ROLES"))return message.channel.send(`❌ You do not have permissions to manage roles. Please contact a staff member`)
            let rName = args.slice(1).join(' ');
            let rColor = args[0];
      if(!args[0]) return message.channel.send("❌ Please write color! (HEX)");
      if(!args[1]) return message.channel.send("❌ Please write role name!");
            args.forEach(arg=>{
                if(arg.startsWith("#")){
                    rColor=arg
                }
            })
            if(!rName){
                return message.channel.send(`❌ Please write role name!`)
            }
            if(!rColor){
                return message.channel.send(`❌ Please write valid color! (HEX)`)
            }
            if(rColor>=16777215)return message.channel.send(`❌ That hex color range was too big! Keep it between 0 and 16777215`)
            if(rColor<=0)return message.channel.send(`❌ That hex color range was too small! Keep it between 0 and 16777215`)
            let rNew = await message.guild.roles.create({
              data:{
                    name: rName,
                    color: rColor,
              }
            })
            const embed = new Discord.MessageEmbed()
            .setTitle(`ROLE MANAGER`)
            .setDescription(message.author.username + " has created the role `" + rName + "`\nColor Hex: `" + rColor + "`\nID: `" + rNew.id + "`")
            .setColor(rColor)
            message.channel.send(embed).catch(err => console.log(`❌ Error: ${err}`)); 
    }}