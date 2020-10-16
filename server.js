const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');
const db = require("quick.db");
const snekfetch = require('snekfetch');
var Jimp = require('jimp');
require('./util/eventLoader')(client);

var prefix = ayarlar.prefix;

///// 7/24 Başlangıç/////

const express = require('express');

const app = express();

const http = require('http');

    app.get("/", (request, response) => {

    client.channels.get("765868768257507328").send(`Tebrikler, Bot başarıyla pinglendi!`);

    response.sendStatus(200);

    });

    app.listen(process.env.PORT);

    setInterval(() => {

    http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);

    }, 280000);
///// 7/24 Bitiş/////


///// Komut yükleme başlangıç////////

const log = message => {
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
if (err) console.error(err);
files.forEach(f => {
let props = require(`./komutlar/${f}`);
client.commands.set(props.help.name, props);
props.conf.aliases.forEach(alias => {
client.aliases.set(alias, props.help.name);
});
});
});

client.reload = command => {
return new Promise((resolve, reject) => {
try {
delete require.cache[require.resolve(`./komutlar/${command}`)];
let cmd = require(`./komutlar/${command}`);
client.commands.delete(command);
client.aliases.forEach((cmd, alias) => {
if (cmd === command) client.aliases.delete(alias);
});
client.commands.set(command, cmd);
cmd.conf.aliases.forEach(alias => {
client.aliases.set(alias, cmd.help.name);
});
resolve();
} catch (e){
reject(e);
}
});
};

client.load = command => {
return new Promise((resolve, reject) => {
try {
let cmd = require(`./komutlar/${command}`);
client.commands.set(command, cmd);
cmd.conf.aliases.forEach(alias => {
client.aliases.set(alias, cmd.help.name);
});
resolve();
} catch (e){
reject(e);
}
});
};

client.unload = command => {
return new Promise((resolve, reject) => {
try {
delete require.cache[require.resolve(`./komutlar/${command}`)];
let cmd = require(`./komutlar/${command}`);
client.commands.delete(command);
client.aliases.forEach((cmd, alias) => {
if (cmd === command) client.aliases.delete(alias);
});
resolve();
} catch (e){
reject(e);
}
});
};



client.elevation = message => {
if(!message.guild) {
	return; }
let permlvl = 0;
if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
if (message.author.id === ayarlar.sahip) permlvl = 4;
return permlvl;
};

client.login(ayarlar.token);

///Komut yükleme bitiş////// 


///////Cevaplı mesajlar sa-as gibi başlanıç/////

client.on('message', async msg => {
if (msg.content.toLowerCase() === 'sa') { 
await msg.react('A')
msg.react('S')
msg.reply('Aleykümselam Hoşgeldin!')
} 
});

///////Cevaplı mesajlar sa-as gibi bitiş/////


//Modlog kardşm başlangıç/////

client.on("messageDelete", async message => {
  
  if (message.author.bot) return;
  
  var user = message.author;
  
  var kanal = await db.fetch(`modlogK_${message.guild.id}`)
  if (!kanal) return;
var kanal2 = message.guild.channels.find('name', kanal)  

  const embed = new Discord.RichEmbed()
  .setColor("AEED13")
  .setAuthor(`Bir Mesaj Silindi!`, message.author.avatarURL)
  .addField("Kullanıcı Tag", message.author.tag, true)
  .addField("ID", message.author.id, true)
  .addField("Silinen Mesaj", "```" + message.content + "```")
  .setThumbnail(message.author.avatarURL)
  kanal2.send(embed);
  
});

client.on("messageUpdate", async (oldMsg, newMsg) => {
  
  if (oldMsg.author.bot) return;
  
  var user = oldMsg.author;
  
  var kanal = await db.fetch(`modlogK_${oldMsg.guild.id}`)
  if (!kanal) return;
var kanal2 = oldMsg.guild.channels.find('name', kanal) 
  
  const embed = new Discord.RichEmbed()
  .setColor("AEED13")
  .setAuthor(`Bir Mesaj Düzenlendi!`, oldMsg.author.avatarURL)
  .addField("Kullanıcı Tag", oldMsg.author.tag, true)
  .addField("ID", oldMsg.author.id, true)
  .addField("Eski Mesaj", "```" + oldMsg.content + "```")
  .addField("Yeni Mesaj", "```" + newMsg.content + "```")
  .setThumbnail(oldMsg.author.avatarURL)
  kanal2.send(embed);
  
});

