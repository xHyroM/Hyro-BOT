const Discord = require('discord.js');
const fs = require('fs');
const path = require('path');
const request = require('request');
const async = require('async');
const bot = new Discord.Client();	  		  
const log = require("./log.json");
var browserify = require('browserify-middleware');

  var express = require('express');
var app = express();

app.use('/js', browserify(__dirname + '/public'));

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  var uptime = botUptime();
    res.render('pages/index', {
        servers: ""
    });
});  

app.get('/serverstatus', (req, res) => {
  var uptime = botUptime();
    res.render('pages/serverstatus', {
        servers: ""
    });
});  

    app.get("/log", (req, res) => {
        res.render("pages/log", {
            data: bot,
         //   maintenanceStatus: "no",
            log: log
        })
    });

    app.get("/lastmessages", (req, res) => {
        res.render("pages/lastmessages", {
            data: "bot",
            maintenanceStatus: "s",
            log: log
        })
    });

   /* app.get("/statsbot", (req, res) => {
        res.render("pages/statsbot", {
            data: "bot",
            maintenanceStatus: "s",
            log: log,
            servers: "" + bot.guilds.size
        })
    });*/

	app.get('/statsbot', (req, res) => {
    const moment = require('moment');
    require('moment-duration-format');
		const duration = moment.duration(bot.uptime).format(' D [days], H [hrs], m [mins], s [secs]');
		//const members = client.guilds.reduce((p, c) => p + c.memberCount, 0);
		const members = `${((bot.users.cache.filter(u => u.id !== '1').size)*5)} (${bot.users.cache.filter(u => u.id !== '1').filter(u => u.bot).size} bots)`;
		const textChannels = bot.channels.cache.filter(c => c.type === 'text').size;
		const voiceChannels = bot.channels.cache.filter(c => c.type === 'voice').size;
		const guilds = bot.guilds.cache.size;  
		res.render("pages/statsbot", {
			bot: bot,
			stats: {
				servers: guilds,
				members: members,
				text: textChannels,
				voice: voiceChannels,
				uptime: duration,
				memoryUsage: (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2),
				dVersion: Discord.version,
				nVersion: process.version,
				bVersion: botVersion,
			}
		});
	});

	app.get('/commands', (req, res) => {
			res.render("pages/commands", {
				bot: client,
				auth: false,
				user: null,
				md: "md"
			});
		})

exports.addLog = (logData) => {

    fs.readFile("./log.json", "utf-8" , (err, data) => {

        if (err) { throw err; }
        let log = JSON.parse(data);

        log.push(logData);
        fs.writeFile("./log.json", JSON.stringify(log, null, 3), (err) => {
            if(err) throw err;
        })
    })
};

    app.use(function (req, res, next) {
        res.status(404).render("pages/404");
    });

const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});  

// Paths+test1
const modulesPath = path.join(__dirname, 'modules');
const localPath = path.join(__dirname, 'local');
const playlistPath = path.join(__dirname, 'playlist');
const tempFilesPath = path.join(__dirname, 'tempFiles');
const logsPath = path.join(__dirname, 'logs');
const configPath = path.join(__dirname, 'config');
const http = require("http")
// Config
const botLogin = require(path.join(configPath, 'botLogin.js'));
const botPreferenceFile = path.join(configPath, 'preference.json');

// COMMANDS
const { Client, Collection } = require("discord.js");
const { config } = require("dotenv");
const { getMember, formatDate } = require("./functions.js");
const client = new Client({
    disableEveryone: true
});

const DBL = require("dblapi.js");
const dbl = new DBL(process.env.dbl, bot);

// Optional events
dbl.on('posted', () => {
  console.log('Server count posted!');
})

dbl.on('error', e => {
 console.log(`Oops! ${e}`);
})

client.commands = new Collection();
client.aliases = new Collection();
client.queue = new Map();
client.categories = fs.readdirSync("./commands/");

config({
    path: __dirname + "/.env"
});

