const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const fs = require("fs")

module.exports = {
    name: "help",
    aliases: ["h", "helper", "help", "info"],
    category: "info",
    description: "Všetky príkazy",
    usage: "[command | alias]",
    run: async (client, message, args) => {
      
        if (args[0]) {
            return getCMD(client, message, args[0]);
        } else {
            return getAll(client, message);
        }
    }
}

async function getAll(client, message) {
   /*   let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
      if(!prefixes[message.guild.id]){
          prefixes[message.guild.id] = {
            prefixes: "+"
         };
      }*/
    
        //let prefix = prefixes[message.guild.id].prefixes;  
  
  // APP JS
let prefix = "+";
const db = require("quick.db");
//const send = require("quick.hook");

let fetched = await db.fetch(`prefix_${message.guild.id}`)
if (fetched === null) prefix = "+";
else prefix = fetched;    
  
    const embed = new MessageEmbed()
        .setColor("RANDOM")
  .setFooter("Get invite link execute command +invite")
    const commands = (category) => {
        return client.commands
            .filter(cmd => cmd.category === category)
            .map(cmd => `\`${prefix}${cmd.name}\` | `)
            .join("");
    }

    const info = client.categories
        .map(cat => stripIndents`**${cat[0].toUpperCase() + cat.slice(1)}**\n ${commands(cat)}`)
        .reduce((string, category) => string + "\n" + category);

    return message.channel.send(embed.setDescription(info)).catch(err => message.reply(`❌ Error: ${err}`))
}

function getCMD(client, message, input) {
    const embed = new MessageEmbed()

    const cmd = client.commands.get(input.toLowerCase()) || client.commands.get(client.aliases.get(input.toLowerCase()));
    
    let info = `No information found for command **${input.toLowerCase()}**`;

    if (!cmd) {
        return message.channel.send(embed.setColor("RED").setDescription(info)).catch(err => message.reply(`❌ Error: ${err}`)); 
    }

    if (cmd.name) info = `**CMD Name**: ${cmd.name}`;
    if (cmd.aliases) info += `\n**Aliases**: ${cmd.aliases.map(a => `\`${a}\``).join(", ")}`;
    if (cmd.description) info += `\n**Description**: ${cmd.description}`;
    if (cmd.usage) {
        info += `\n**Usage**: ${cmd.usage}`;
        embed.setFooter(`Syntax: <> = required, [] = optional`);
    }

    return message.channel.send(embed.setColor("RANDOM").setDescription(info).setFooter("Get invite link execute command +invite"))}