client.on("roleCreate", async role => {
  
  var kanal = await db.fetch(`modlogK_${role.guild.id}`)
  if (!kanal) return;
var kanal2 = role.guild.channels.find('name', kanal)  

  const embed = new Discord.RichEmbed()
  .setColor("AEED13")
  .setAuthor(`Bir Rol Oluşturuldu!`, role.guild.iconURL)
  .addField("Rol", `\`${role.name}\``, true)
  .addField("Rol Rengi Kodu", `${role.hexColor}`, true)
  kanal2.send(embed);
  
});

client.on("roleDelete", async role => {
  
  var kanal = await db.fetch(`modlogK_${role.guild.id}`)
  if (!kanal) return;
var kanal2 = role.guild.channels.find('name', kanal)    

  const embed = new Discord.RichEmbed()
  .setColor("AEED13")
  .setAuthor(`Bir Rol Kaldırıldı!`, role.guild.iconURL)
  .addField("Rol", `\`${role.name}\``, true)
  .addField("Rol Rengi Kodu", `${role.hexColor}`, true)
  kanal2.send(embed);
  
});

client.on("roleUpdate", async role => {
  
  if (!log[role.guild.id]) return;
  
 var kanal = await db.fetch(`modlogK_${role.guild.id}`)
  if (!kanal) return;
var kanal2 = role.guild.channels.find('name', kanal) 
  
  const embed = new Discord.RichEmbed()
  .setColor("AEED13")
  .setAuthor(`Bir Rol Güncellendi!`, role.guild.iconURL)
  .addField("Rol", `\`${role.name}\``, true)
  .addField("Rol Rengi Kodu", `${role.hexColor}`, true)
  kanal2.send(embed);
  
});

client.on('voiceStateUpdate', async (oldMember, newMember) => {
  
  
  
  var kanal = await db.fetch(`modlogK_${oldMember.guild.id}`)
  if (!kanal) return;
var kanal2 = oldMember.guild.channels.find('name', kanal) 
  
  let newUserChannel = newMember.voiceChannel
  let oldUserChannel = oldMember.voiceChannel

  if(oldUserChannel === undefined && newUserChannel !== undefined) {

    const embed = new Discord.RichEmbed()
    .setColor("AEED13")
    .setDescription(`**${newMember.user.tag}** adlı kullanıcı \`${newUserChannel.name}\` isimli sesli kanala giriş yaptı!`)
    kanal2.send(embed);
    
  } else if(newUserChannel === undefined){

    const embed = new Discord.RichEmbed()
    .setColor("AEED13")
    .setDescription(`**${newMember.user.tag}** adlı kullanıcı bir sesli kanaldan çıkış yaptı!`)
    kanal2.send(embed);
    
  }
  
  client.on('channelCreate', async (channel,member) => {
    var kanal = await db.fetch(`modlogK_${member.guild.id}`)
    const hgK = member.guild.channels.find('name', kanal) 
    if (!hgK) return;
        if (!channel.guild) return;
            if (channel.type === "text") {
                var embed = new Discord.RichEmbed()
                .setColor("AEED13")
                .setAuthor(channel.guild.name, channel.guild.iconURL)
                .setDescription(`<#${channel.id}> kanalı oluşturuldu. _(metin kanalı)_`)
                .setFooter(`ID: ${channel.id}`)
                embed.send(embed);
            };
            if (channel.type === "voice") {
                var embed = new Discord.RichEmbed()
                .setColor("AEED13")
                .setAuthor(channel.guild.name, channel.guild.iconURL)
                .setDescription(`${channel.name} kanalı oluşturuldu. _(sesli kanal)_`)
                .setFooter(`ID: ${channel.id}`)
                hgK.send({embed});
            }
        
    })
        
    client.on('channelDelete', async channel => {
            const fs = require('fs');
        var kanal = await db.fetch(`modlogK_${channel.guild.id}`)
  
        const hgK = channel.guild.channels.find('name', kanal) 
        if (!hgK) return;
            if (channel.type === "text") {
                let embed = new Discord.RichEmbed()
                .setColor("AEED13")
                .setAuthor(channel.guild.name, channel.guild.iconURL)
                .setDescription(`${channel.name} kanalı silindi. _(metin kanalı)_`)
                .setFooter(`ID: ${channel.id}`)
                hgK.send({embed});
            };
            if (channel.type === "voice") {
                let embed = new Discord.RichEmbed()
                .setColor("AEED13")
                .setAuthor(channel.guild.name, channel.guild.iconURL)
                .setDescription(`${channel.name} kanalı silindi. _(sesli kanal)_`)
                .setFooter(`ID: ${channel.id}`)
                hgK.send({embed});
            }
        
    });
  
});

