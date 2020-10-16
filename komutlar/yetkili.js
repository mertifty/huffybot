const Discord = require('discord.js');
const loglar = require('../ayarlar.json');

var prefix = loglar.prefix;

exports.run = async (client, message, params, args) => {

  const yardım = new Discord.RichEmbed()
  .setColor(0x36393E)
      .setAuthor(`Yetkili Komutları`, client.user.avatarURL)
      .setThumbnail(client.user.avatarURL)
      .addField(`❎ | ${loglar.prefix} ban`, `Birisini sunucudan yasaklar.`)
      .setDescription('')
      .addField(`❎ | ${loglar.prefix} unban`, `Birisinin yasağı varsa kaldırır.`)
      .setDescription('')
      .addField(`❎ | ${loglar.prefix} küfürengel`, `Küfürleri filtreleyip blocklar.`)
      .setDescription('')
      .addField(`❎ | ${loglar.prefix} reklamengel`, `Reklam yapan kişiler reklam yapamaz.`)
      .setDescription('')
      .addField(`❎ | ${loglar.prefix} sil`, `İstediğiniz miktarda mesaj silebilirsiniz.`)
      .setDescription('')
      .addField(`❎ | ${loglar.prefix} mute {isim} {sebep}`, `İstediğiniz kişiyi susturabilirsiniz.`)
      .setDescription('')
      .addField(`❎ | ${loglar.prefix} unmute`, `Susturduğunuz kişinin mutesini açarsınız.`)
      .setDescription('')
      .addField(`❎ | ${loglar.prefix} çekiliş`, `Çekiliş yapabilirsiniz.`)
      .setDescription('')
      .addField(`❎ | ${loglar.prefix} duyuru`, `Sunucuda herkese açık duyuru yaparsınız.`)
      .setDescription('')
      .addField(`❎ | ${loglar.prefix} isim`, `Birisinin ismini değiştirebilirsiniz.`)
      .setDescription('')
      .addField(`❎ | ${loglar.prefix} yaz`, `Bota yazı yazdırırsınız.`)
      .setDescription('')
      .addField(`❎ | ${loglar.prefix} uyarı`, `İstediğiniz üyeye uyarı verebilirsiniz.`)
      .setDescription('')
      .addField(`❎ | ${loglar.prefix} sayaç`, `Sayaç ayarlarsınız.`)
      .setDescription('')
      .addField(`❎ | ${loglar.prefix} rolinfo`, `Rol hakkındaki şeyleri görebilirsiniz.`)
      .setDescription('')
      .addField(`❎ | ${loglar.prefix} reklamtara`, `Reklam taraması yapar.`)
      .setDescription('')
      .addField(`❎ | ${loglar.prefix} herkeserolver`, `Belirlediğiniz rolü herkese verir.`)
      .setDescription('')
      .addField(`❎ | ${loglar.prefix} herkestenrolal`, `Belirlediğiniz rolü herkesten alır.`)
      .setDescription('')
      .addField(`❎ | ${loglar.prefix} mod-log`, `Mod log kanalı ayarlarsınız.`)
      .setDescription('')
      .addField(`❎ | ${loglar.prefix} otorol`, `Otorol ayarlarsınız.`)
      .setDescription('')
      .addField(`❎ | ${loglar.prefix} giriş-çıkış`, `Resimli giriş çıkış ayarlarsınız.`)
  return message.channel.sendEmbed(yardım);

};

  
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'yetkili',
    description: 'yetkili',
    usage: 'yetkili'
  };