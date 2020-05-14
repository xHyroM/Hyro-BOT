const Discord = require("discord.js")

module.exports = {
    name: "meme",
    aliases: ["meme", "memes"],
    category: "fun",
    description: "Ukáže random meme",
    usage: "",
    run: async (client, message, args) => {
      
      // MEMES
const randomPuppy = require('random-puppy');

        const subReddits = ["dankmeme", "meme", "me_irl", "AdviceAnimals", "2meirl4meirl","techsupportanimals","wholesomememes","MemeEconomy","AnimeFunny","animemes"];
        // Grab a random property from the array
        const random = subReddits[Math.floor(Math.random() * subReddits.length)];

        // Get a random image from the subreddit page
        const img = await randomPuppy(random);
        const embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setImage(img)
            .setTitle("**RANDOM MEME**")
            .setImage(img)
            .setTimestamp()
            .setFooter(message.author.username, message.author.avatarURL())      

        message.channel.send(embed).catch(err => message.reply(`❌ Error: ${err}`)); 
    }}