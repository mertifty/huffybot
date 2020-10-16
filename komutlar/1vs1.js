const Discord = require('discord.js');


exports.run = (client, message, args) => {
    if (!message.guild) {
      return message.channel.send(new Discord.RichEmbed().setColor('RANDOM').setTitle('Eval;').setDescription(message.author.username + ', bu komutu direkt mesajda kullanamazsın.').setFooter('FrezzyBot', client.user.avatarURL).setTimestamp()); }
    let user = message.mentions.users.first();
    if (message.mentions.users.size < 2) return message.channel.send(new Discord.RichEmbed().setColor('RANDOM').setTitle('5v5;').setDescription(message.author.tag + ', kullanım: /1vs1 <@kullanıcı> <@kullanıcı> .').setFooter('Sessiz Tayfa', client.user.avatarURL).setTimestamp());
    var sans = ["10'a","1'e","20'ye","30'a"]
    var sonuc = sans[Math.floor((Math.random() * sans.length))];
      message.channel.send(new Discord.RichEmbed().setColor('RANDOM').setTitle('1vs1').setDescription('Savaş başladı!').setFooter('Rahatsızların  Savaşı yapılıyor.', client.user.avatarURL).setTimestamp())
      .then(nmsg => nmsg.edit(new Discord.RichEmbed().setColor('RANDOM').setTitle('1vs1').setDescription('Savaşılıyor Pat Küt.').setFooter('HuffyBot', client.user.avatarURL).setTimestamp()))
      .then(nmsg => nmsg.edit(new Discord.RichEmbed().setColor('RANDOM').setTitle('1vs1').setDescription('Savaşılıyor Pat Küp.').setFooter('HuffyBot', client.user.avatarURL).setTimestamp()))
      .then(nmsg => nmsg.edit(new Discord.RichEmbed().setColor('RANDOM').setTitle('1vs1').setDescription('Savaşılıyor Pat küt.').setFooter('HuffyBot', client.user.avatarURL).setTimestamp()))
      .then(nmsg => nmsg.edit(new Discord.RichEmbed().setColor('RANDOM').setTitle('1vs1').setDescription('Savaş Sonuçlanıyor.').setFooter('HuffyBot', client.user.avatarURL).setTimestamp()))
      .then(nmsg => nmsg.edit(new Discord.RichEmbed().setColor('RANDOM').setTitle('1vs1').setDescription('Savaş bitti!').setFooter('HuffyBOT', client.user.avatarURL).setTimestamp()))
      .then(nmsg => nmsg.edit(new Discord.RichEmbed().setColor('RANDOM').setTitle('1vs1').setDescription('Savaşın Galibi: **' + user.tag+'** Helal olsun sana Ne Vurdun Be Adımın Canını 100 den **'+ sonuc +'** Kadar Düşürdün Ve Adam Pes Etti.').setImage("https://media1.giphy.com/media/6fReqjdbFYXJu/giphy.gif").setFooter('Sessiz Tayfa', client.user.avatarURL).setTimestamp()))
        };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['1vs1', 'kapış', '1v1'],
  permLevel: 0
};

exports.help = {
  name: '1vs1',
  description: 'Seçtiğiniz 2 kişiyi savaştırırsınız.',
  usage: '1vs1 <@kullanıcı> <@kullanıcı>'
};