const Discord = require("discord.js")
const ffmpeg = require("ffmpeg-binaries");
const opusscript = require("opusscript");

module.exports = {
    name: "radio",
    aliases: ["radio"],
    category: "music",
    usage: "",
    run: async (client, message, args) => {
      
// Command validation
      
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
      
      // RADIO
 	if(isCommand(message.content, 'radio')){
			if(message.content.indexOf(' ') !== -1){
				var prt = message.content.split(' ')[1];

				if(prt.toLowerCase() === '1'){

        var VC = message.member.voice.channel;
	        if (!VC)
            return message.channel.send(":x: You must be in the voice channel")
	var permissions = VC.permissionsFor(message.client.user);
	if (!permissions.has('CONNECT') || !permissions.has('SPEAK')) {
		return message.channel.send(':x: I need the permissions to join and speak in your voice channel!');
	};          
          
      if (message.member.voice.channel) {
        message.member.voice.channel.join()
          .then(connection => {
           
            const embed = new Discord.MessageEmbed()
            .setTitle("Radio | Music")
            .setDescription("I just started playing: Kiss Radio")
            .setFooter(message.author.username, message.author.avatarURL())
		        .setThumbnail("https://i3.sndcdn.com/avatars-000262656508-jl6dgr-t500x500.jpg")
		        .setTimestamp();
            message.channel.send(embed)
            connection.play(`https://icecast1.play.cz/kiss128.mp3`);
          })
          .catch(console.log);
      } else {
        message.channel.send(':x: You must be in the voice channel');
      }
          return;
				}
    if(prt.toLowerCase() === '2'){
        var VC = message.member.voice.channel;
	        if (!VC)
            return message.channel.send(":x: You must be in the voice channel")
	var permissions = VC.permissionsFor(message.client.user);
	if (!permissions.has('CONNECT') || !permissions.has('SPEAK')) {
		return message.channel.send(':x: I need the permissions to join and speak in your voice channel!');
	};          
          
      if (message.member.voice.channel) {
        message.member.voice.channel.join()
          .then(connection => {
            const embed = new Discord.MessageEmbed()
            .setTitle("Radio | Music")
            .setDescription("I just started playing: Fun Radio")
            .setFooter(message.author.username, message.author.avatarURL())
		        .setThumbnail("https://www.mediahub.sk/wp-content/uploads/2015/06/FUN-radio-stare-logo.png")
		        .setTimestamp();
            message.channel.send(embed)
            connection.play(`http://stream.funradio.sk:8000/fun128.mp3`);
          })
          .catch(console.log);
      } else {
        message.channel.send(':x: You must be in the voice channel');
      }
          return;
				}    
    if(prt.toLowerCase() === '3'){
        var VC = message.member.voice.channel;
	        if (!VC)
            return message.channel.send(":x: You must be in the voice channel")
	var permissions = VC.permissionsFor(message.client.user);
	if (!permissions.has('CONNECT') || !permissions.has('SPEAK')) {
		return message.channel.send(':x: I need the permissions to join and speak in your voice channel!');
	};          
          
      if (message.member.voice.channel) {
        message.member.voice.channel.join()
          .then(connection => {
            const embed = new Discord.MessageEmbed()
            .setTitle("Radio | Music")
            .setDescription("I just started playing: HitRádio Orion")
            .setFooter(message.author.username, message.author.avatarURL())
		        .setThumbnail("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ-t1Y6Mjh4VppOXbaj3IRPW00OUcry2ALVm4sYpwpREcHbwKzf&usqp=CAU")
		        .setTimestamp();
            message.channel.send(embed)
            connection.play(`https://21323.live.streamtheworld.com/HITRADIO_ORION_128.mp3`);
          })
          .catch(console.log);
      } else {
        message.channel.send(':x: You must be in the voice channel');
      }
          return;
				}     
    if(prt.toLowerCase() === '4'){
        var VC = message.member.voice.channel;
	        if (!VC)
            return message.channel.send(":x: You must be in the voice channel")
	var permissions = VC.permissionsFor(message.client.user);
	if (!permissions.has('CONNECT') || !permissions.has('SPEAK')) {
		return message.channel.send(':x: I need the permissions to join and speak in your voice channel!');
	};          
          
      if (message.member.voice.channel) {
        message.member.voice.channel.join()
          .then(connection => {
            const embed = new Discord.MessageEmbed()
            .setTitle("Radio | Music")
            .setDescription("I just started playing: Rádio Relax")
            .setFooter(message.author.username, message.author.avatarURL())
		        .setThumbnail("https://api.play.cz/static/radio_logo/t200/radio-relax.png")
		        .setTimestamp();
            message.channel.send(embed)
            connection.play(`http://icecast7.play.cz/relax128.mp3`);
          })
          .catch(console.log);
      } else {
        message.channel.send(':x: You must be in the voice channel');
      }
          return;
				}  
    if(prt.toLowerCase() === '5'){
        var VC = message.member.voice.channel;
	        if (!VC)
            return message.channel.send(":x: You must be in the voice channel")
	var permissions = VC.permissionsFor(message.client.user);
	if (!permissions.has('CONNECT') || !permissions.has('SPEAK')) {
		return message.channel.send(':x: I need the permissions to join and speak in your voice channel!');
	};          
          
      if (message.member.voice.channel) {
        message.member.voice.channel.join()
          .then(connection => {
            const embed = new Discord.MessageEmbed()
            .setTitle("Radio | Music")
            .setDescription("I just started playing: Fajn Radio")
            .setFooter(message.author.username, message.author.avatarURL())
		        .setThumbnail("https://www.radiohouse.cz/wp-content/uploads/2016/08/logo-fajnradio_color@2x.png")
		        .setTimestamp();
            message.channel.send(embed)
            connection.play(`https://22323.live.streamtheworld.com/FAJN_RADIO_128.mp3`);
          })
          .catch(console.log);
      } else {
        message.channel.send(':x: You must be in the voice channel');
      }
          return;
				}     
    if(prt.toLowerCase() === '6'){
        var VC = message.member.voice.channel;
	        if (!VC)
            return message.channel.send(":x: You must be in the voice channel")
	var permissions = VC.permissionsFor(message.client.user);
	if (!permissions.has('CONNECT') || !permissions.has('SPEAK')) {
		return message.channel.send(':x: I need the permissions to join and speak in your voice channel!');
	};          
          
      if (message.member.voice.channel) {
        message.member.voice.channel.join()
          .then(connection => {
            const embed = new Discord.MessageEmbed()
            .setTitle("Radio | Music")
            .setDescription("I just started playing: Rádio Express")
            .setFooter(message.author.username, message.author.avatarURL())
		        .setThumbnail("https://www.radia.sk/_radia/loga/nadpis/expres.png")
		        .setTimestamp();
            message.channel.send(embed)
            connection.play(`https://stream.expres.sk/128.mp3?aw_0_req.gdpr=true&listenerid=11159904647ace7133a5b52763cfabe7&awparams=companionAds%3Atrue&aw_0_1st.version=1.1.7%3Ahtml5&aw_0_1st.playerid=expresmedia_web_player&aw_0_1st.skey=1587916816`);
          })
          .catch(console.log);
      } else {
        message.channel.send(':x: You must be in the voice channel');
      }
          return;
				}      
      if(prt.toLowerCase() === '7'){
        var VC = message.member.voice.channel;
	        if (!VC)
            return message.channel.send(":x: You must be in the voice channel")
	var permissions = VC.permissionsFor(message.client.user);
	if (!permissions.has('CONNECT') || !permissions.has('SPEAK')) {
		return message.channel.send(':x: I need the permissions to join and speak in your voice channel!');
	};          
          
      if (message.member.voice.channel) {
        message.member.voice.channel.join()
        .then(connection => {
            const embed = new Discord.MessageEmbed()
            .setTitle("Radio | Music")
            .setDescription("I just started playing: HitRádio Vysočina")
            .setFooter(message.author.username, message.author.avatarURL())
		        .setThumbnail("https://mediagurucdn.azureedge.net/wp-content/uploads/2017/05/Hitradio-vysocina.png")
		        .setTimestamp();
            message.channel.send(embed)
            connection.play(`https://ice5.abradio.cz/hitvysocina128.mp3`);
          })
          .catch(console.log);
      } else {
        message.channel.send(':x: You must be in the voice channel');
      }
          return;
				}   
      if(prt.toLowerCase() === '8'){
        var VC = message.member.voice.channel;
	        if (!VC)
            return message.channel.send(":x: You must be in the voice channel")
	var permissions = VC.permissionsFor(message.client.user);
	if (!permissions.has('CONNECT') || !permissions.has('SPEAK')) {
		return message.channel.send(':x: I need the permissions to join and speak in your voice channel!');
	};          
          
      if (message.member.voice.channel) {
        message.member.voice.channel.join()
          .then(connection => {
            const embed = new Discord.MessageEmbed()
            .setTitle("Radio | Music")
            .setDescription("I just started playing: Country Radio")
            .setFooter(message.author.username, message.author.avatarURL())
		        .setThumbnail("https://lh3.googleusercontent.com/6epCalapNZsXTiuM5DfVgh9U_DzlwPbHBggRaVj_tlegtTCwQZ0pJXyF4nqBHs-0Hv4")
		        .setTimestamp();
            message.channel.send(embed)
            connection.play(`http://icecast4.play.cz/country128.mp3`);
          })
          .catch(console.log);
      } else {
        message.channel.send(':x: You must be in the voice channel');
      }
          return;
				}     
      if(prt.toLowerCase() === '9'){
        var VC = message.member.voice.channel;
	        if (!VC)
            return message.channel.send(":x: You must be in the voice channel")
	var permissions = VC.permissionsFor(message.client.user);
	if (!permissions.has('CONNECT') || !permissions.has('SPEAK')) {
		return message.channel.send(':x: I need the permissions to join and speak in your voice channel!');
	};          
          
      if (message.member.voice.channel) {
        message.member.voice.channel.join()
          .then(connection => {
            const embed = new Discord.MessageEmbed()
            .setTitle("Radio | Music")
            .setDescription("I just started playing: Rádio Beat")
            .setFooter(message.author.username, message.author.avatarURL())
		        .setThumbnail("https://pbs.twimg.com/profile_images/1207759236156944386/3bjnVkmS_400x400.jpg")
		        .setTimestamp();
            message.channel.send(embed)
            connection.play(`http://icecast2.play.cz/radiobeat128.mp3`);
          })
          .catch(console.log);
      } else {
        message.channel.send(':x: You must be in the voice channel');
      }
          return;
				}      
      if(prt.toLowerCase() === '10'){
        var VC = message.member.voice.channel;
	        if (!VC)
            return message.channel.send(":x: You must be in the voice channel")
	var permissions = VC.permissionsFor(message.client.user);
	if (!permissions.has('CONNECT') || !permissions.has('SPEAK')) {
		return message.channel.send(':x: I need the permissions to join and speak in your voice channel!');
	};          
          
      if (message.member.voice.channel) {
        message.member.voice.channel.join()
          .then(connection => {
            const embed = new Discord.MessageEmbed()
            .setTitle("Radio | Music")
            .setDescription("I just started playing: Rádio Helax")
            .setFooter(message.author.username, message.author.avatarURL())
		        .setThumbnail("https://www.helax.cz/img/app_icon.jpg")
		        .setTimestamp();
            message.channel.send(embed)
            connection.play(`http://ice.abradio.cz:8000/helax128.mp3`);
          })
          .catch(console.log);
      } else {
        message.channel.send(':x: You must be in the voice channel');
      }
          return;
				}       
      if(prt.toLowerCase() === '11'){
        var VC = message.member.voice.channel;
	        if (!VC)
            return message.channel.send(":x: You must be in the voice channel")
	var permissions = VC.permissionsFor(message.client.user);
	if (!permissions.has('CONNECT') || !permissions.has('SPEAK')) {
		return message.channel.send(':x: I need the permissions to join and speak in your voice channel!');
	};          
          
      if (message.member.voice.channel) {
        message.member.voice.channel.join()
          .then(connection => {
            const embed = new Discord.MessageEmbed()
            .setTitle("Radio | Music")
            .setDescription("I just started playing: HitRádio City FM")
            .setFooter(message.author.username, message.author.avatarURL())
		        .setThumbnail("https://cdn-profiles.tunein.com/s110340/images/logog.jpg?t=156692")
		        .setTimestamp();
            message.channel.send(embed)
            connection.play(`http://ice.abradio.cz:8000/cityfm128.mp3`);
          })
          .catch(console.log);
      } else {
        message.channel.send(':x: You must be in the voice channel');
      }
          return;
				}   
      if(prt.toLowerCase() === '12'){
        var VC = message.member.voice.channel;
	        if (!VC)
            return message.channel.send(":x: You must be in the voice channel")
	var permissions = VC.permissionsFor(message.client.user);
	if (!permissions.has('CONNECT') || !permissions.has('SPEAK')) {
		return message.channel.send(':x: I need the permissions to join and speak in your voice channel!');
	};          
          
      if (message.member.voice.channel) {
        message.member.voice.channel.join()
          .then(connection => {
            const embed = new Discord.MessageEmbed()
            .setTitle("Radio | Music")
            .setDescription("I just started playing: HitRádio City BRNO")
            .setFooter(message.author.username, message.author.avatarURL())
		        .setThumbnail("https://cdn-profiles.tunein.com/s110340/images/logog.jpg?t=156692")
		        .setTimestamp();
            message.channel.send(embed)
            connection.play(`http://ice.abradio.cz/magicbrno128.mp3`);
          })
          .catch(console.log);
      } else {
        message.channel.send(':x: You must be in the voice channel');
      }
          return;
				}    
      if(prt.toLowerCase() === '13'){
        var VC = message.member.voice.channel;
	        if (!VC)
            return message.channel.send(":x: You must be in the voice channel")
	var permissions = VC.permissionsFor(message.client.user);
	if (!permissions.has('CONNECT') || !permissions.has('SPEAK')) {
		return message.channel.send(':x: I need the permissions to join and speak in your voice channel!');
	};          
          
      if (message.member.voice.channel) {
        message.member.voice.channel.join()
          .then(connection => {
            const embed = new Discord.MessageEmbed()
            .setTitle("Radio | Music")
            .setDescription("I just started playing: Rádio Anténa Rock")
            .setFooter(message.author.username, message.author.avatarURL())
		        .setThumbnail("https://www.radia.sk/_radia/loga/app/antena-rock.png")
		        .setTimestamp();
            message.channel.send(embed)
            connection.play(`http://stream.antenarock.sk/antena-hi.mp3`);
          })
          .catch(console.log);
      } else {
        message.channel.send(':x: You must be in the voice channel');
      }
          return;
				}   
      if(prt.toLowerCase() === '14'){
        var VC = message.member.voice.channel;
	        if (!VC)
            return message.channel.send(":x: You must be in the voice channel")
	var permissions = VC.permissionsFor(message.client.user);
	if (!permissions.has('CONNECT') || !permissions.has('SPEAK')) {
		return message.channel.send(':x: I need the permissions to join and speak in your voice channel!');
	};          
          
      if (message.member.voice.channel) {
        message.member.voice.channel.join()
          .then(connection => {
            const embed = new Discord.MessageEmbed()
            .setTitle("Radio | Music")
            .setDescription("I just started playing: Evropa 2")
            .setFooter(message.author.username, message.author.avatarURL())
		        .setThumbnail("https://guzei.com/online_radio/logo300/4033.jpg")
		        .setTimestamp();
            message.channel.send(embed)
            connection.play(`http://ice.actve.net/fm-evropa2-128`);
          })
          .catch(console.log);
      } else {
        message.channel.send(':x: You must be in the voice channel');
      }
          return;
		}        
        
      if(prt.toLowerCase() === '15'){
        var VC = message.member.voice.channel;
	        if (!VC)
            return message.channel.send(":x: You must be in the voice channel")
	var permissions = VC.permissionsFor(message.client.user);
	if (!permissions.has('CONNECT') || !permissions.has('SPEAK')) {
		return message.channel.send(':x: I need the permissions to join and speak in your voice channel!');
	};          
          
      if (message.member.voice.channel) {
        message.member.voice.channel.join()
          .then(connection => {
            const embed = new Discord.MessageEmbed()
            .setTitle("Radio | Music")
            .setDescription("I just started playing: BBC 1")
            .setFooter(message.author.username, message.author.avatarURL())
		        .setThumbnail("https://cdn.worldvectorlogo.com/logos/bbc-one-81754.svg")
		        .setTimestamp();
            message.channel.send(embed)
            connection.play(`http://bbcmedia.ic.llnwd.net/stream/bbcmedia_radio1_mf_q`);
          })
          .catch(console.log);
      } else {
        message.channel.send(':x: You must be in the voice channel');
      }
          return;
				}    
      if(prt.toLowerCase() === '16'){
        var VC = message.member.voice.channel;
	        if (!VC)
            return message.channel.send(":x: You must be in the voice channel")
	var permissions = VC.permissionsFor(message.client.user);
	if (!permissions.has('CONNECT') || !permissions.has('SPEAK')) {
		return message.channel.send(':x: I need the permissions to join and speak in your voice channel!');
	};          
          
      if (message.member.voice.channel) {
        message.member.voice.channel.join()
          .then(connection => {
            const embed = new Discord.MessageEmbed()
            .setTitle("Radio | Music")
            .setDescription("I just started playing: BBC 2")
            .setFooter(message.author.username, message.author.avatarURL())
		        .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/BBC_Two_%282001%29.svg/220px-BBC_Two_%282001%29.svg.png")
		        .setTimestamp();
            message.channel.send(embed)
            connection.play(`http://bbcmedia.ic.llnwd.net/stream/bbcmedia_radio2_mf_q`);
          })
          .catch(console.log);
      } else {
        message.channel.send(':x: You must be in the voice channel');
      }
          return;
				}            
			} else{
          const embed = new Discord.MessageEmbed()
          .setColor("RANDOM")
          .setTitle("Radio | List")
          .setDescription("`1.` " + "Kiss Radio (CZ)\n"+
          "`2.` " + "Fun Radio (SK)\n"+
          "`3.` " + "HitRádio Orion (CZ)\n"+
          "`4.` " + "Rádio Relax (CZ)\n"+
          "`5.` " + "Fajn Radio (CZ)\n"+
          "`6.` " + "Rádio Express (SK)\n"+
          "`7.` " + "HitRádio Vysočina (CZ)\n"+
          "`8.` " + "Country Radio (CZ)\n"+
          "`9.` " + "Rádio Beat (CZ)\n"+
          "`10.` " + "Rádio Helax (CZ)\n"+
          "`11.` " + "HitRádio City FM (CZ)\n"+
          "`12.` " + "HitRádio City BRNO (CZ)\n"+
          "`13.` " + "Rádio Anténa Rock (SK)\n"+
          "`14.` " + "Evropa 2 (CZ)\n"+
          "`15.` " + "BBC 1 (US)\n"+
          "`16.` " + "BBC 2 (US)\n")
          .addField("« Input »","radio [NUM]")
          .setThumbnail("https://cdn.discordapp.com/attachments/628301763321004088/705456367103901786/ezgif.com-gif-maker.gif")
          .setFooter(message.author.username, message.author.avatarURL())
          .setTimestamp();
          message.channel.send({embed}).catch(err => message.reply(`❌ Error: ${err}`)); 
			}
  	}
      
    }}

