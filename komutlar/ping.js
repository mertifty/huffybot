const Discord = require('discord.js');


exports.run = function(client, message) {

    message.channel.send("Selam Dostum Pingim Bu `" + client.ping + "` ms!");
};

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: ['p'],
  permLevel: 0 
};

exports.help = {
  name: 'ping', 
  description: 'Botun pingini gösterir',
  usage: 'ping'
};