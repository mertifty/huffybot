const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
    
     let help = new Discord.RichEmbed()
  .setTitle('Captcha Yardım Menüsü')
  .setAuthor(message.member.user.username, message.author.avatarURL)
  .addField('__KOMUTLAR__', "` .captcha ` - Captcha sistemi bu komut ile aktifleştirebilirsiniz. \n\n` .captcha-off ` - Captcha sistemi bu komut ile devre dışı bırakabilirsiniz. \n\n` .captcha-settings ` - Bot sunucunuzdaki aktif captcha ayarlarını gösterir.")
  .setTimestamp()
  .setThumbnail(message.author.avatarURL)
  .setColor('RANDOM')        
message.channel.send(help)
  
  
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['captcha​-help','yardım-captcha'], 
  permLevel: 0
};

exports.help = {
  name: 'captcha',
  description: 'taslak', 
  usage: 'captcha-help'
};

