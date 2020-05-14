const Discord = require("discord.js")
const fs = require("fs")

module.exports = {
    name: "setage",
    aliases: ["setage", "setvek","age","vek"],
  category: "general",
    description: "Nastaví vek",
    usage: "",
    run: (client, message, args) => {
      
  const vserver = args.join(" ");    
  if(!vserver) return message.channel.send(":x: Please write number");   
  if(isNaN(vserver)) return message.channel.send(":x: Please write number");   

     if(vserver > 200){
       return message.channel.send(":x: Please write real number"); 
     }      
 
    if(vserver < 0.0){
       return message.channel.send(":x: Please write real number"); 
     }       
      
      
    if(vserver < -1){
       return message.channel.send(":x: Please write real number"); 
     } 
      
var number = vserver;
var roundedNumber = Math.round(number * 10) / 10;   
      
   if(vserver < 200){  
      
  let age = JSON.parse(fs.readFileSync("./json/profile/age.json", "utf8"))
  age[message.author.id] = {
    age: roundedNumber
  };
  
  fs.writeFile("./json/profile/age.json", JSON.stringify(age), (err) => {
    if (err) console.log(err)
  });
  	message.channel.send('Age set! [' + roundedNumber + "]")
      .catch(err => message.reply(`❌ Error: ${err}`)); 
        }  
    }}