const Discord = require('discord.js');
const loglar = require('../ayarlar.json');

var prefix = loglar.prefix;

exports.run = async (client, message, params, args) => {

  const yardım = new Discord.RichEmbed()
  .setColor(0x36393E)
      .setAuthor(`Kullanıcı Komutları`, client.user.avatarURL)
      .setThumbnail(client.user.avatarURL)
      .addField(`📜 | ${loglar.prefix} öneri`, `Öneri yaparsınız.`)
      .setDescription('')
      .addField(`📜 | ${loglar.prefix} hesapla`, `Hesaplarsınız.`)
      .setDescription('')
      .addField(`📜 | ${loglar.prefix} emoji`, `Emojiyazı yaparsınız.`)
      .setDescription('')
      .addField(`📜 | ${loglar.prefix} avatar`, `Avatarınızı görürsünüz.`)
      .setDescription('')
      .addField(`📜 | ${loglar.prefix} bilgilerim`, `Bilgilerinizi görürsünüz.`)
  return message.channel.sendEmbed(yardım);

};

  
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'kullanıcı',
    description: 'yardım',
    usage: 'yardım'
  };