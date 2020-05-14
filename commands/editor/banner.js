const Discord = require("discord.js")
const Canvas = require("canvas");

const applyText = (canvas, text) => {
	const ctx = canvas.getContext('2d');

	// Declare a base size of the font
	let fontSize = 70;

	do {
		// Assign the font to the context and decrement it so it can be measured again
		ctx.font = `${fontSize -= 10}px sans-serif`;
		// Compare pixel width of the text to the canvas minus the approximate avatar size
	} while (ctx.measureText(text).width > canvas.width - 300);

	// Return the result to use in the actual canvas
	return ctx.font;
};

module.exports = {
    name: "banner",
    aliases: ["banner"],
  category: "editor",
    usage: "",
    run: async (client, message, args) => {
      
// COMMAND
      
// APP JS
let prefix = "+";
const db = require("quick.db");
//const send = require("quick.hook");

let fetched = await db.fetch(`prefix_${message.guild.id}`)
if (fetched === null) prefix = "+";
else prefix = fetched;    
      
function isCommand(message, command){
	var init = message.slice(0,1);
	var keyword = (message.indexOf(' ') !== -1) ? message.slice(1, message.indexOf(' ')) : message.slice(1);
	if(init === prefix && keyword.toLowerCase() === command.toLowerCase() ){
		return true;
	}
	return false;
}   
      
 	if(isCommand(message.content, 'banner')){
			if(message.content.indexOf(' ') !== -1){
				var prt = message.content.split(' ')[1];

				if(prt.toLowerCase() === '1'){   
    var text1 = message.content.replace("1", " ")
     var text1 = message.content.replace("+banner 1", " ")  

      const canvas = Canvas.createCanvas(1000, 250);
      const ctx = canvas.getContext('2d');

      // Since the image takes time to load, you should await it
      const background = await Canvas.loadImage('https://cdn.glitch.com/370745fc-8e0b-4566-8d16-136e9df9a638%2Fdownload%20(2).jpg?v=1587308344504');
        // This uses the canvas dimensions to stretch the image onto the entire canvas
      ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
      	ctx.strokeStyle = '#74037b';
	    ctx.strokeRect(0, 0, canvas.width, canvas.height);

	// Assign the decided font to the canvas
	    ctx.font = applyText(canvas, text1);
	    ctx.fillStyle = '#ffffff';
	    ctx.fillText(text1, canvas.width / 10.5, canvas.height / 1.7);

	    ctx.beginPath();
	    ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
	    ctx.closePath();
	    ctx.clip();
      
  //const avatar = await Canvas.loadImage("https://cdn.glitch.com/370745fc-8e0b-4566-8d16-136e9df9a638%2FHyroBOT.png?v=1587308132743");
	//ctx.drawImage(avatar, 25, 25, 200, 200);

      // Use helpful Attachment class structure to process the file for you
      const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');

        message.channel.send(attachment);
          return;
				}
		
						if(prt.toLowerCase() === '2'){
    var text1 = message.content.replace("2", " ")
     var text1 = message.content.replace("+banner 2", " ")  

      const canvas = Canvas.createCanvas(1000, 250);
      const ctx = canvas.getContext('2d');

      // Since the image takes time to load, you should await it
      const background = await Canvas.loadImage('https://cdn.glitch.com/370745fc-8e0b-4566-8d16-136e9df9a638%2FAnimation-Banner-background.png?v=1587309032967');
        // This uses the canvas dimensions to stretch the image onto the entire canvas
      ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
      	ctx.strokeStyle = '#74037b';
	    ctx.strokeRect(0, 0, canvas.width, canvas.height);

	// Assign the decided font to the canvas
	    ctx.font = applyText(canvas, text1);
	    ctx.fillStyle = '#ffffff';
	    ctx.fillText(text1, canvas.width / 10.5, canvas.height / 1.7);

	    ctx.beginPath();
	    ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
	    ctx.closePath();
	    ctx.clip();
      
  //const avatar = await Canvas.loadImage("https://cdn.glitch.com/370745fc-8e0b-4566-8d16-136e9df9a638%2FHyroBOT.png?v=1587308132743");
	//ctx.drawImage(avatar, 25, 25, 200, 200);

      // Use helpful Attachment class structure to process the file for you
      const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');

        message.channel.send(attachment);
          return;
				}   
        
        						if(prt.toLowerCase() === '3'){
    var text1 = message.content.replace("3", " ")
     var text1 = message.content.replace("+banner 3", " ")  

      const canvas = Canvas.createCanvas(1000, 250);
      const ctx = canvas.getContext('2d');

      // Since the image takes time to load, you should await it
      const background = await Canvas.loadImage('https://cdn.glitch.com/370745fc-8e0b-4566-8d16-136e9df9a638%2Fbanner-1989514_1280.png?v=1587309560801');
        // This uses the canvas dimensions to stretch the image onto the entire canvas
      ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
      	ctx.strokeStyle = '#74037b';
	    ctx.strokeRect(0, 0, canvas.width, canvas.height);

	// Assign the decided font to the canvas
	    ctx.font = applyText(canvas, text1);
	    ctx.fillStyle = '#ffffff';
	    ctx.fillText(text1, canvas.width / 10.5, canvas.height / 1.7);

	    ctx.beginPath();
	    ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
	    ctx.closePath();
	    ctx.clip();
      
  //const avatar = await Canvas.loadImage("https://cdn.glitch.com/370745fc-8e0b-4566-8d16-136e9df9a638%2FHyroBOT.png?v=1587308132743");
	//ctx.drawImage(avatar, 25, 25, 200, 200);

      // Use helpful Attachment class structure to process the file for you
      const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');

        message.channel.send(attachment);
          return;
				}   
        
             						if(prt.toLowerCase() === '4'){
    var text1 = message.content.replace("4", " ")
     var text1 = message.content.replace("+banner 4", " ")  

      const canvas = Canvas.createCanvas(1000, 250);
      const ctx = canvas.getContext('2d');

      // Since the image takes time to load, you should await it
      const background = await Canvas.loadImage('https://cdn.glitch.com/370745fc-8e0b-4566-8d16-136e9df9a638%2F0ba3d60362c7e6d256cfc1f37156bad9.jpg?v=1587309618653');
        // This uses the canvas dimensions to stretch the image onto the entire canvas
      ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
      	ctx.strokeStyle = '#74037b';
	    ctx.strokeRect(0, 0, canvas.width, canvas.height);

	// Assign the decided font to the canvas
	    ctx.font = applyText(canvas, text1);
	    ctx.fillStyle = '#ffffff';
	    ctx.fillText(text1, canvas.width / 10.5, canvas.height / 1.7);

	    ctx.beginPath();
	    ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
	    ctx.closePath();
	    ctx.clip();
      
  //const avatar = await Canvas.loadImage("https://cdn.glitch.com/370745fc-8e0b-4566-8d16-136e9df9a638%2FHyroBOT.png?v=1587308132743");
	//ctx.drawImage(avatar, 25, 25, 200, 200);

      // Use helpful Attachment class structure to process the file for you
      const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');

        message.channel.send(attachment);
          return;
				}    

        
			} else{
				message.channel.send("", {
					embed: {
						color: 12320855,
						description: "\n" +
						"`banner 1`: Banner text 1\n\n"+
						"`banner 2`: Banner text 2\n\n"+
						"`banner 3`: Banner text 3\n\n"+
						"`banner 4`: Banner text 4\n\n"    
					}
				});
			}
  	}      
      
    }}