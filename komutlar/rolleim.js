
const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  var bot = "512292345140609024"
   if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(':warning: | Bu komutu kullanabilmek icin `Yonetici` yetkisine sahip olmalısın!')
   let rol = message.mentions.roles.first() || message.guild.roles.get(args[0]) || message.guild.roles.find(rol => rol.name === args[0]);
  if (!rol) return message.channel.send('**Verecegim rolü etiketlemen gerekir!**')
  
  
   const embed = new Discord.RichEmbed()
     .setDescription(`Herkese ${rol} adl� rol verildi!`)
        .setColor(rol.hexColor)
   
   message.guild.members.forEach(u => {
u.addRole(rol)
})
  message.channel.send(embed)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['toplurolver'],
    permLevel: 0
}

exports.help = {
    name: 'herkeserolver',
    description: 'Se�ili rol� herkese verir.',
    usage: 'herkeserolver @rol'
}