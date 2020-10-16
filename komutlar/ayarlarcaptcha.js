const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async(client, message, args) => { 
  
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Yönetici yetkisine sahip olmalısınız!");
  

let zorluk = await db.fetch(`captchazorluk.${message.guild.id}`) 
let rol = await db.fetch(`captcharol.${message.guild.id}`)
let dil = await db.fetch(`captchadil.${message.guild.id}`)   
let kanal = await db.fetch(`captchaKanal.${message.guild.id}`)   

if(!zorluk) return message.reply('Sistem devre dışı! Lütfen Ayarlayınız!')


   let adım3 = new Discord.RichEmbed()
.setTitle('Sistem Ayarları!')
.addBlankField()
.addField('Sistem', 'Rol **»** <@&'+rol+'> \n\n Zorluk Seviyesi *kanal*»** `'+zorluk+'` \n\n Log Kanalı **»** `'+kanal+'` \n\n Sistem Dili **»** `'+dil+'`')
.setTimestamp()
.setColor('BLUE')      
message.channel.send(adım3)
  
  
  
  return  

 


  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['captcha-ayarlar'], 
  permLevel: 0
};

exports.help = {
  name: 'captcha-settings',
  description: 'taslak', 
  usage: 'captcha-settings'
};
