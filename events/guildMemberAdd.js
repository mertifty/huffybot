
const Discord = require("discord.js")
const db = require("quick.db");
const Canvas = require('canvas')
const snekfetch = require('snekfetch');
const request = require('node-superfetch');

module.exports = async member => {
    var randomMsg = [
                    "Sunucuya Hoşgeldin, Arkadaşlarını davet etmeyi unutma kanka!",      
                    ];
    var randomMsg_integer = randomMsg[Math.floor((Math.random() * randomMsg.length))]

  let msj = await db.fetch(`girisM_${member.guild.id}`)
  if (!msj) msj = `{uye}, ${randomMsg_integer}`
  let memberChannel = await db.fetch(`gcc_${member.guild.id}`)
  
  const canvas = Canvas.createCanvas(1280, 720);
  const ctx = canvas.getContext('2d');
  
  const background = await Canvas.loadImage('https://cdn.discordapp.com/attachments/750816789147025449/765163164102426644/20201012_134434.jpg');
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
  
 
   ctx.fillStyle = `#ffffff`;
  ctx.font = `80px "SONGER"`;
  ctx.textAlign = "center";
  ctx.fillText(`${member.user.username.toUpperCase()}`, 620, 320);
 
 let avatarURL = member.user.avatarURL || member.user.defaultAvatarURL
  const { body } = await request.get(avatarURL);
  const avatar = await Canvas.loadImage(body);
  
ctx.beginPath();
	ctx.lineWidth = 0;
  ctx.fill()
	ctx.lineWidth = 0;
	ctx.arc(580 + 55, 55 + 55, 55, 0, 2 * Math.PI, false);
	ctx.clip();
	ctx.drawImage(avatar, 580, 55, 110, 110);
  
  const attachment = new Discord.Attachment(canvas.toBuffer(), 'wdeddede.png');
  member.guild.channels.get(memberChannel).send(attachment)
  member.guild.channels.get(memberChannel).send(msj.replace('{uye}', member).replace('{sunucu}', member.guild.name))
  if (member.user.bot) return member.guild.channels.get(memberChannel).send(`🤖 Bu bir bot, ${member.user.tag}`)
  
}
