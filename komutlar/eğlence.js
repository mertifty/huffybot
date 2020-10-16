const Discord = require('discord.js');
const loglar = require('../ayarlar.json');

var prefix = loglar.prefix;

exports.run = async (client, message, params, args) => {

  const yardım = new Discord.RichEmbed()
  .setColor(0x36393E)
      .setAuthor(`Eğlence Komutları`, client.user.avatarURL)
      .setThumbnail(client.user.avatarURL)
      .addField(`⚠️ | ${loglar.prefix} çayiç`, `Çay içersiniz.` )
      .setDescription('')
      .addField(`⚠️ | ${loglar.prefix} espri`, `Espri yaparsınız.` )
      .setDescription('')
      .addField(`⚠️ | ${loglar.prefix} balıktut`, `Balık tutarsınız.` )
      .setDescription('')
  .addField(`📏 | ${loglar.prefix} matematik`, `Matematik işlemi yaparsınız.`)
      .setDescription('')
      .addField(`✉️ | ${loglar.prefix} davet`, `Davet linki alırsınız`)
      .setDescription('')
      .addField(`☁️ | ${loglar.prefix} havadurumu`, `Hava durumunu görürsünüz.`)
      .setDescription('')
  return message.channel.sendEmbed(yardım);

};

  
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'eğlence',
    description: 'yardım',
    usage: 'yardım'
  };