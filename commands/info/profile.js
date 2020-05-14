const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const { getMember, formatDate } = require("../../functions.js");
const fs = require("fs")
const money = require('discord-money');
const moment = require('moment');
const src = require('src');
let xp = require("../../json/profile/xp.json");

module.exports = {
    name: "profile",
    aliases: ["profile", "profil", "profiles"],
    description: "Profil informácie",
    category: "info",
    usage: "[username | id | mention]",
    run: async (client, message, args) => {
const member = getMember(message, args.join(" ")); //member.displayName
/*  if(!xp[member.user.id]){
   xp[member.user.id] = {
     xp: 0,
     level: 1
  };
}
  let curlvl = xp[member.user.id].level; */
        // Member variables
      let age = JSON.parse(fs.readFileSync("./json/profile/age.json", "utf8"));
      if(!age[member.user.id]){
        age[member.user.id] = {
            age: "Nezadané"
      }
    }   
      
    let bio = JSON.parse(fs.readFileSync("./json/profile/bio.json", "utf8"));
      if(!bio[member.user.id]){
        bio[member.user.id] = {
            bio: "Nezadané"
      }
    }   
   
    let pohlavie = JSON.parse(fs.readFileSync("./json/profile/pohlavie.json", "utf8"));
      if(!pohlavie[member.user.id]){
        pohlavie[member.user.id] = {
            pohlavie: "Nezadané"
      }
    }        
      
  let badges = JSON.parse(fs.readFileSync("./json/profile/badges.json", "utf8"));
      if(!badges[member.user.id]){
        badges[member.user.id] = {
            badges: "Žiadne"
      }
    }     
      
      if(member.user.bot) return message.channel.send(":x: Bot dont have profile!")
      // i.money
      let vek = age[member.user.id].age;
      let desc = bio[member.user.id].bio;
      let gender = pohlavie[member.user.id].pohlavie;
      let badgesp = badges[member.user.id].badges;
        // User variables
     money.fetchBal(member.user.id).then((i) => { 
        const created = formatDate(member.user.createdAt)
        const embed = new MessageEmbed()
            .setColor(member.displayHexColor === '#000000' ? '#ffffff' : member.displayHexColor)        
              	  .addField("<:label1:640575568802480178> Username", member.displayName,)
	                .addField(":computer: TAG", member.user.tag,)   
              .addField("🎈 Gender", gender,)   
       //         .addField("🏆 Level", curlvl,)  
                .addField("🎃 Money", i.money)         
        .addField("🧸 AGE", vek,)  
        .addField("🎇 BIO", desc,)  
         .addField("⚽ Odznaky", badgesp)  
           		.setFooter(message.author.username, message.author.avatarURL(),)
		          .setThumbnail(member.user.avatarURL())
		          .setTimestamp()
        message.channel.send(embed).catch(err => message.reply(`❌ Error: ${err}`)); 
    })
    }
}