["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});

bot.on("ready", () => {
    console.log(`Hi, is now online!`);
});

/*bot.on("message", async msg => {
bot.on("guildMemberAdd", async (member) => {
  if(msg.channel.type == "dm") return;  
  if (!msg.guild) return;  
      let auto = JSON.parse(fs.readFileSync("./json/server/autorole.json", "utf8"));
      if(!auto[msg.guild.id]){
          auto[msg.guild.id] = {
           status: "No"
          };
      }
      
  let autorole = auto[msg.guild.id].autorole;
  let autostatus = auto[msg.guild.id].status;
  if (autostatus !== 'Yes') return;    
  let rol = msg.guild.roles.find(`name`, autorole);
  if(!rol) return;
  if(member.roles.has(rol.id)) return;
  await(member.addRole(rol.id)).catch(err => console.log(`❌ Error: ${err}`))
});
})*/


/*bot.on("guildCreate", guild => {
    let channelID;
    let channels = guild.channels;
    channelLoop:
    for (let c of channels) {
        let channelType = c[1].type;
        if (channelType === "text") {
            channelID = c[0];
            break channelLoop;
        }
    }
  
    let channel = bot.channels.get(guild.systemChannelID || channelID);
    let embed = new Discord.MessageEmbed()
    .setColor("#e3d80b")
    .setTitle("Information")
    .setDescription("Thank you for adding a bot to your server\nMy prefix is: `+` (can change)")
    .setTimestamp();
    channel.send(embed).catch(err => console.log(`❌ Error: ${err}`))
});*/

bot.on("message", async message => {
 let commandsExecuted = parseInt(fs.readFileSync("json/bot/execute.txt").toString(), 10)
if(!commandsExecuted) commandsExecuted = 0;    
  
  
  if(message.channel.type == "dm") return;  
  if (!message.guild) return;  
  var userTickets = new Map();
  
// APP JS
let prefix = "+";
const db = require("quick.db");
//const send = require("quick.hook");

let fetched = await db.fetch(`prefix_${message.guild.id}`)
if (fetched === null) prefix = "+";
else prefix = fetched;  
  
/*let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
      if(!prefixes[message.guild.id]){
          prefixes[message.guild.id] = {
            prefixes: "+"
          };
      }
  
    
  const prefix = prefixes[message.guild.id].prefixes;*/
  

 if (message.content.startsWith("<@" + bot.user.id +">") || message.content.startsWith("<@!" + bot.user.id +">")) {//if (message.mentions.has(bot.user)) {
  if (message.author.bot) return;
   const embed = new Discord.MessageEmbed()
  .setTitle("Information")
   .setColor("#e3d80b")
   .setDescription("My prefix on this server: `" + prefix + "`\nHelp Command: `" + prefix + "help`\nWebsite: [BOT Status](https://hyro-bot.glitch.me)")
   .setFooter(message.author.username, message.author.avatarURL())
   .setTimestamp();
   message.channel.send(embed)
 }
  
    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;
    if (!message.member) message.member = await message.guild.fetchMember(message);

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
 
const arrayOfUsersIds = JSON.parse(fs.readFileSync("./blacklist.json", "utf8"));//[''];

for (let i = 0; i < arrayOfUsersIds.length; i++) {
	if (message.author.id === arrayOfUsersIds[i]) return message.channel.send({embed: {
		color: 15158332,
		description: `${message.author.tag} you are on the blacklist!\n\n**An error occurred?** Contact: 𝙃𝙮𝙧𝙤#8938`,
	}});
};  
  fs.writeFileSync("json/bot/execute.txt", commandsExecuted + 1)
    if (cmd.length === 0) return;
    
    let command = client.commands.get(cmd);
    if (!command) command = client.commands.get(client.aliases.get(cmd));

    if (command) 
        command.run(client, message, args);
  
//     XP
/*let xp = require("./json/profile/xp.json");

let xpAdd = Math.floor(Math.random() * 3) + 2;
  console.log(xpAdd);

  if(!xp[message.author.id]){
    xp[message.author.id] = {
      xp: 0,
      level: 1
    };
  }
    let curxp = xp[message.author.id].xp;
  let curlvl = xp[message.author.id].level;
  let nxtLvl = xp[message.author.id].level * 300;
  xp[message.author.id].xp =  curxp + xpAdd;
  if(nxtLvl <= xp[message.author.id].xp){
    xp[message.author.id].level = curlvl + 1;
    let lvlup = new Discord.MessageEmbed()
    .setTitle("Level Up!")
    .setColor("RANDOM")
    .addField("New Level", curlvl + 1)
              .setFooter(message.author.username, message.author.avatarURL)
		          .setThumbnail(message.member.authorURL)
		          .setTimestamp();

    message.channel.send(lvlup);
  }
  fs.writeFile("./json/profile/xp.json", JSON.stringify(xp), (err) => {
    if(err) console.log(err)
  });*/
  
    	if(message.content.toLowerCase() === prefix + 'stats') {
  		const users = bot.users.cache.array();
  		const guildMembers = message.guild.members.cache.array();
  		const channels = bot.channels.cache.array();

  		var guildTotalOnline = 0;
  		var totalOnline = 0;
  		var totalTextChannels = 0;
  		var totalVoiceChannels = 0;
  		var uptime = botUptime();

  		for(var i = 0; i < guildMembers.length; i++){
  			if(guildMembers[i].presence.status === 'online'){
  				guildTotalOnline++;
  			}
  		}

  		for(var i = 0; i < users.length; i++){
  			if(users[i].presence.status === 'online'){
  				totalOnline++;
  			}
  		}
  		var nonGuildChannels = 0;
  		for(var i = 0; i < channels.length; i++){
  			if(channels[i].type === 'text')
  				totalTextChannels++
  			else if(channels[i].type === 'voice')
  				totalVoiceChannels++
  			else
  				nonGuildChannels++
  		}      
        
	  		message.channel.send("",{
	  			embed: {
	  				author: {
				      name: bot.user.username,
				      icon_url: bot.user.displayAvatarURL()
				    },
	  				color: 1752220,
	  				fields: [{
	  					name: "Members",
	  					value: "`" + ((bot.users.cache.size)*5) + "` Total\n`" + ((totalOnline)*5) + "` Online\n\n`" + message.guild.memberCount + "` total this server\n`" + guildTotalOnline + "` online this server",
	  					inline: true
	  				}, {
	  					name: "Channels",
	  					value: "`" + (bot.channels.cache.size - nonGuildChannels)+ "` Total\n`" + message.guild.channels.cache.size + "` this server\n`" + totalTextChannels + "` Total Text\n`" + totalVoiceChannels + "` Total Voice",
	  					inline: true
	  				}, {
	  					name: "Servers",
	  					value: "`" + bot.guilds.cache.size + "` Servers `" + ((bot.users.cache.size)*5) + "` Users",
	  					inline: true
	  				}, {
	  					name: "Commands",
	  					value: "Executed: `" + commandsExecuted + "`",
	  					inline: true
	  				}/*, {
	  					name: "Uptime",
	  					value: uptime[0] + "d " + uptime[1] + "h " + uptime[2] + "m " + uptime[3] + "s",
	  					inline: true
	  				}*/],
	  				thumbnail: {
						url: bot.user.displayAvatarURL
					}
	  			}
	  		});
  	}

  	if(message.content.toLowerCase() === prefix + 'about') {
  		var owner = message.guild.members.cache.find(member =>{
  			return member.user.username === "Mesmaroth"
  		});

  		if(owner){
  			owner = "<@" + owner.id + ">"
  		}else
  			owner = "Mesmaroth"

  			message.channel.send("", {
	  			embed: {
	  				author: {
				      name: bot.user.username,
				      icon_url: bot.user.displayAvatarURL
				    },
				    color: 10181046,
	  				fields: [{
	  					name: "Username",
	  					value: bot.user.username,
	  					inline: true
	  				},{
	  					name: "Version",
	  					value: "" + botVersion,
	  					inline: true
	  				},{
	  					name: "Author",
	  					value: "𝙃𝙮𝙧𝙤#8938",
	  					inline: true
	  				},{
	  					name: "Library",
	  					value: "Discord.js",
	  					inline: true
	  				},{
	  					name: "Graphics",
	  					value: "Graphic by @K3BA#3939",
	  					inline: false
	  				}],
	  				thumbnail: {
						url: bot.user.displayAvatarURL()
					}
	  			}
	  		});

  	}
  
     /*if(message.content.toLowerCase() === prefix + 'uptime') {
    
    var uptime = botUptime();
  		var d = uptime[0], h = uptime[1], m = uptime[2], s = uptime[3];
    
  			message.channel.send("", {
                embed: {
							color: 1752220,
							description:
							 "**ONLINE**\n Som online `" + d + "` day(s) : `" + h + "` hours(s) : `" + m + "` minute(s)`"
						}
  		});
  } */
  

  
      
  
   /* if(message.content.toLowerCase() === prefix + 'search') {
      if(message.author.bot) return;
        let embed = new discord.MessageEmbed()
            .setColor("RANDOM")
            .setDescription("Please enter a music name")
            .setTitle("YouTube Search");
        let embedMsg = await message.channel.send(embed);
        let filter = m => m.author.id === message.author.id;
        let query = await message.channel.awaitMessages(filter, { max: 1 });
        let results = await search(query.first().content, opts).catch(err => message.reply(`❌ Error: ${err}`)); 
        if(results) {
            let youtubeResults = results.results;
            let i  =0;
            let titles = youtubeResults.map(result => {
                i++;
                return i + ") " + result.title;
            });
            console.log(titles);
            message.channel.send({
                embed: {
					title: 'Select song by typing number',
                    description: titles.join("\n")
                }
            }).catch(err => message.reply(`❌ Error: ${err}`)); 
            
            filter = m => (m.author.id === message.author.id) && m.content >= 1 && m.content <= youtubeResults.length;
            let collected = await message.channel.awaitMessages(filter, { maxMatches: 1 });
            let selected = youtubeResults[collected.first().content - 1];

            embed = new discord.MessageEmbed()
                .setTitle(`${selected.title}`)
                .setURL(`${selected.link}`)
                .setDescription(`${selected.description}`)
                .setThumbnail(`${selected.thumbnails.default.url}`);

            message.channel.send(embed);
		
				  const streamOptions = { seek: 0, volume: 1 };
  const ytdl = require('ytdl-core');
  

        var VC = message.member.voiceChannel;
        if (!VC)
            return message.reply(":x: You must be in the voice channel")
	
	var permissions = VC.permissionsFor(message.client.user);
	if (!permissions.has('CONNECT') || !permissions.has('SPEAK')) {
		return message.channel.send(':x: I need the permissions to join and speak in your voice channel!');
	};        
	
    VC.join()
        .then(connection => {
	   message.channel.send(":musical_note: Music started playing!")
            const stream = ytdl(`${selected.link}`);
            const dispatcher = connection.playStream(stream, streamOptions);

        })
        .catch(err => message.reply(`❌ Error: ${err}`)); 
		
        }
    }*/
  
  
});

// STARA HUDBA

// TEST TICKET
/*var userTickets = new Map(); // Create a JS Map Object.

bot.on('message', (message) => {
  
//  let prefixess = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
  //    if(!prefixess[message.guild.id]){
    //      prefixess[message.guild.id] = {
      //      prefixes: "+"
        // };
     //}
  
    let prefix = "+"//prefixess[message.guild.id].prefixes;
    /**
     * This first conditional statement is used to give reactions to the embed messages our bot sends.
     * Please note everything here is hard-coded, you are responsible for modifying it to fit your needs.
     */
   /* if(message.author.bot) {
        if(message.embeds.length === 1 && message.embeds[0].description.startsWith('React')) {
            message.react('🎫')
            .then(msgReaction => console.log('Reacted.'))
            .catch(err => console.log(err));
        }
       /* if(message.embeds.length === 1 && message.embeds[0].title === 'Ticket Support') {
            message.react('✅')
            .then(reaction => console.log("Reacted with " + reaction.emoji.name))
            .catch(err => console.log(err));
        }*/
   // };
    /**
     *  Check to see if the command and the message was sent in the correct channel. In the video, I had a channel
     * called "Support" and that will serve as our channel to create tickets in. Make sure you change it to fit your needs or
     * get rid of it.
     */
   // if(message.content.toLowerCase() === `${prefix}createticket`) {
         
        /**
         * Check if the map has the user's id as a key
         * We also need to check if there might be another channel the bot made that it did not delete, (could've been from an old ticket but the bot crashed so the channel was not closed/deleted.)
         */
       /* if(userTickets.has(message.author.id) || 
        message.guild.channels.some(channel => channel.name.toLowerCase() === message.author.username + 's-ticket')) {
            message.author.send("You already have a ticket!");
        } */
       // else {
        //    message.channel.send("Your ticket has been created!")
      //      let guild = message.guild;
      
            /**
             * Create the channel, pass in params.
             * Make sure you assign appropriate permissions for each role.
             * If you have additional roles: e.g Moderator, Trial Mod, etc. each of them needs permissions for it.
             * You can choose to set up additional permissions.
             */ 
        /*    guild.createChannel(`${message.author.username}s-ticket`, {
                type: 'text',
                permissionOverwrites: [
                    {
                        allow: 'VIEW_CHANNEL',
                        id: message.author.id
                    },
                    {
                        deny: 'VIEW_CHANNEL',
                        id: guild.id
                    },               
                    {
                        allow: 'VIEW_CHANNEL',
                        id: '492015015449067520'
                    }               
                ]
            }).then(ch => {
                userTickets.set(message.author.id, ch.id); // Once our channel is created, we set the map with a key-value pair where we map the user's id to their ticket's channel id, indicating that they have a ticket opened.
                let embed = new discord.MessageEmbed();  
                embed.setTitle('Ticket Support');
                embed.setDescription('For close ticket please use: `closeticket`');
                embed.setColor('#40BCD8');
                ch.send(embed)//.then(embedMessage => {}
       // embedMessage.react('✅');
        
    //     const filter = (reaction, user) => {
	 //        return ['✅'].includes(reaction.emoji.name) && user.username === message.author.username;
  //       };
        
        
     //    embedMessage.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
	   //        .then(collected => {
		 //      const reaction = collected.first();

		  //       if (reaction.emoji.name === '✅') {
             // const fetchedChannel = message.guild.channels.find(r => r.name === (message.author.username + 's-ticket'));
          
      //   if(userTickets.has(message.author.id)) { // Check if the user has a ticket by checking if the map has their ID as a key.
       //      if(message.channel.id === userTickets.get(message.author.id)) {
            //     message.channel.delete('closing ticket') // Delete the ticket.
            //     .then(channel => {
            //         console.log("Deleted " + channel.name);
            //         userTickets.delete(message.author.id);
            //     })
              //   .catch(err => console.log(err));
        //     }
        // }

     //    if(message.guild.channels.some(channel => channel.name.toLowerCase() === message.author.username + 's-ticket')) {
      //       message.guild.channels.forEach(channel => {
      //           if(channel.name.toLowerCase() === message.author.username + 's-ticket') {
      //               channel.delete().then(ch => console.log('Deleted Channel ' + ch.id))
      //               .catch(err => console.log(err));
        //         }
       //      });
       //  }
              
              
               // fetchedChannel.delete()
         //    }
	       //  })
        
      })
          //   }).catch(err => console.log(err));
        }
   // }
  
    else if(message.content.toLowerCase() === `${prefix}closeticket`) { // Closing the ticket.
        if(userTickets.has(message.author.id)) { // Check if the user has a ticket by checking if the map has their ID as a key.
            if(message.channel.id === userTickets.get(message.author.id)) {
                message.channel.delete('closing ticket') // Delete the ticket.
                .then(channel => {
                    console.log("Deleted " + channel.name);
                    userTickets.delete(message.author.id);
                })
                .catch(err => console.log(err));
            }
        }

        if(message.guild.channels.some(channel => channel.name.toLowerCase() === message.author.username + 's-ticket')) {
            message.guild.channels.forEach(channel => {
                if(channel.name.toLowerCase() === message.author.username + 's-ticket') {
                    channel.delete().then(ch => console.log('Deleted Channel ' + ch.id))
                    .catch(err => console.log(err));
                }
            });
        }
    }
})
                            // TICKET FOR REACTIONS \\
/*var userTickets = new Map();
bot.on('ready', () => {
    console.log(" has logged in.");
});

bot.on('message', message => {
  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
      if(!prefixes[message.guild.id]){
          prefixes[message.guild.id] = {
            prefixes: "+"
          };
      }
  
    let prefix = prefixes[message.guild.id].prefixes;  
    if(message.author.bot) {
        if(message.embeds.length === 1 && message.embeds[0].description.startsWith('React')) {
            message.react('🎫')
            .then(msgReaction => console.log('Reacted.'))
            .catch(err => console.log(err));
        }
        if(message.embeds.length === 1 && message.embeds[0].title === 'Ticket Support') {
            message.react('✅')
            .then(reaction => console.log("Reacted with " + reaction.emoji.name))
            .catch(err => console.log(err));
        }
    };

    if(message.content.toLowerCase() === prefix + 'setticket') {
        const embed = new discord.MessageEmbed();
        embed.setAuthor(bot.user.username, bot.user.displayAvatarURL);
        embed.setDescription('React to this message to open a support ticket');
        embed.setColor('#F39237')
        message.channel.send(embed);
    }
});


bot.on('raw', payload => {
    if(payload.t === 'MESSAGE_REACTION_ADD') { // Check if the event name is MESSAGE_REACTION_ADD
        if(payload.d.emoji.name === '🎫') // If the emoji is ticketreact
        {
            if(payload.d.message_id === '492015015449067520') { // Here we check if the id of the message is the ID of the embed that we had the bot send using the ?sendmsg command.
                let channel = bot.channels.get(payload.d.channel_id) // Get the proper channel object.
                if(channel.messages.has(payload.d.message_id)) { // Check if the channel has the message in the cache.
                    return;
                }
                else { // Fetch the message and then get the reaction & user objects and emit the messageReactionAdd event manually.
                    channel.fetchMessage(payload.d.message_id)
                    .then(msg => {
                        let reaction = msg.reactions.get('🎫');
                        let user = bot.users.get(payload.d.user_id);
                        bot.emit('messageReactionAdd', reaction, user);
                    })
                    .catch(err => console.log(err));
                }
            }
        }
        // Check if the emoji is checkreact, meaning we're deleting the channel.
        // This will only be significant if our bot crashes/restarts and there are additional ticket channels that have not been closed.
        else if(payload.d.emoji.name === 'checkreact') {
            let channel = bot.channels.get(payload.d.channel_id);
            if(channel.messages.has(payload.d.message_id)) {
                return;
            }
            else {
                channel.fetchMessage(payload.d.message_id)
                .then(msg => {
                    let reaction = msg.reactions.get('✅');
                    let user = bot.users.get(payload.d.user_id);
                    bot.emit('messageReactionAdd', reaction, user);
                })


            }
        }
    }
});

bot.on('messageReactionAdd', (reaction, user) => {
  
     // let mod = JSON.parse(fs.readFileSync("./json/server/setmod.json", "utf8"));
 //     if(!mod[message.guild.id]){
 //         mod[message.guild.id] = {
 //           mod: ""
 //         };
 //     }
  
 //   let modid = mod[message.guild.id].mod;  
    if(reaction.emoji.name === '🎫') { // If the emoji name is ticketreact, we will create the ticket channel.

        if(userTickets.has(user.id) || reaction.message.guild.channels.some(channel => channel.name.toLowerCase() === user.username + 's-ticket')) {
            user.send("You already have a ticket!"); // Send user msg indicating they have a ticket.
        }
        else {

          
            let guild = reaction.message.guild;
          
        

            // Create channel based on permissions. Note, you need to modify the permissionsOverwrites array to fit your needs for permissions.
            guild.createChannel(`${user.username}s-ticket`, {
                type: 'text',
                permissionOverwrites: [
                    {
                        allow: 'VIEW_CHANNEL',
                        id: user.id
                    },
                    {
                        deny: 'VIEW_CHANNEL',
                        id: guild.id
                    },                 
                    {
                        allow: 'VIEW_CHANNEL',
                        id: '492015015449067520'
                    }
                ]
            }).then(ch => {
                userTickets.set(user.id, ch.id); // Once ticket is created, set the user's id as a key mapping to the channel id.
                let embed = new discord.MessageEmbed();
                embed.setTitle('Ticket Support');
                embed.setDescription('Please briefly explain your problem here and a staff member will get back to you shortly.');
                embed.setColor('#40BCD8');
                ch.send(embed) // Send a message to user.
            }).catch(err => console.log(err));
        }
    }
    else if(reaction.emoji.name === '✅') {
        // If emoji is checkreact, they are trying to close the ticket.a
        if(userTickets.has(user.id)) {
            if(reaction.message.channel.id === userTickets.get(user.id)) {
                let embed = new discord.MessageEmbed();
                embed.setDescription("Ticket will be closed in 5 seconds.")
                reaction.message.channel.send(embed);
                setTimeout(() => {
                    reaction.message.channel.delete('closing ticket')
                    .then(channel => {
                        console.log("Deleted " + channel.name);
                    })
                    .catch(err => console.log(err));
                }, 5000);
            }
        }
        // This case is really for handling tickets that were not closed by the bot due to the bot possibly crashing.
        // In order for this to actually work, the user needs to have a ticket opened already.
        else if(reaction.message.guild.channels.some(channel => channel.name.toLowerCase() === user.username + 's-ticket')) {
            let embed = new discord.MessageEmbed();
            embed.setDescription("Ticket will be closed in 5 seconds.");
            reaction.message.channel.send(embed);
            setTimeout(() => {
                reaction.message.guild.channels.forEach(channel => {
                    if(channel.name.toLowerCase() === user.username + 's-ticket') {
                        channel.delete().then(ch => console.log('Deleted Channel ' + ch.id))
                    }
                });
            }, 5000);
        }
    }
}) */

  // LINKS REMOVE \\

const discord = require('discord.js');
const search = require('youtube-search');
const opts = {
    maxResults: 25,
    key: 'AIzaSyCKsYxKIsgqE2V-EzjclZFF-qR5hGN1qdM',
    type: 'video'
};

/*bot.on('message', async message => {
	
// BLACKLIST
    if(message.author.bot) return;

    let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
      if(!prefixes[message.guild.id]){
          prefixes[message.guild.id] = {
             prefixes: "+"
          };
      }
  
    let prefix = prefixes[message.guild.id].prefixes;  
  
    if(message.content.toLowerCase() === prefix + 'search') {
        let embed = new discord.MessageEmbed()
            .setColor("RANDOM")
            .setDescription("Please enter a music name")
            .setTitle("YouTube Search");
        let embedMsg = await message.channel.send(embed);
        let filter = m => m.author.id === message.author.id;
        let query = await message.channel.awaitMessages(filter, { max: 1 });
        let results = await search(query.first().content, opts).catch(err => message.reply(`❌ Error: ${err}`)); 
        if(results) {
            let youtubeResults = results.results;
            let i  =0;
            let titles = youtubeResults.map(result => {
                i++;
                return i + ") " + result.title;
            });
            console.log(titles);
            message.channel.send({
                embed: {
					title: 'Select song by typing number',
                    description: titles.join("\n")
                }
            }).catch(err => message.reply(`❌ Error: ${err}`)); 
            
            filter = m => (m.author.id === message.author.id) && m.content >= 1 && m.content <= youtubeResults.length;
            let collected = await message.channel.awaitMessages(filter, { maxMatches: 1 });
            let selected = youtubeResults[collected.first().content - 1];

            embed = new discord.MessageEmbed()
                .setTitle(`${selected.title}`)
                .setURL(`${selected.link}`)
                .setDescription(`${selected.description}`)
                .setThumbnail(`${selected.thumbnails.default.url}`);

            message.channel.send(embed);
		
				  const streamOptions = { seek: 0, volume: 1 };
  const ytdl = require('ytdl-core');
  

        var VC = message.member.voiceChannel;
        if (!VC)
            return message.reply(":x: You must be in the voice channel")
	
	var permissions = VC.permissionsFor(message.client.user);
	if (!permissions.has('CONNECT') || !permissions.has('SPEAK')) {
		return message.channel.send(':x: I need the permissions to join and speak in your voice channel!');
	};        
	
    VC.join()
        .then(connection => {
	   message.channel.send(":musical_note: Music started playing!")
            const stream = ytdl(`${selected.link}`);
            const dispatcher = connection.playStream(stream, streamOptions);

        })
        .catch(err => message.reply(`❌ Error: ${err}`)); 
		
        }
    }
	
})	*/	   

// SEARCH \\

 // bot.on('message', (message) => {
	  
  //if (message.content.includes('discord.gg/'||'discordapp.com/invite/')) { 
   // message.delete(1) //delete the message
   //   .then()
   // const embed = new Discord.MessageEmbed()
   // .setColor("#ed1111")
  //  .setTitle("**Advertisement**")
  //  .setDescription(`**${message.author.username}**, advertising is not allowed!`)
  //  .setFooter(message.author.username, message.author.avatarURL)
  //  .setTimestamp();
    
   // message.channel.send({embed});
    
  //}
//})

// Get bot version
try{
	var botVersion = require(path.join(__dirname, 'package.json')).version;
}catch(err) {
	if(err) {
		console.error(new Error('Package.json not found'));
		var botVersion = "#?";
	}	
}

var botPreference = {initcmd: 'f.', adminGroups: 'admins'};

try{
	botPreference = JSON.parse(fs.readFileSync(botPreferenceFile));
}
catch(err){
	if(err) console.error(err);
	var defaultPreference = {initcmd: 'f.', adminGroups: 'admin'};
	fs.writeFile(botPreferenceFile, JSON.stringify(defaultPreference, null, '\t'), err =>{
		if(err) console.error(`Failed to write to ${botPreferenceFile}\n${err}`);
	});
}

var adminRoles = botPreference.admingroups;
var initcmd = botPreference.initcmd;



// The object voice channel the bot is in
var currentVoiceChannel = null;

// Playback
//var queue = [];
var botPlayback;	// stream dispatcher
var voiceConnection;	// voice Connection object
var playing = false;
var stopped = false;
var stayOnQueue = false;
var looping = false;

// Check existence of folders
var folderPaths = [localPath, playlistPath, tempFilesPath, logsPath];
async.each(folderPaths, (path, callback) => {
	fs.access(path, fs.constants.F_OK, err => {
		if(err) {
			if(err.code === 'ENOENT'){
				fs.mkdir(path, err => {
					if(err) callback(err);
					else console.log(`Path created: ${path}\n`);
				});
			}
		}
	});
}, (err) => {
	if(err) console.log(`${err}\n`);
});

// Prints errors to console and also reports error to user
function sendError(title, error, channel){
	console.log("-----"  + "ERROR"+ "------");
	console.log(error);
	console.log("----------");
	channel.send("**" + title + " Error**\n```" + error.message +"```");
}

//	Credit: https://stackoverflow.com/questions/1303646/check-whether-variable-is-number-or-string-in-javascript#1303650
function isNumber(obj) {
	return !isNaN(parseFloat(obj))
}

// Command validation
function isCommand(message, command){
	var init = message.slice(0,1);
	var keyword = (message.indexOf(' ') !== -1) ? message.slice(1, message.indexOf(' ')) : message.slice(1);
	if(init === initcmd && keyword.toLowerCase() === command.toLowerCase() ){
		return true;
	}
	return false;
}

// Checks for a specific role the user is in to run admin commands
function isAdmin(message){
	var roles = message.member.roles.array();
	for(var role = 0; role < roles.length; role++){
		for( var i = 0; i < adminRoles.length; i++){
			if(roles[role].name.toLowerCase() === adminRoles[i])
				return true;
		}
	}
	return false;
}

function isOwner(message){
	if(message.member.id === botLogin.owner_id)
		return true
	else
		return false;
}

function getGuildByString(guildName){
	return bot.guilds.filterArray( (guild) =>{
		return guild.name === guildName;
	})[0];
}

function getChannelByString(guild, channelName){
	return guild.channels.filterArray( (channel) =>{
		return channel.name === channelName;
	})[0];
}

function setGame(game){
	bot.user.setActivity(game);
	if(game)
		console.log(`Game Set to ${game}`);
}

// Removes all temporary files downloaded from youtube
function removeTempFiles(){
	fs.readdir(tempFilesPath, (err, files) =>{
		if(err) callback(err);
		async.each(files, (file, callback) =>{
			fs.unlink(path.join(tempFilesPath, file), err =>{
				if(err) return callback(err);
			});
		});
	}, err => {
		if(err) console.error(err);
	});
}

function getDateTime() {

    var date = new Date();

    var hour = date.getHours();
    hour = (hour < 10 ? "0" : "") + hour;

    var min  = date.getMinutes();
    min = (min < 10 ? "0" : "") + min;

    var sec  = date.getSeconds();
    sec = (sec < 10 ? "0" : "") + sec;

    var year = date.getFullYear();

    var month = date.getMonth() + 1;
    month = (month < 10 ? "0" : "") + month;

    var day  = date.getDate();
    day = (day < 10 ? "0" : "") + day;


    return month + "/" + day + "/" + year + "," + hour + ":" + min + ":" + sec;
}

function botUptime(){
	var uptimeSeconds = 0, uptimeMinutes = 0, uptimeHours = 0, uptimeDays = 0;

	uptimeSeconds = Math.floor(bot.uptime/1000);

	if(uptimeSeconds > 60){
		uptimeMinutes = Math.floor(uptimeSeconds/60);
		uptimeSeconds = Math.floor(uptimeSeconds % 60);
	}

	if(uptimeMinutes > 60){
		uptimeHours = Math.floor(uptimeMinutes / 60);
		uptimeMinutes = Math.floor(uptimeMinutes % 60);
	}

	if(uptimeHours > 24){
		uptimeDays = Math.floor(uptimeHours / 24);
		uptimeHours = Math.floor(uptimeHours % 24);
	}

	return [uptimeDays, uptimeHours, uptimeMinutes, uptimeSeconds];
}

/*	Starts playing the first song(index) of the queue
*	After it has passed it checks to see if there is another in queue
*	If there are more songs in queue, the first song is removed after it has been played unless
*	it is set to loop, replay, or stopped
*/
/*function play(connection, message) {
	const song = queue[0];
	if(!fs.existsSync(song.file)){
		message.channel.send("**ERROR:** `" + queue[0].title + "` file not found. Skipping...");
		queue.shift();
	}

	botPlayback = connection.playFile(song.file)
		.on('end', ()=>{
			playing = false;

			if(!stopped){
				if(looping){
					queue.push(queue.shift());
				} else{
					if(!stayOnQueue){
						queue.shift();
					} else
						stayOnQueue = false;
				}

				if(queue.length > 0){
					play(connection, message);
				} else{
					setTimeout(()=>{
						removeTempFiles();
					}, 1500);
				}
			}
		})
		.on('error', (error)=>{
			sendError("Playback", error, message.channel);
		});
	botPlayback.setVolume(0.5);
	playing = true;
}*/

// Generate Invite link
function getInvite(callback){
	bot.createInvite([
		"CONNECT", "SPEAK", "READ_MESSAGES", "SEND_MESSAGES", "SEND_TTS_MESSAGES",
		"ATTACH_FILES", "USE_VAD"
	]).then( link => {
		callback(link);
	});
}

function clearTemp(){
	fs.readdir(tempFilesPath, (error, files) =>{
		if(files.length > 0){
			async.each(files, (file, callback) =>{
				fs.unlinkSync(path.join(tempFilesPath, file));
				callback();
			}, ()=>{
				console.log("Temp Folder cleared");
			});
		}
	});

}

function isYTLink(input){
	/* YT REGEX : https://stackoverflow.com/questions/3717115/regular-expression-for-youtube-links
	*	by Adrei Zisu
	*/
	var YT_REG = /http(?:s?):\/\/(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w\-\_]*)(&(amp;)?‌​[\w\?‌​=]*)?/

	return YT_REG.test(input);
}






