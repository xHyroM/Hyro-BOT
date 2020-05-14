const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
// BLACKLIST IDS
const arrayOfUsersIds = ['521670421234319370'];

const fetch = require("node-fetch");

module.exports = {
    name: "instagram",
    aliases: ["insta", "ig"],
    category: "info",
    description: "Informácie z instagram účtu",
    usage: "<name>",
    run: async (client, message, args) => {
      
                   for (let i = 0; i < arrayOfUsersIds.length; i++) {
	if (message.author.id === arrayOfUsersIds[i]) return message.channel.send({embed: {
		color: 15158332,
		description: `${message.author.tag} bot vám bol globálne zablokovaný.\n\n**Nastala chyba?** Kontaktuj: 𝙃𝙮𝙧𝙤#8938`,
	}});
};	
      
        const name = args.join(" ");

        if (!name) {
            return message.channel.send("❌ Please write account name!")
        }

        const url = `https://instagram.com/${name}/?__a=1`;
        
        let res; 

        try {
            res = await fetch(url).then(url => url.json());
        } catch (e) {
            return message.channel.send("❌ I couldn't find that account")
        }

        const account = res.graphql.user;

        const embed = new MessageEmbed()
            .setColor("RANDOM")
            .setTitle("IG: " + account.full_name)
            .setURL(`https://instagram.com/${name}`)
            .setThumbnail(account.profile_pic_url_hd)
            .addField("Profile", stripIndents`**📜 - Username:** ${account.username}
            **🍔 - Full Name:** ${account.full_name}
            **🥖 - Description:** ${account.biography.length == 0 ? "none" : account.biography}
            **🌌 - Posts:** ${account.edge_owner_to_timeline_media.count}
            **🌍 - Followers:** ${account.edge_followed_by.count}
            **⚡ - Following:** ${account.edge_follow.count}
            **🚕 - Private account:** ${account.is_private ? "Yes 🔐" : "Nope 🔓"}`)
            .setFooter(message.author.username, message.author.avatarURL())
            .setTimestamp();

        message.channel.send(embed)
      .catch(err => message.reply(`❌ Error: ${err}`)); 
    }
}