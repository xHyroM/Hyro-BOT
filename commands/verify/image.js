const Discord = require("discord.js")
const fs = require("fs")
var cheerio = require("cheerio"); /* Used to extract html content, based on jQuery || install with npm install cheerio */
var request = require("request"); /* Used to make requests to URLs and fetch response  || install with npm install request */

module.exports = {
    name: "image",
    aliases: ["image"],
  category: "verify",
    usage: "",
    run: (client, message, args) => {

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
       if (verify !== 'Yes') return message.channel.send(embedmsg)
     // if (verify !== 'Yes') return message.channel.send("❌ Server is not verified!");

    /* extract search query from message */
 var parts = message.content.split(" ");
       if(!args[0]) return message.channel.send(":x: Please write text");   
    var search = parts.slice(1).join(" "); // Slices of the command part of the array ["!image", "cute", "dog"] ---> ["cute", "dog"] ---> "cute dog"
 
   if(args[0] === "pornhub") return message.channel.send(":x: Please write text")   
     if(args[0] === "ass") return message.channel.send(":x: Please write text") 
      if(args[0] === "hentai") return message.channel.send(":x: Please write text")   
    if(args[0] === "anal") return message.channel.send(":x: Please write text") 
    if(args[0] === "holo") return message.channel.send(":x: Please write text")   
    if(args[0] === "pussy") return message.channel.send(":x: Please write text")     
    var options = {
        url: "http://results.dogpile.com/serp?qc=images&q=" + search,
        method: "GET",
        headers: {
            "Accept": "text/html",
            "User-Agent": "Chrome"
        }
    };
    request(options, function(error, response, responseBody) {
        if (error) {
            // handle error
            return message.channel.send(":x: Error: " + error);
        }
 
        /* Extract image URLs from responseBody using cheerio */
 
        $ = cheerio.load(responseBody); // load responseBody into cheerio (jQuery)
 
        // In this search engine they use ".image a.link" as their css selector for image links
        var links = $(".image a.link");
 
        // We want to fetch the URLs not the DOM nodes, we do this with jQuery's .attr() function
        // this line might be hard to understand but it goes thru all the links (DOM) and stores each url in an array called urls
        var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));
      //  console.log(urls);
        if (!urls.length) {
            // Handle no results
            return message.channel.send(":x: I cant find image...");
        }
 
        // Send result
        const embed = new Discord.MessageEmbed()
        .setTitle("Google Images | VERIFY")
        .setImage(urls[0])
        .setFooter(message.author.username, message.author.avatarURL())
        .setTimestamp();  
        message.channel.send(embed)
   //   message.channel.send("Server is verified!")
    })
}}