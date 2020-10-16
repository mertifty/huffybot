const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async(client, message, args) => { 
  
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Yönetici Yetkisine Sahip Olmalısınız! - You Must Have Administrative Authority");
  
message.channel.send('**en:** Please select installation language. \n\n**tr:** Lütfen kurulacak kurulum dilini seçiniz. \n `tr` **yada** `en` **Yazınız!**')  
  
  let filtre = mes => mes.author.id === message.author.id;    
  message.channel.awaitMessages(filtre, {
          max: 1,
          time: 35000,
          errors: ["time"]
        })
        .then(collected => {

let adım1 = new Discord.RichEmbed()
.setTitle('Adım 1')
.setDescription('İlk önce eğer kullanıcılar kodu doğru bir şekilde bilirse verilecek rolü belirlemen gerekiyor.')
.addBlankField()
.addField('Örnek:', '**@kullanıcı** `/` **685770403146367007 (Rol İD)**')
.addBlankField()
.addField('Devam!', 'Devam etmek için bulunduğunuz kanala yukardaki örnek gibi bir rol belirtin.')
.setTimestamp()
.setURL('https://discord.gg/qYraCqU')
.setColor('RED')      
message.channel.send(adım1).then(l => {
  message.channel.awaitMessages(filtre, {
          max: 1,
          time: 50000,
          errors: ["time"]
        })
        .then(collected => {
let rol = collected.first().mentions.roles.first() || message.guild.roles.get(collected.first().content)
if(!rol) {
  
l.delete()
collected.first().react('❌')  
message.channel.send('Belirttiğiniz rolü sunucuda bulamadım.').then(t => t.delete(10000))
return
}
    let adim = new Discord.RichEmbed()
.setTitle('Adım 2')
.setDescription('Kullanıcı kayıt olunca loga yansıtılacak bir kanal belirlemeniz gerekiyor.')
.addBlankField()
.addField('Örnek:', '**#log** `/` **685770403146367007 (Kanal İD)**')
.addBlankField()
.addField('Devam!', 'Devam etmek için bulunduğunuz kanala yukardaki örnek gibi bir kanal belirtin.')
.setTimestamp()
.setURL('https://discord.gg/qYraCqU')
.setColor('RED')      
message.channel.send(adim).then(l => {
  message.channel.awaitMessages(filtre, {
          max: 1,
          time: 50000,
          errors: ["time"]
        })//EMİRHAN SARAÇ

        .then(collected => {
let kanal = collected.first().mentions.channels.first() || message.guild.channels.get(collected.first().content)
if(!kanal) {
  
l.delete()
collected.first().react('❌')  
message.channel.send('Belirttiğiniz kanalı sunucuda bulamadım.').then(t => t.delete(10000))
return
}
 let adım2 = new Discord.RichEmbed()
.setTitle('Adım 3')
.setDescription('Zorluk seviyesini seçmemiz gerekmektedir.')
.addBlankField()
.addField('Zorluk Seviyeleri:', '» kolay \n » orta \n » zor')
.addBlankField()
.addField('Devam!', 'Devam etmek için bulunduğunuz kanala yukardaki zorluklardan bir tanesini belirtin.')
.setTimestamp()
.setURL('https://discord.gg/qYraCqU')
.setColor('RED')      
message.channel.send(adım2).then(ü => {  

  message.channel.awaitMessages(filtre, {
          max: 1,
          time: 50000,
          errors: ["time"]
        })//EMİRHAN SARAÇ

        .then(collected => {
  let zorluk;
    if(collected.first().content === "kolay") zorluk = 'kolay'
    if(collected.first().content === "orta") zorluk = 'orta'
    if(collected.first().content === "zor") zorluk = 'zor'
if(!zorluk) {
 ü.delete
  message.reply('Geçerli bir kolaylık seviyesi girmediniz.')
return
}
//EMİRHAN SARAÇ

 let adım3 = new Discord.RichEmbed()
.setTitle('Sistem Aktifleştirildi!')
.setDescription('Captcha Sistemini Aktif Ettiniz!')
.addBlankField()
.addField('Sistem', 'Verilecek Rol **»** <@&'+rol.id+'> \n\n Zorluk Derecesi **»** `'+zorluk+'` \n\n Log Kanalı **»** '+kanal+'')
.setTimestamp()
.setURL('https://discord.gg/qYraCqU')
.setColor('BLUE')      
message.channel.send(adım3)
  //EMİRHAN SARAÇ

db.set(`captchazorluk.${message.guild.id}`, zorluk) 
db.set(`captcharol.${message.guild.id}`, rol.id)
db.set(`captchaKanal.${message.guild.id}`, kanal.id)    

  })
})    
       
     
     
     }, 20000)
   
   
      })
  })

  })
  

//EMİRHAN SARAÇ
  
  })
 
  
  };//EMİRHAN SARAÇ

exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'captcha',
  description: 'taslak', 
  usage: 'captcha'
};
