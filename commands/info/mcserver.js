const Discord = require("discord.js")
const Canvas = require("canvas");

const applyText = (canvas, text) => {
	const ctx = canvas.getContext('2d');

	// Declare a base size of the font
	let fontSize = 32;

	do {
		// Assign the font to the context and decrement it so it can be measured again
		ctx.font = `${fontSize -= 10}px sans-serif`;
		// Compare pixel width of the text to the canvas minus the approximate avatar size
	} while (ctx.measureText(text).width > canvas.width - 300);

	// Return the result to use in the actual canvas
	return ctx.font;
};

const onlinePlayers = (canvas, text) => {
	const ctx = canvas.getContext('2d');

	// Declare a base size of the font
	let fontSize = 34;

	do {
		// Assign the font to the context and decrement it so it can be measured again
		ctx.font = `${fontSize -= 10}px sans-serif`;
		// Compare pixel width of the text to the canvas minus the approximate avatar size
	} while (ctx.measureText(text).width > canvas.width - 300);

	// Return the result to use in the actual canvas
	return ctx.font;
};

const maxPlayers = (canvas, text) => {
	const ctx = canvas.getContext('2d');

	// Declare a base size of the font
	let fontSize = 34;

	do {
		// Assign the font to the context and decrement it so it can be measured again
		ctx.font = `${fontSize -= 10}px sans-serif`;
		// Compare pixel width of the text to the canvas minus the approximate avatar size
	} while (ctx.measureText(text).width > canvas.width - 300);

	// Return the result to use in the actual canvas
	return ctx.font;
};


module.exports = {
    name: "mcserver",
    aliases: ["mcsrv", "mcserver"],
    category: "info",
    run: (client, message, args) => {
      	const ping = require('minecraft-server-util')
  
    
   // let args = message.content.substring("+".length).split(' ')
            if(!args[0]) return message.channel.send('❌ Please write server ip!')
            //if(!args[2]) return message.channel.send('❌ Please write server port! *(Default: 25565)*')
        if(!args[1]){
            args[1] ="25565"
        } 
      
      if(args[1] > 65535) return message.channel.send('❌ Please write real server port!');
      if(args[1] < 2000) return message.channel.send('❌ Please write real server port!');
  const pinger = require('minecraft-pinger')
 
// Promise
pinger.pingPromise(args[1], args[2])
  .then(console.log)
  .catch(console.error)
 
  var randomName = Math.floor(Math.random() * `58959` + `0`);    
// Async
pinger.ping(args[0], args[1], (error, result) => {
  if (error) return message.channel.send("❌ Please write valid port! " + error);

     //   ping(args[1], parseInt(args[2]), async (error, reponse) =>{
       //         if(error) return message.channel.send("❌ Please write valid port! ");
 
                const Embed = new Discord.MessageEmbed()
				.setColor("RANDOM")
                .setTitle('MINECRAFT SERVER')
              //  .addField('Server IP', reponse.host, true)
                .addField('Server IP', args[0], true)
            //    .addField('Server Port', reponse.port, true)
                .addField('Server Port', args[1], true)
              //  .addField('Server Version', reponse.version, true)
                .addField('Server Version', result.version.name, true)
                .addField('Online Players', result.players.online, true)               
                .addField('Max Players', result.players.max, true)
                .addField('Protocol Verson', result.version.protocol, true)
                .addField('Ping', result.ping, true)
               // .addField('Motd', result.description.text)
				.setImage(`http://status.mclive.eu/${args[0]}${randomName}/${args[0]}/25565/banner.png?rnd=0.5795028031631655`)
       .setThumbnail(`https://api.mcsrvstat.us/icon/${args[0]}`)
		.setFooter(message.author.username, message.author.avatarURL())
		.setTimestamp();
   //.attachFiles([attachment])
 //.setImage('attachment://welcome-image.png')	            
                message.channel.send(Embed)
                        .catch(err => message.reply(`❌ Error: ${err}`));  
          })
             // });
    }}