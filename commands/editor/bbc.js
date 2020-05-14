const Discord = require("discord.js")
const Canvas = require("canvas");

const applyText = (canvas, text) => {
	const ctx = canvas.getContext('2d');

	// Declare a base size of the font
	let fontSize = 50;

	do {
		// Assign the font to the context and decrement it so it can be measured again
		ctx.font = `${fontSize -= 10}px sans-serif`;
		// Compare pixel width of the text to the canvas minus the approximate avatar size
	} while (ctx.measureText(text).width > canvas.width - 300);

	// Return the result to use in the actual canvas
	return ctx.font;
};

module.exports = {
    name: "bbc",
    aliases: ["bbc", "breakingnews", "newsbbc", "bbcnews"],
  category: "editor",
    usage: "",
    run: async (client, message, args) => {

  const text1 = args.join(" ");
  if(!text1) return message.channel.send(":x: Please write text");   

      const canvas = Canvas.createCanvas(999, 530);
      const ctx = canvas.getContext('2d');

      // Since the image takes time to load, you should await it
      const background = await Canvas.loadImage('https://cdn.glitch.com/370745fc-8e0b-4566-8d16-136e9df9a638%2Fbccadd.png?v=1587318398259');
        // This uses the canvas dimensions to stretch the image onto the entire canvas
      ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
      	ctx.strokeStyle = '#74037b';
	    ctx.strokeRect(0, 0, canvas.width, canvas.height);

	// Assign the decided font to the canvas
	    ctx.font = applyText(canvas, text1);
	    ctx.fillStyle = '#ffffff';
	    ctx.fillText(text1, canvas.width / 10.5, canvas.height / 1.1);

	    ctx.beginPath();
	    ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
	    ctx.closePath();
	    ctx.clip();
      
  //const avatar = await Canvas.loadImage("https://cdn.glitch.com/370745fc-8e0b-4566-8d16-136e9df9a638%2FHyroBOT.png?v=1587308132743");
	//ctx.drawImage(avatar, 25, 25, 200, 200);

      // Use helpful Attachment class structure to process the file for you
      const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');

        message.channel.send(attachment).catch(err => message.reply(`❌ Error: ${err}`));    
      
    }}