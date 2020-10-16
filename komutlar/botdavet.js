const Discord = require('discord.js');

exports.run = (client, message, params) => {
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    message.channel.send({embed: {
            color: 0xD97634,
            author: {
              name: "Davet Menüsü",
              icon_url: "https://cdn.discordapp.com/avatars/495214808484806657/37b2db3f7519e024d25521ac272f7a0d.png?size=2048"
            },
                "thumbnail": {
                 "url": "https://cdn.discordapp.com/avatars/495214808484806657/37b2db3f7519e024d25521ac272f7a0d.png?size=2048"
            },
            title: "",
            description: "[Davet Linkim](https://discordapp.com/oauth2/authorize?client_id=619858427438432306&permissions=0&redirect_uri=https%3A%2F%2Fdiscordapp.com%2Foauth2%2Fauthorize%3Fclient_id%3D619858427438432306%26scope%3Dbot%26permissions%3D1032&response_type=code&scope=identify%20email%20bot%20applications.builds.read) \n[Destek Sunucusu](https://discord.gg/F43C6qc)",
            fields: [
            ],
            timestamp: new Date(),
            footer: {
              icon_url: "",
              text: "HuffyBOT"
            }
          }
        });  
        message.react("pencil")
}};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['d', 'link', 'linkler'],
  permLevel: 0
};

exports.help = {
  name: 'botdavet',
  description: 'Botun Davet Linkini Gösterir',
  usage: 'botdavet'
};