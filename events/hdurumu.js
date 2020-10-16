const Discord = require('discord.js');

exports.run = (client, message, args) => {
      let konum = args.slice(0).join(' ');
   if (konum.length < 1) return message.reply('Yaşadığın Şehri Yaz.');
    const embed = new Discord.RichEmbed()
        .setAuthor(`${client.user.username} `, client.user.avatarURL)
        .setColor("RANDOM")
        .setTitle('Hava Durumu')
        .setImage(`http://wttr.in/${konum}_0tqp_lang=tr.png`)
        .setFooter(`${message.author.username} Tarafından İstendi `, message.author.avatarURL)
        .setTimestamp()
    return message.channel.sendEmbed(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'havadurumu',
  description: '',
  usage: ''
};
//Made by Expert
   