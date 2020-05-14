const Discord = require("discord.js");
const bot = new Discord.Client();
const snekfetch = require('snekfetch');
const fs = require("fs")
module.exports = {
    name: "reddit",
    aliases: ["reddit"],
  category: "verify",
    usage: "",
    run: async (client, message, args) => {
      
      
      let verifyserver = JSON.parse(fs.readFileSync("./verifyserver.json", "utf8"));
      if(!verifyserver[message.guild.id]){
          verifyserver[message.guild.id] = {
            verifyserver: "No"
          };
      }
      
      let verify = verifyserver[message.guild.id].verifyserver;   
        const embedmsg = new Discord.MessageEmbed()
      .setColor("RED")
      .setTitle("Access denied!")
      .setDescription("**" + message.author.username + "** you do not have access to this command!\nThe command is only for **verified** servers!\n\n**An error occurred?** Contact: 𝙃𝙮𝙧𝙤#8938")
      .setThumbnail("https://upload.hicoria.com/files/1G2dEqYZ.png")
      .setFooter(message.author.username, message.author.avatarURL())
      .setTimestamp(); 
       if (verify !== 'Yes') return message.channel.send(embedmsg);        
      
    try {
      if(!args[0]) return message.channel.send(`❌ Please write text!`);   
        const { body } = await snekfetch
            .get("https://www.reddit.com/r/" + args[0] + ".json?sort=top&t=week")
            .query({ limit: 800 });
        const allowed = message.channel.nsfw ? body.data.children : body.data.children.filter(post => !post.data.over_18);
        if (!allowed.length) return message.channel.send(':x: I cant find image...');
        const randomnumber = Math.floor(Math.random() * allowed.length)
        const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle(allowed[randomnumber].data.title)
        .setDescription("Posted by: " + allowed[randomnumber].data.author)
        .setImage(allowed[randomnumber].data.url)
        .addField("Other info:", "Up votes: " + allowed[randomnumber].data.ups + " / Comments: " + allowed[randomnumber].data.num_comments)
        .setFooter(message.author.username, message.author.avatarURL())
        .setTimestamp();  
        message.channel.send(embed).catch(err => message.channel.send(`❌ Error: ${err} **| I cant find image...**`)); 
    } catch (err) {
        return message.channel.send(":x: Error:" + err);
    }
}}