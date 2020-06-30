const { MessageEmbed } = require("discord.js");
const { promptMessage } = require("../../functions.js");
const Discord = require("discord.js")
const bot = new Discord.Client()
const chooseArr = ["🗻", "📰", "✂"];

module.exports = {
    name: "rps",
    category: "fun",
    description: "Rock, Paper, Scissors",
    usage: "rps",
    run: async (client, message, args) => {
      
        const embed = new MessageEmbed()
            .setColor("RANDOM")
            .setTitle(":roll_of_paper:  Rock, Paper, Scissors!  :scissors:")
            .setFooter(message.author.username, message.author.avatarURL())
            .setDescription("Add a reaction to continue!")
            .setTimestamp();

        const m = await message.channel.send(embed);
        const reacted = await promptMessage(m, message.author, 30, chooseArr);

        const botChoice = chooseArr[Math.floor(Math.random() * chooseArr.length)];

        const result = await getResult(reacted, botChoice);
        await m.reactions.removeAll()

        embed
            .setDescription("")
            .addField(result, "You selected: ``" + reacted + "``\nBot selected: ``" + botChoice + "``");

        m.edit(embed).catch(err => message.reply(`❌ Error: ${err}`)); 

        function getResult(me, clientChosen) {
            if ((me === "🗻" && clientChosen === "✂") ||
                (me === "📰" && clientChosen === "🗻") ||
                (me === "✂" && clientChosen === "📰")) {
                    return "You won!";
            } else if (me === clientChosen) {
                return "Draw!";
            } else {
                return "You lost!";
            }
        }
    }
}