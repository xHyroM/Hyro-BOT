const { MessageEmbed } = require("discord.js");
const fs = require("fs")
// Command validation
function isCommand(message, command){
	var init = message.slice(0,1);
	var keyword = (message.indexOf(' ') !== -1) ? message.slice(1, message.indexOf(' ')) : message.slice(1);
	if(init === "+" && keyword.toLowerCase() === command.toLowerCase() ){
		return true;
	}
	return false;
}

module.exports = {
    name: "code",
    aliases: ["code", "codes"],
    category: "general",
    description: "CODE",
    run: async (client, message, args) => {
      	if(!args[0]) return message.channel.send("❌ Please write code!");
      
      if (args[0].toLowerCase() === "xseqir" || args[0].toLowerCase() === "xxsd") {
        
        let badges = JSON.parse(fs.readFileSync("./json/profile/badges.json", "utf8"))
            badges[message.author.id] = {
                badges: "<:StayHomeStaySafe:701341105299390505> | SayHomeStaySafe"
            };
          fs.writeFile("./json/profile/badges.json", JSON.stringify(badges), (err) => {
              if (err) console.log(err)
            });
          
          	message.channel.send("Code succesfuly used!")
        .catch(err => message.reply(`❌ Error: ${err}`)); 
      }
    }}
