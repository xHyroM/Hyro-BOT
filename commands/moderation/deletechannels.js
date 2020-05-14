const Discord = require("discord.js")
module.exports={
    name: "deletechannels",
    aliases: ["deltechannels", "alldeletechannels", "deleteallchannels"],
    category:"moderation",
    description:"Set the slowmode for the channel!",
    run: async(bot,message,args)=>{
      if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("❌ You do not have permissions to manage messages. Please contact a staff member");

     const chooseArr = ["✅", "❌"];
      
        const embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle("✅ CHANNEL MANAGER ❌")
            .setFooter(message.author.username, message.author.avatarURL())
            .setDescription("Add a reaction to continue! *(delete channels)*")
            .setTimestamp();
      message.channel.send({embed}).then(embedMessage => {
        embedMessage.react('✅').then(() => embedMessage.react('❌'));
        
        const filter = (reaction, user) => {
	        return ['✅', '❌'].includes(reaction.emoji.name) && user.id === message.author.id;
        };
        
        
        embedMessage.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
	          .then(collected => {
		      const reaction = collected.first();

		        if (reaction.emoji.name === '✅') {
 
             /*   const embed = new Discord.MessageEmbed()
                  .setColor("RANDOM")
                  .setTitle("✅ DELETE ALL ✅")
                  .setFooter(message.author.username, message.author.avatarURL)
                  .setDescription("You selected delete all!")
                  .setTimestamp();
                  embedMessage.edit(embed).catch(err => message.reply(`❌ Error: ${err}`)); 
                  embedMessage.clearReactions().catch(err => message.reply(`❌ Error: ${err}`)); */
              message.guild.channels.cache.forEach(channel => channel.delete().catch(err => console.log(`❌ Error: ${err}`)))
		        } else {

              const embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle("❌ NO DELETE ❌")
            .setFooter(message.author.username, message.author.avatarURL())
            .setDescription("You selected no delete!")
            .setTimestamp();
                  embedMessage.edit(embed).catch(err => console.log(`❌ Error: ${err}`))
                  embedMessage.reactions.removeAll().catch(err => console.log(`❌ Error: ${err}`))
            .catch(err => message.reply(`❌ Error: ${err}`)); 
              
		        }
	        })
      })      
      
    }
}