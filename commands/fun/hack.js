const Discord = require("discord.js")
const { getMember, formatDate } = require("../../functions.js");
module.exports = {
    name: "hack",
    aliases: ["hackuser", "hack"],
    category: "fun",
    description: "FAKE HACK !!!",
    usage: "",
    run: (client, message, args) => {
          const taggedUser = message.mentions.users.first();
	if(!taggedUser) return message.channel.send("❌ Can't find user!");	
      const member = getMember(message, args.join(" "));
      
  
  
  // RANDOM EMAIL
  var tokenrandom = 'aNbcdefghijklmnopqrstuvwxyz1234567890';
    var token = '';
    for(var ii=0; ii<59; ii++){
    token += tokenrandom[Math.floor(Math.random() * tokenrandom.length)];}     
  
  var cs = 'aNbcdefghijklmnopqrstuvwxyz1234567890';
    var clientsecret = '';
    for(var ii=0; ii<32; ii++){
    clientsecret += cs[Math.floor(Math.random() * cs.length)];}     
      
    const embede = new Discord.MessageEmbed()
    
    .setColor("#f58142")
    .setTitle(":computer: | Hack")
    .setDescription("Your Result:")
    .addField("<:bustsinsilhouette:640513802470817793> | **Name**", taggedUser.username)
    .addField(":page_with_curl: | **CLIENT ID**", taggedUser.id)
    .addField(":page_with_curl: | **CLIENT SECRET**", clientsecret)
    .addField(":lock: | **Discord Token**", "N" + token)
    .setThumbnail(taggedUser.displayAvatarURL)
    .setFooter(message.author.username, message.author.avatarURL)
    .setTimestamp();
    if(member.user.bot) return message.channel.send(embede).catch(err => message.reply(`❌ Error: ${err}`)); 
    
  
  // RANDOM DOMAIN EMAIL
  
  const domainrandom = [
    "@gmail.com", 
    "@seznam.cz",
    "@zoznam.sk",
    "@email.cz",
    "@hyro.wz.sk"  
    ]; 
  
const randomdomainemail = Math.floor(Math.random() * (domainrandom.length - 1) + 1);
  
  
    // RANDOM HESLOEMAIL
  var echheslo = 'abcdijklorstuvwxyz1234567890';
    var eheslo = '';
    for(var ii=0; ii<6; ii++){
    eheslo += echheslo[Math.floor(Math.random() * echheslo.length)];}
  
  
      // RANDOM HESLOEDISCORD
  var dchheslo = 'apbjklxczqui6548751';
    var dheslo = '';
    for(var ii=0; ii<6; ii++){
    dheslo += dchheslo[Math.floor(Math.random() * dchheslo.length)];}
  
  
  // RANDOM EMAIL
  var chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
    var email = '';
    for(var ii=0; ii<7; ii++){
    email += chars[Math.floor(Math.random() * chars.length)];}
 
   // RANDOM IP1
  var chars = '1234567890';
    var ip1 = '';
    for(var ii=0; ii<3; ii++){
    ip1 += chars[Math.floor(Math.random() * chars.length)];}     
  
    // RANDOM IP1
  var chars = '1234567890';
    var ip2 = '';
    for(var ii=0; ii<3; ii++){
    ip2 += chars[Math.floor(Math.random() * chars.length)];}     
  
      // RANDOM IP1
  var chars = '1234567890';
    var ip3 = '';
    for(var ii=0; ii<3; ii++){
    ip3 += chars[Math.floor(Math.random() * chars.length)];}       
  
  
    const embed = new Discord.MessageEmbed()
    
    .setColor("#f58142")
    .setTitle(":computer: | Hack")
    .setDescription("Your Result:")
    .addField("<:bustsinsilhouette:640513802470817793>| **Name**", taggedUser.username)
    .addField(":page_with_curl: | **ID user**", taggedUser.id)
    .addField("🧩 | **IP**", ip1 + "." + ip2 + "." + ip3)    
    .addField("✉️ | **E-mail**", email + domainrandom[randomdomainemail])
    .addField(":closed_lock_with_key: | **Email pass**", eheslo)
    .addField(":lock: | **Discord pass**", dheslo)
    .setThumbnail(taggedUser.displayAvatarURL())
    .setFooter(message.author.username, message.author.avatarURL())
    .setTimestamp();
    
    message.channel.send({embed}).catch(err => message.reply(`❌ Error: ${err}`)); 
  }}