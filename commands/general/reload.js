const Discord = require("discord.js")
module.exports = {
        name: "reload",
        description: "reloads a bot command!",
        usage: "!reload",
        category: "general",
        aliases: ["creload", "commandreload"],
        run: async (bot, message, args) => {
          
      const embedmsg = new Discord.MessageEmbed()
      .setColor("RED")
      .setTitle("Access denied!")
      .setDescription("**" + message.author.username + "** you do not have access to this command!\nThe command is only for bot **owner**!\n\n**An error occurred?** Contact: 𝙃𝙮𝙧𝙤#8938")
      .setThumbnail("https://upload.hicoria.com/files/1G2dEqYZ.png")
      .setFooter(message.author.username, message.author.avatarURL())
      .setTimestamp();    
	if (message.author.id !== '491999008106217473') return message.channel.send(embedmsg); 
    
    if(!args[0]) return message.channel.send(":x: Please write category!")
    let dir = args[0].toLowerCase()
    if(!args[1]) return message.channel.send(":x: Please write a command name to reload!")

    let commandName = args[1].toLowerCase()

    try {
        delete require.cache[require.resolve(`../../commands/${dir}/${commandName}.js`)] // usage !reload <name>
        bot.commands.delete(commandName)
        const pull = require(`../../commands/${dir}/${commandName}.js`)
        bot.commands.set(commandName, pull)
    } catch(e) {
        return message.channel.send(`Could not reload: \`${args[1].toUpperCase()}\``)
    }

    message.channel.send(`The command \`${args[1].toUpperCase()}\` has been reloaded!`)

    }
}