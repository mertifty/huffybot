const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
var prefix = ayarlar.prefix;
module.exports.run = async (bot, message, args) => {
  const db = require('quick.db')  
var prefix = 'g?'

            message.channel.send(new Discord.RichEmbed()
             .setDescription(`**${bot.user.username} Bot Commands**\n
**<a:hypesdasdsadadsadsa:766658122370121739> ${ayarlar.prefix} eğlence -** Eğlence Komutlarını Gösterir\n
**<a:developer31:766653693852385310> ${ayarlar.prefix} yetkili -** Yetkili Komutlarını Gösterir.\n
**<a:ayarlardsf:766659501372735488> ${ayarlar.prefix} captcha -** Captcha Komutlarını Gösterir.\n
**<a:star23:766659774666113034> ${ayarlar.prefix} kullanıcı -** Kullanıcı Komutlarını Gösterir.\n
**<a:star23:766659774666113034> ${ayarlar.prefix} ticket-yardım -** Ticket Komutlarını Gösterir.\n

`)
.addField(`Huffy linkler`, "**[Botun Destek Sunucusu](https://discord.gg/w8gMp7Q)**")
                        .setColor('RANDOM')
                        )
}

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 0
};

exports.help = {
 name: 'yardım',
 description: '',
 usage: ''
};                                                                                                                                                                                                                                                                                                          