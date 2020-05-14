const Discord = require("discord.js")
const weather = require("weather-js")
module.exports = {
    name: "weather",
    aliases: ["pocasie", "weather"],
    category: "info",
    description: "Počasie na svete",
    usage: "",
    run: (client, message, args) => {

      weather.find({search: args.join(" "), degreeType: "C"}, function(err,result) {
        if (err) message.channel.send("❌ Please write city or village!");
        
        if (result === undefined || result.length === 0) {
          message.channel.send("❌ Please write valid city or village!");
          return;
        }
        
        var current = result[0].current;
        var location = result[0].location;
        
        const degree = {
          "F": "F",
          "C": "°C"
        }
        
        const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle(":white_sun_rain_cloud: Weather")
        .setDescription("Weather in the city / village `" + `${args}` + "`\nInfo: " + current.skytext)
        .setThumbnail(current.imageUrl)
        .addField(":timer: Timezone", "UTC" + location.timezone, true)
        .addField(":timer: DegreeType", degree[location.degreetype], true)
        .addField(":thermometer: Temperature", current.temperature + "°C", true)
        .addField(":sunny: Feels Like", current.feelslike + "°C", true)
        .addField(":wind_blowing_face: Winds", current.winddisplay, true) 
        .addField(":sweat_drops: Humidity", current.humidity + "%", true) 
        .setFooter(message.author.username, message.author.avatarURL())
        .setTimestamp()
        
        message.channel.send({embed}).catch(err => message.reply(`❌ Error: ${err}`)); 
      })
      
      
//	const text = parseInt(args);
//	if(!args[0]) return message.channel.send("❌ Please write city!");

//// const embed = new Discord.MessageEmbed()
  // .setColor("RANDOM")
//   .setTitle("Weather")
//   .setDescription("Weather in the city / village `" + `${args}` + "`\n")
//   .setFooter(message.author.username, message.author.avatarURL)
//   .setImage("https://wttr.in/" + `${args}` + ".png?m")
//   .setTimestamp();

//message.channel.send({embed})
 //     .catch(err => message.reply(`❌ Error: ${err}`)); 

    }}