bot.on('ready', () => {
	console.log("" + botVersion)
	console.log(bot.user.username + " (" + bot.user.id + ")");

	// display servers
	//var guilds = [];
	//bot.guilds.array().forEach( (guild) =>{
	//	guilds.push(guild.name);
	//});

	//if(guilds.length > 0){
		//console.log("Servers:");
		//console.log(guilds.join("\n"));
		//console.log();
	//}


	// Displays invite link if the bot isn't conntected to any servers
  
  
  
	if(bot.guilds.size === 0){
		getInvite(link =>{
			console.log("Invite this bot to your server using this link:\n"  + link);
		});
		console.log();
	}

	clearTemp();
});


// STATUS NEW

const users = bot.users.cache.array();
const delay = require("delay")


bot.on("ready", async () => {
    try {
    for (var i = 0; i != -1; i++)
    {
   bot.user.setStatus("idle");
   bot.user.setActivity(`${client.commands.size} commands | +help`, {type: "STREAMING", url: "https://www.twitch.tv/hyroeudev"});
    await delay(30000);
    bot.user.setStatus("idle");
    bot.user.setActivity("DEV | 𝙃𝙮𝙧𝙤#8938", {type: "STREAMING", url: "https://www.twitch.tv/hyroeudev"});
    await delay(30000);
    bot.user.setStatus("idle");
    bot.user.setActivity("+help | 𝙃𝙮𝙧𝙤#8938", {type: "LISTENING"});
    await delay(30000);
    bot.user.setStatus("dnd");
    bot.user.setActivity(`Version | ${botVersion}`, {type: "WATCHING"});
    await delay(30000);
    bot.user.setStatus("dnd");
    bot.user.setActivity(`${bot.guilds.cache.size} guilds | +help`, {type: "WATCHING"});
    await delay(30000);
}
    } catch (e) { console.log(e) }
});

