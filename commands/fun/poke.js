const Discord = require("discord.js")
const Canvas = require("canvas");
module.exports = {
    name: "poke",
    aliases: ["poking"],
    category: "fun",
    usage: "",
    run: async (client, message, args) => {

    const taggedUser = message.mentions.users.first();
	 if(!taggedUser) return message.channel.send("❌ Can't find user!");	  
     
      const canvas = Canvas.createCanvas(1000, 540);
      const ctx = canvas.getContext('2d');

      // Since the image takes time to load, you should await it https://upload.hicoria.com/files/AppR7pBa.png
      const background = await Canvas.loadImage('https://upload.hicoria.com/files/1ew9hBR7.png');
        // This uses the canvas dimensions to stretch the image onto the entire canvas
      ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
      	ctx.strokeStyle = '#74037b';
	    ctx.strokeRect(0, 0, canvas.width, canvas.height);                  

	//    ctx.beginPath();
	  //  ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
	   // ctx.closePath();
	   // ctx.clip();
               
           
  const avatar = await Canvas.loadImage(taggedUser.avatarURL({format: 'png'}));
	ctx.drawImage(avatar, 620, 105, 230, 230);

      // Use helpful Attachment class structure to process the file for you
      const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');     
     
      const embed = new Discord.MessageEmbed()
        .setTitle("**POKE**")
        .setColor("RANDOM")
     .setDescription(`${message.author.username}` + " poked " + `${taggedUser.username}`)
        .setFooter(message.author.username, message.author.avatarURL())
 .attachFiles([attachment])
 .setImage('attachment://welcome-image.png')      
        .setTimestamp();
    
        message.channel.send({embed}).catch(err => message.reply(`❌ Error: ${err}`));  
    }}