///////Modlog bitiş/////


client.on("guildMemberAdd", async member => {
        let sayac = JSON.parse(fs.readFileSync("./autorole.json", "utf8"));
  let otorole =  JSON.parse(fs.readFileSync("./autorole.json", "utf8"));
      let arole = otorole[member.guild.id].sayi
  let giriscikis = JSON.parse(fs.readFileSync("./autorole.json", "utf8"));  
  let embed = new Discord.RichEmbed()
    .setTitle('Otorol Sistemi')
    .setDescription(`:loudspeaker: :inbox_tray:  @${member.user.tag}'a Otorol Verildi `)
.setColor("GREEN")
    .setFooter("XiR", client.user.avatarURL);

  if (!giriscikis[member.guild.id].kanal) {
    return;
  }

  try {
    let giriscikiskanalID = giriscikis[member.guild.id].kanal;
    let giriscikiskanali = client.guilds.get(member.guild.id).channels.get(giriscikiskanalID);
    giriscikiskanali.send(`:loudspeaker: :white_check_mark: Hoşgeldin **${member.user.tag}** Rolün Başarıyla Verildi.`);
  } catch (e) { // eğer hata olursa bu hatayı öğrenmek için hatayı konsola gönderelim.
    return console.log(e)
  }

});
//Kullanıcı sunucudan ayrıldığında ayarlanan kanala mesaj gönderelim.
client.on("guildMemberAdd", async (member) => {
      let autorole =  JSON.parse(fs.readFileSync("./autorole.json", "utf8"));
      let role = autorole[member.guild.id].sayi

      member.addRole(role)




});
//XiR


//Capctha