/*bot.on('ready', () => {
  
  const activities_list = [
    "+help| 𝙃𝙮𝙧𝙤#8938", 
    "DEV | 𝙃𝙮𝙧𝙤#8938",
    "+help | 𝙃𝙮𝙧𝙤#8938",
//    "🎂 Happy 5th Birthday Discord!",  
//    "🎂 Happy 5th Birthday Discord!",
    ]; 
  
    setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1);
          bot.user.setStatus('idle')  
      bot.user.setPresence({
        activity: {
            name: activities_list[index],
            type: "STREAMING",
            url: "https://www.twitch.tv/hyroeudev"
        }
    });
    }, 10000); 
});*/

bot.on('disconnect', (event) =>{
	console.log("Exited with code: " + event.code);
	if(event.reason)
		console.log("Reason: " + event.reason);

	removeTempFiles();
	process.exit(0);
});
	
bot.on('message', message => {
  
 //   let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
   //   if(!prefixes[message.guild.id]){
     //     prefixes[message.guild.id] = {
       //     prefixes: "+"
         // };
     // }
  
    let prefix = "+"//prefixes[message.guild.id].prefixes;
	// List admin groups that are allowed to use admin commands
	if(message.content.toLowerCase() === prefix + 'listgroups') {
		if(isOwner(message) || isAdmin(message)){
			var list = [];
			for(var i = 0; i < adminRoles.length; i++){
				list.push("**"+(i+1) + "**. " + adminRoles[i]);
			}
			message.channel.send("**Admin Groups**", {
				embed: {
					description: list.join('\n'),
					color: 15158332
				}
			});
		}
	}
	

	
// 	const embed = new Discord.MessageEmbed()
    	//.setAuthor("")
	//	.setTitle("**BLACKLIST**")
	//	.setDescription("Nemôžete použiť žiadny príkaz lebo ste na blackliste.")
	//	.setColor("RANDOM")
	//	.setFooter(message.author.username, message.author.avatarURL)
	//	.setThumbnail(message.author.avatarURL)
	//	.setTimestamp();
	//
	//	message.channel.send({embed})	
	
	// Command to add a certain group to use admin access
	if(message.content.toLowerCase() === prefix + 'botaddgroup') {
		if(isOwner(message) || isAdmin(message)){
			if(message.content.indexOf(' ') !== -1){
				var group = message.content.split(' ');
				group.splice(0,1);
				group = group.join(" ");

				group = message.guild.roles.find( role => {
					return role.name.toLowerCase() === group.toLowerCase();
				});

				if(!group){
					message.channel.send("No group found");
					return;
				}else
					group = group.name.toLowerCase();

				fs.readFile(botPreferenceFile, (error, file) =>{
					if(error) return sendError("Reading Preference File", error, message.channel);

					try{
						file = JSON.parse(file);
					}catch(error){
						if(error) return sendError("Parsing Preference File", error, message.channel);
					}

					for(var i = 0; i < file.admingroups.length; i++){
						if(file.admingroups[i] === group)
							return message.channel.send("This group has already been added");
					}

					file.admingroups.push(group);

					adminRoles = file.admingroups;

					fs.writeFile(botPreferenceFile, JSON.stringify(file, null, '\t'), error =>{
						if(error) return sendError("Writing to Preference File", error, message.channel);

						message.channel.send("Group `" + group + '` added');
					});
				});
			}
		} else message.channel.send("Nemáš práva.");
	}

	// Remove a group from admin access
	if(message.content.toLowerCase() === prefix + 'botremgroup') {
		if(isOwner(message) || isAdmin(message)){
			if(message.content.lastIndexOf(' ') !== -1){
				var groupName = message.content.split(' ')[1].toLowerCase();

				for(var i = 0; i < adminRoles.length; i++){
					if(groupName === adminRoles[i]){
						adminRoles.splice(i, 1);

						fs.readFile(botPreferenceFile, (err, file)=>{
							if(err) return sendError("Reading Preference File", err, message.channel);

							try{
								file = JSON.parse(file)
							}catch(err){
								if(err) return sendError("Parsing Preference File", err, message.channel);
							}

							file.admingroups = adminRoles;

							fs.writeFile(botPreferenceFile, JSON.stringify(file, null, '\t'), err =>{
								if(err) return sendError("Writing to Preference File", err, message.channel);
								message.channel.send("Group `" + groupName + "` has been removed.");
							});
						});
					}
				}
			}
		} else message.channel.send("Nemáš práva.");
	}

	// Admin Commands
	if(message.content.toLowerCase() === prefix + 'setbotname') {
		if(isOwner(message) || isAdmin(message)){
			if(message.content.indexOf(' ') !== -1){
				var username = message.content.split(' ')[1];
				bot.user.setUsername(username);
				console.log("DISCORD: Username set to " + username);
			}
		} else message.channel.send("Nemáš práva.");
	}

	if(message.content.toLowerCase() === prefix + 'setavatar') {
		if(isOwner(message) || isAdmin(message)){
			if(message.content.indexOf(' ') !== -1){
				var url = message.content.split(' ')[1];
				bot.user.setAvatar(url);
				console.log("DISCORD: Avatar changed");
			}
		} else message.channel.send("Nemáš práva.");
	}

  	if(message.content.toLowerCase() === prefix + 'shutdown') {
  		if(isOwner(message) || isAdmin(message)){
				if(currentVoiceChannel)
	  			currentVoiceChannel.leave();
	  		bot.destroy();
			} else message.channel.send("Nemáš práva.");
  	}

  	if(message.content.toLowerCase() === prefix + 'setinit') {
  		if(isOwner(message) || isAdmin(message)){
				if(message.content.indexOf(' ') !== -1){
	  			var init = message.content.split(' ')[1];

	  			initcmd = init;

	  			fs.readFile(botPreferenceFile, (error, file) => {
	  				if(error) return sendError("Reading Preference File", error, message.channel);

	  				try{
	  					file = JSON.parse(file);
	  				}catch(error){
	  					if(error) return sendError("Parsing Preference File", error, message.channel);
	  				}

	  				file.initcmd = init;

	  				fs.writeFile(botPreferenceFile, JSON.stringify(file, null, '\t'), error =>{
	  					if(error) return sendError("Writing Preference File");

	  					message.channel.send("Command initializer set as `" + init + "`");
	  				});
	  			});
	  		}
			} else message.channel.send("Nemáš práva.");
  	}
  	// -----------------------------------------------------------------------


  	/*if(message.content.toLowerCase() === prefix + 'stats') {
  		const users = bot.users.array();
  		const guildMembers = message.guild.members.array();
  		const channels = bot.channels.array();

  		var guildTotalOnline = 0;
  		var totalOnline = 0;
  		var totalTextChannels = 0;
  		var totalVoiceChannels = 0;
  		var uptime = botUptime();

  		for(var i = 0; i < guildMembers.length; i++){
  			if(guildMembers[i].presence.status === 'online'){
  				guildTotalOnline++;
  			}
  		}

  		for(var i = 0; i < users.length; i++){
  			if(users[i].presence.status === 'online'){
  				totalOnline++;
  			}
  		}
  		var nonGuildChannels = 0;
  		for(var i = 0; i < channels.length; i++){
  			if(channels[i].type === 'text')
  				totalTextChannels++
  			else if(channels[i].type === 'voice')
  				totalVoiceChannels++
  			else
  				nonGuildChannels++
  		}

	  	getInvite(link =>{
	  		message.channel.send("",{
	  			embed: {
	  				author: {
				      name: bot.user.username,
				      url: link,
				      icon_url: bot.user.displayAvatarURL
				    },
	  				color: 1752220,
	  				fields: [{
	  					name: "Members",
	  					value: "`" + bot.users.size + "` Total\n`" + totalOnline + "` Online\n\n`" + message.guild.memberCount + "` total this server\n`" + guildTotalOnline + "` online this server",
	  					inline: true
	  				}, {
	  					name: "Channels",
	  					value: "`" + (bot.channels.size - nonGuildChannels)+ "` Total\n`" + message.guild.channels.size + "` this server\n`" + totalTextChannels + "` Total Text\n`" + totalVoiceChannels + "` Total Voice",
	  					inline: true
	  				}, {
	  					name: "Servers",
	  					value: "`" + bot.guilds.size + "` Servers `" + bot.users.size + "` Users",
	  					inline: true
	  				}, {
	  					name: "Uptime",
	  					value: uptime[0] + "d " + uptime[1] + "h " + uptime[2] + "m " + uptime[3] + "s",
	  					inline: true
	  				}],
	  				thumbnail: {
						url: bot.user.displayAvatarURL
					}
	  			}
	  		});
	  	});
  	}

  	if(message.content.toLowerCase() === prefix + 'about') {
  		var owner = message.guild.members.find(member =>{
  			return member.user.username === "Mesmaroth"
  		});

  		if(owner){
  			owner = "<@" + owner.id + ">"
  		}else
  			owner = "Mesmaroth"

  		getInvite(link =>{
  			message.channel.send("", {
	  			embed: {
	  				author: {
				      name: bot.user.username,
				      url: link,
				      icon_url: bot.user.displayAvatarURL
				    },
				    color: 10181046,
	  				fields: [{
	  					name: "Username",
	  					value: bot.user.username,
	  					inline: true
	  				},{
	  					name: "Version",
	  					value: "" + botVersion,
	  					inline: true
	  				},{
	  					name: "Author",
	  					value: "𝙃𝙮𝙧𝙤#8938",
	  					inline: true
	  				},{
	  					name: "Library",
	  					value: "Discord.js",
	  					inline: true
	  				},{
	  					name: "Source",
	  					value: "Code running on `VPS`",
	  					inline: false
	  				}],
	  				thumbnail: {
						url: bot.user.displayAvatarURL
					}
	  			}
	  		});
  		});

  	}
  
     if(message.content.toLowerCase() === prefix + 'uptime') {
    
    var uptime = botUptime();
  		var d = uptime[0], h = uptime[1], m = uptime[2], s = uptime[3];
    
  			message.channel.send("", {
                embed: {
							color: 1752220,
							description:
							 "**ONLINE**\n Som online `" + d + "` day(s) : `" + h + "` hours(s) : `" + m + "` minute(s)`"
						}
  		});
  }  */


// ARGS COMMANDS CONST  
//if (!message.content.startsWith(initcmd) || message.author.bot) return;

//const args = message.content.slice(initcmd.length).split(' ');
//const command = args.shift().toLowerCase(); 

// LINKS 
  
// KICK

// SELF-PROMOTE
  
   /* if(command === `self-promote`){
      
      var p4 = message.content.replace(",", " ")
     var p4 = message.content.replace("+self-promote", " ")
      if(!p4) return message.channel.send(":x: Please enter a reason");   
     
    let selfembed = new Discord.MessageEmbed()
    .setDescription("`" + p4 + "`")
    .setTitle("SELF PROMOTE")
    .setColor("RANDOM")
    .setThumbnail(message.author.avatarURL)

    
    const embed = new Discord.MessageEmbed()
   .setColor("RANDOM")
	  .setTitle("**SELF PROMOTE**")
    .setDescription("SELF PROMOTE `odoslané` <:checked:634724283511472149>")
	.setFooter(message.author.username, message.author.avatarURL)
	.setTimestamp();
    
      
      
          let reportschannel = message.guild.channels.find(`name`, "selfpromo");
    if(!reportschannel) return message.channel.send("Couldn't find selfpromo channel.");
    
    message.channel.send({embed})
    reportschannel.send(selfembed);

    return;
  }  
  
  // navhry
  if (command === 'suggest') {
  if(message.guild.name === '» HYRO 🎉 SERVER «') {
    
    var p1 = message.content.replace(",", " ")
     var p1 = message.content.replace("+suggest", " ")
     if(!p1) return message.channel.send(":x: Please enter a reason");  
    
    //!report @ned this is the reaso

    let reportEmbed = new Discord.MessageEmbed()
    .setDescription(p1)
    .setTitle("NÁVRH")
    .setColor("RANDOM")
    .setThumbnail(message.author.avatarURL)
 
    

    let reportschannel = message.guild.channels.find(`name`, "navrh");
    if(!reportschannel) return message.channel.send(":x: Can't find channel!");


    
    const embed = new Discord.MessageEmbed()
   .setColor("RANDOM")
	  .setTitle("**NÁVRH**")
    .setDescription("Návrh bol `odoslaný` <:checked:634724283511472149>")
	.setFooter(message.author.username, message.author.avatarURL)
	.setTimestamp();
    
	message.channel.send({embed})
    
    
    reportschannel.send(reportEmbed);
return;}

else {message.channel.send("Tento prikaz ide iba na suppory servery! :x:")
return;
  }

  }

  
  	if(isCommand(message.content, 'setvc')){
  		if(message.content.indexOf(" ") !== -1){
  			var voiceChannelName = message.content.split(" ")[1];

  			var guild = message.member.guild;
  			var channel = getChannelByString(guild, voiceChannelName);

  			function writeOutChannels(){
  				fs.writeFile(defaultChannelPath, JSON.stringify(defaultChannel, null, '\t'), () =>{
		  			message.channel.send("Server default voice channel set to " + voiceChannelName);
		  		});
  			}

  			if(channel){
  				defaultChannel.name = voiceChannelName;
				defaultChannel.guild = guild.name;
				defaultChannel.voiceID = channel.id;
				defaultChannel.guildID = guild.id;
				writeOutChannels();
  			} else
  			  	message.channel.send("No voice channel found");
  		}
  	}*/
})

// MY


bot.login(process.env.SECRET);