/*const Discord = require("discord.js")
const ffmpeg = require("ffmpeg-binaries");
const opusscript = require("opusscript");

module.exports = {
    name: "radio",
    aliases: ["radio"],
    category: "music",
    usage: "",
    run: async (client, message, args) => {
      
// Command validation
      
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
      
      // RADIO
 	if(isCommand(message.content, 'radio')){
			if(message.content.indexOf(' ') !== -1){
				var prt = message.content.split(' ')[1];

				if(prt.toLowerCase() === '1'){

        var VC = message.member.voice.channel;
	        if (!VC)
            return message.channel.send(":x: You must be in the voice channel")
	var permissions = VC.permissionsFor(message.client.user);
	if (!permissions.has('CONNECT') || !permissions.has('SPEAK')) {
		return message.channel.send(':x: I need the permissions to join and speak in your voice channel!');
	};          
          
      if (message.member.voice.channel) {
        message.member.voice.channel.join()
          .then(connection => {
            message.channel.send(':musical_note: Radio started playing!');
            connection.play(`https://icecast1.play.cz/kiss128.mp3`);
          })
          .catch(console.log);
      } else {
        message.channel.send(':x: You must be in the voice channel');
      }
          return;
				}
    if(prt.toLowerCase() === '2'){
        var VC = message.member.voice.channel;
	        if (!VC)
            return message.channel.send(":x: You must be in the voice channel")
	var permissions = VC.permissionsFor(message.client.user);
	if (!permissions.has('CONNECT') || !permissions.has('SPEAK')) {
		return message.channel.send(':x: I need the permissions to join and speak in your voice channel!');
	};          
          
      if (message.member.voice.channel) {
        message.member.voice.channel.join()
          .then(connection => {
            message.channel.send(':musical_note: Radio started playing!');
            connection.play(`http://stream.funradio.sk:8000/fun128.mp3`);
          })
          .catch(console.log);
      } else {
        message.channel.send(':x: You must be in the voice channel');
      }
          return;
				}    
    if(prt.toLowerCase() === '3'){
        var VC = message.member.voice.channel;
	        if (!VC)
            return message.channel.send(":x: You must be in the voice channel")
	var permissions = VC.permissionsFor(message.client.user);
	if (!permissions.has('CONNECT') || !permissions.has('SPEAK')) {
		return message.channel.send(':x: I need the permissions to join and speak in your voice channel!');
	};          
          
      if (message.member.voice.channel) {
        message.member.voice.channel.join()
          .then(connection => {
            message.channel.send(':musical_note: Radio started playing!');
            connection.play(`https://21323.live.streamtheworld.com/HITRADIO_ORION_128.mp3`);
          })
          .catch(console.log);
      } else {
        message.channel.send(':x: You must be in the voice channel');
      }
          return;
				}     
    if(prt.toLowerCase() === '4'){
        var VC = message.member.voice.channel;
	        if (!VC)
            return message.channel.send(":x: You must be in the voice channel")
	var permissions = VC.permissionsFor(message.client.user);
	if (!permissions.has('CONNECT') || !permissions.has('SPEAK')) {
		return message.channel.send(':x: I need the permissions to join and speak in your voice channel!');
	};          
          
      if (message.member.voice.channel) {
        message.member.voice.channel.join()
          .then(connection => {
            message.channel.send(':musical_note: Radio started playing!');
            connection.play(`http://icecast7.play.cz/relax128.mp3`);
          })
          .catch(console.log);
      } else {
        message.channel.send(':x: You must be in the voice channel');
      }
          return;
				}  
    if(prt.toLowerCase() === '5'){
        var VC = message.member.voice.channel;
	        if (!VC)
            return message.channel.send(":x: You must be in the voice channel")
	var permissions = VC.permissionsFor(message.client.user);
	if (!permissions.has('CONNECT') || !permissions.has('SPEAK')) {
		return message.channel.send(':x: I need the permissions to join and speak in your voice channel!');
	};          
          
      if (message.member.voice.channel) {
        message.member.voice.channel.join()
          .then(connection => {
            message.channel.send(':musical_note: Radio started playing!');
            connection.play(`https://22323.live.streamtheworld.com/FAJN_RADIO_128.mp3`);
          })
          .catch(console.log);
      } else {
        message.channel.send(':x: You must be in the voice channel');
      }
          return;
				}     
    if(prt.toLowerCase() === '6'){
        var VC = message.member.voice.channel;
	        if (!VC)
            return message.channel.send(":x: You must be in the voice channel")
	var permissions = VC.permissionsFor(message.client.user);
	if (!permissions.has('CONNECT') || !permissions.has('SPEAK')) {
		return message.channel.send(':x: I need the permissions to join and speak in your voice channel!');
	};          
          
      if (message.member.voice.channel) {
        message.member.voice.channel.join()
          .then(connection => {
            message.channel.send(':musical_note: Radio started playing!');
            connection.play(`https://stream.expres.sk/128.mp3?aw_0_req.gdpr=true&listenerid=11159904647ace7133a5b52763cfabe7&awparams=companionAds%3Atrue&aw_0_1st.version=1.1.7%3Ahtml5&aw_0_1st.playerid=expresmedia_web_player&aw_0_1st.skey=1587916816`);
          })
          .catch(console.log);
      } else {
        message.channel.send(':x: You must be in the voice channel');
      }
          return;
				}      
      if(prt.toLowerCase() === '7'){
        var VC = message.member.voice.channel;
	        if (!VC)
            return message.channel.send(":x: You must be in the voice channel")
	var permissions = VC.permissionsFor(message.client.user);
	if (!permissions.has('CONNECT') || !permissions.has('SPEAK')) {
		return message.channel.send(':x: I need the permissions to join and speak in your voice channel!');
	};          
          
      if (message.member.voice.channel) {
        message.member.voice.channel.join()
          .then(connection => {
            message.channel.send(':musical_note: Radio started playing!');
            connection.play(`https://ice5.abradio.cz/hitvysocina128.mp3`);
          })
          .catch(console.log);
      } else {
        message.channel.send(':x: You must be in the voice channel');
      }
          return;
				}          
			} else{
				message.channel.send("", {
					embed: {
						color: 12320855,
						description: "\n" +
						"`radio 1`: Kiss Radio\n\n"+
						"`radio 2`: Fun Radio\n\n"+
						"`radio 3`: HitRádio Orion\n\n" +
						"`radio 4`: Rádio Relax\n\n" +
            "`radio 5`: Fajn Radio\n\n"  +
            "`radio 6`: Rádio Express\n\n" +
            "`radio 7`: HitRádio Vysočina\n\n" 
					}
				});
			}
  	}
      
    }}*/