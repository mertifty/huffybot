const Discord = require('discord.js');
const moment = require('moment');
const ms = require('ms')
exports.run = async (client, message) => {
                      if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendEmbed(new Discord.RichEmbed()
         .setDescription(`**:fire: Yeterli yetki, bulunmamakta!**`)
         .setColor(`RED`));   
var time = moment().format('Do MMMM YYYY , hh:mm');
var room;
var title;
var duration;

var filter = m => m.author.id === message.author.id;
 
  
  
      message.channel.send(":eight_pointed_black_star:| **Oylamanın yapılacağı kanalın adını yaz. (Etiketsiz bir şekilde)**").then(msg => {
      message.channel.awaitMessages(filter, {
        max: 1,
        time: 20000,
        errors: ['time']
      }).then(collected => {
        let room = message.guild.channels.find('name' , collected.first().content);
        if(!room) return message.channel.send(':heavy_multiplication_x:| **Böyle bir kanal bulamadım**');
        room = collected.first().content;
        collected.first().delete();

            msg.edit(':eight_pointed_black_star:| **Oylanacak Şeyi Yaz**').then(msg => {
              message.channel.awaitMessages(filter, {
                max: 1,
                time: 20000,
                errors: ['time']
              }).then(collected => {
                title = collected.first().content;
                collected.first().delete();
                msg.delete();
                message.delete();
                 {
                  let giveEmbed = new Discord.RichEmbed()
                  .setColor("GREEN")
                  .setThumbnail(client.user.avatarURL)
                  .setTitle('HuffyBot | Oylama Sistemi')
                  .setDescription(`\n\n**${title}** \n\n\n✅ yada ❌ Emojisine tıklayarak katılabilirsin!`)
                  .setFooter(message.author.username + " Oylamayı Yapan Admin", message.author.avatarURL);
                  message.guild.channels.find("name" , room).send(' :heavy_check_mark: **OYLAMA BAŞLADI** :heavy_check_mark:' , {embed: giveEmbed}).then(m => {
                     let re = m.react('✅');
                     let res = m.react('❌');

                     setTimeout(() => {

                }, ms(duration));
            });
                }
              });
            });
          });
        });
  
  
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['anket'],
  permLevel: 2
};
exports.help = {
  name: 'oylama',
  description: 'Çekiliş mi? Sunucunda güzel şeyler olacak :3',
  usage: 'çekiliş'
};