client.on("guildMemberAdd", async member => {

let zorluk = await db.fetch(`captchazorluk.${member.guild.id}`)  
if(!zorluk) return
let user = client.users.get(member.id)
if(user.bot) return
  
 let kanal = await db.fetch(`captchaKanal.${member.guild.id}`)   
let rol = await db.fetch(`captcharol.${member.guild.id}`)  

  
let kolay = ["https://resimhub.com/1/jWqXwa.png", "https://resimhub.com/1/9WrXxZ.png","https://resimhub.com/1/zaJlJG.png",
             "https://resimhub.com/1/AW0QdG.png", "https://resimhub.com/1/LGNJRG.png","https://resimhub.com/1/LGNJRG.png",
             "https://resimhub.com/1/Da8y8W.png","https://resimhub.com/1/pazXqG.png"
            ]


let orta = ["https://resimhub.com/1/zaJj9a.png",
  "https://resimhub.com/1/AW0j3Z.png",
            "https://resimhub.com/1/4Gvdna.png", "https://resimhub.com/1/pZPDJZ.png", "https://resimhub.com/1/EW3p9G.png", "https://resimhub.com/1/bW4xXW.png", 
            "https://resimhub.com/1/MW2Ela.png","https://resimhub.com/1/wGnXma.png","https://resimhub.com/1/LGA82W.png",
            "https://resimhub.com/1/dGXBJa.png","https://resimhub.com/1/daeXkZ.png"
           ]


let zor = ["https://resimhub.com/1/7GlXqG.png","https://resimhub.com/1/va7R5Z.png", "https://resimhub.com/1/AZOQ6W.png","https://resimhub.com/1/6GmXEW.png","https://resimhub.com/1/qGLNEa.png","https://resimhub.com/1/BaY10a.png","https://resimhub.com/1/pGjX9a.png",
           "https://resimhub.com/1/jWdXYW.png","https://resimhub.com/1/nZE4PG.png","https://resimhub.com/1/9WrXlZ.png","https://resimhub.com/1/jWqX5a.png","https://resimhub.com/1/bW4xLW.png","https://resimhub.com/1/EW3p5G.png","https://resimhub.com/1/pZPDnZ.png",
           "https://resimhub.com/1/4GvdPa.png","https://resimhub.com/1/va7RoZ.png"
          ]

 let s;
if(zorluk === "kolay") s = kolay  
if(zorluk === "orta") s = orta
if(zorluk === "zor") s = zor 
  
   let sonuc = (s[Math.floor(Math.random() * s.length)])
 let filtre = mes => mes.author.id === user.id;   
let beklenen;
  //KOLAY CAPTCHA
if(sonuc === "https://resimhub.com/1/LGNJRG.png") beklenen = "qdb"   
if(sonuc === "https://resimhub.com/1/Da8y8W.png") beklenen = "srd"   
if(sonuc === "https://resimhub.com/1/LGNJRG.png") beklenen = "koa"  
if(sonuc === "https://resimhub.com/1/pazXqG.png") beklenen = "cuq"   
if(sonuc === "https://resimhub.com/1/AW0QdG.png") beklenen = "cvi"   
if(sonuc === "https://resimhub.com/1/zaJlJG.png") beklenen = "sub"   
if(sonuc === "https://resimhub.com/1/9WrXxZ.png") beklenen = "rvs"   
if(sonuc === "https://resimhub.com/1/jWqXwa.png") beklenen = "dwi"   

  //ORTA CAPTCHA
  
  
    if(sonuc === "https://resimhub.com/1/zaJj9a.png") beklenen = "xnp"   


  if(sonuc === "https://resimhub.com/1/AW0j3Z.png") beklenen = "xnp"   
if(sonuc === "https://resimhub.com/1/4Gvdna.png") beklenen = "yluof"   
if(sonuc === "https://resimhub.com/1/pZPDJZ.png") beklenen = "tuewa"   
if(sonuc === "https://resimhub.com/1/EW3p9G.png") beklenen = "saptn"   
if(sonuc === "https://resimhub.com/1/bW4xXW.png") beklenen = "giegu"   
if(sonuc === "https://resimhub.com/1/MW2Ela.png") beklenen = "ygse"   
if(sonuc === "https://resimhub.com/1/wGnXma.png") beklenen = "ncmg"   
if(sonuc === "https://resimhub.com/1/LGA82W.png") beklenen = "aadf"   
if(sonuc === "https://resimhub.com/1/dGXBJa.png") beklenen = "wwwy"   
if(sonuc === "https://resimhub.com/1/daeXkZ.png") beklenen = "osoft"   
  
  
  //ZOR CAPTCHA
  if(sonuc === "https://resimhub.com/1/7GlXqG.png") beklenen = "hvoyoohd"   
  if(sonuc === "https://resimhub.com/1/va7R5Z.png") beklenen = "jpjphytn"   
if(sonuc === "https://resimhub.com/1/AZOQ6W.png") beklenen = "xjxwh"   
if(sonuc === "https://resimhub.com/1/qGLNEa.png") beklenen = "wwuljyndın"   
if(sonuc === "https://resimhub.com/1/6GmXEW.png") beklenen = "ıxdbksoo"   
if(sonuc === "https://resimhub.com/1/BaY10a.png") beklenen = "ccggvxssz"   
if(sonuc === "https://resimhub.com/1/pGjX9a.png") beklenen = "svgngn"   
if(sonuc === "https://resimhub.com/1/nZE4PG.png") beklenen = "zngangzd"   
if(sonuc === "https://resimhub.com/1/jWdXYW.png") beklenen = "gmmcsax"   
if(sonuc === "https://resimhub.com/1/9WrXlZ.png") beklenen = "saffoo"   
if(sonuc === "https://resimhub.com/1/jWqX5a.png") beklenen = "fasassf"   
if(sonuc === "https://resimhub.com/1/EW3p5G.png") beklenen = "rcttyq"   
if(sonuc === "https://resimhub.com/1/bW4xLW.png") beklenen = "qcmty"   
if(sonuc === "https://resimhub.com/1/pZPDnZ.png") beklenen = "yevunqy"   
if(sonuc === "https://resimhub.com/1/4GvdPa.png") beklenen = "nmnnbqwb"   
if(sonuc === "https://resimhub.com/1/va7RoZ.png") beklenen = "trtwrcnrv"    
  
let embed = new Discord.RichEmbed()   
.setTitle(member.guild.name + ' Sunucusuna Hoşgeldin!')
.setDescription(`Lütfen captcha kodunu buraya gönderin.

**Merhaba!** Sunucuya girmeden önce bir captcha tamamlamanız gerekir.

**Neden?**
Bu, sunucuyu karşı korumak için yapılır!
Self botlara karşı önlem olarak kullanılabilir.

** Captcha'nız:**.`)
.setImage(sonuc)
.setTimestamp()
.setColor('BLUE')      
user.send(embed).then(s => {
       
s.channel.awaitMessages(filtre, {
          max: 1,
        })
       
  .then(collected => {
 if(collected.first().content === beklenen) {
let embed = new Discord.RichEmbed()   
.setTitle('Başarılı!')
.setDescription('**'+member.guild.name+'** Sunucusuna başarıyla giriş yaptınız.')
.setThumbnail(user.avatarURL)
.setTimestamp()
.setColor('GREEN')    
 user.send(embed)
member.guild.members.get(user.id).addRole(rol)
        let kayıt1 = new Discord.RichEmbed()   
.setTitle('Kayıt Başarılı!')
.setDescription('**'+user.tag+'** Adlı kullanıcı başarıyla kayıt oldu.')
.setThumbnail(user.avatarURL)
.setTimestamp()
.setColor('GREEN')   
         if (!member.guild.channels.get(kanal)) return console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}]  Kullandı`)
    else member.guild.channels.get(kanal).send(kayıt1)  

 return
 } else {
   
user.send('**Deneme başarısız oldu.** Kalan 2 denemeniz var')   
           let kayıt = new Discord.RichEmbed()   
                         .setTitle('Deneme Başarısız!')
.setDescription(''+user.tag+' Kodu yanlış girdi! **1/3** Denemesi kaldı!')
.setThumbnail(user.avatarURL)
.setTimestamp()
.setColor('RED')   
             if (!member.guild.channels.get(kanal)) return console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}]  Kullandı`)
    else member.guild.channels.get(kanal).send(kayıt)  

s.channel.awaitMessages(filtre, {
          max: 1,
        })
   .then(collected => {
 if(collected.first().content === beklenen) {
let embed = new Discord.RichEmbed()   
.setTitle('Teşekkürler!')
.setDescription('**'+member.guild.name+'** Sunucusuna başarıyla giriş yaptınız.')
.setThumbnail(user.avatarURL)
.setTimestamp()
.setColor('GREEN')    
 user.send(embed)
member.guild.members.get(user.id).addRole(rol)
        let kayıt1 = new Discord.RichEmbed()   
.setTitle('Kayıt Başarılı!')
.setDescription('**'+user.tag+'** Adlı kullanıcı başarıyla kayıt oldu.')
.setThumbnail(user.avatarURL)
.setTimestamp()
.setColor('GREEN')   
         if (!member.guild.channels.get(kanal)) return console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}]  Kullandı`)
    else member.guild.channels.get(kanal).send(kayıt1)  

 return
   
 } else {
user.send('**Deneme başarısız oldu.** Kalan 1 denemeniz var')
              let kayıt = new Discord.RichEmbed()  
              .setTitle('Deneme Başarısız!')
.setDescription(''+user.tag+' Kodu yanlış girdi! **2/3** Denemesi kaldı!')
.setThumbnail(user.avatarURL)
.setTimestamp()
.setColor('RED')   
             if (!member.guild.channels.get(kanal)) return console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}]  Kullandı`)
    else member.guild.channels.get(kanal).send(kayıt)  

s.channel.awaitMessages(filtre, {
          max: 1,
        })
   .then(collected => {
   if(collected.first().content === beklenen) {
let embed = new Discord.RichEmbed()   
.setTitle('Teşekkürler!')
.setDescription('**'+member.guild.name+'** Sunucusuna başarıyla giriş yaptınız.')
.setThumbnail(user.avatarURL)
.setTimestamp()
.setColor('GREEN')    
 user.send(embed)
member.guild.members.get(user.id).addRole(rol)
     let kayıt1 = new Discord.RichEmbed()   
.setTitle('Kayıt Başarılı!')
.setDescription('**'+user.tag+'** Adlı kullanıcı başarıyla kayıt oldu.')
.setThumbnail(user.avatarURL)
.setTimestamp()
.setColor('GREEN')   
         if (!member.guild.channels.get(kanal)) return console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}]  Kullandı`)
    else member.guild.channels.get(kanal).send(kayıt1)  
     return
   
 } else {
let embed = new Discord.RichEmbed()   
.setTitle('Bu Kötü!')
.setDescription('Maalesef 3 hakkınızı da yanlış girdiniz.Sunucuya giriş yapmanız engellendi.')
.setThumbnail(user.avatarURL)
.setTimestamp()
.setColor('RED')    
 user.send(embed)  
        let kayıt = new Discord.RichEmbed()   
.setTitle('Kayıt Başarısız!')
.setDescription('**'+user.tag+'** Kodu yanlış girdi! **3/3** Kayıt Başarısız!')
.setThumbnail(user.avatarURL)
.setTimestamp()
.setColor('RED')   
             if (!member.guild.channels.get(kanal)) return console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}]  Kullandı`)
    else member.guild.channels.get(kanal).send(kayıt)  
   setTimeout(function() {
   member.kick()
  }, 2500)
  }
})
 }
})
   
 
 }  
    
  })
  

  
})  
   
   
}) 

