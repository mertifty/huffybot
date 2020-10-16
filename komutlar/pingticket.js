const Discord = require('discord.js');
const data = require('quick.db')
const ayarlar = require("../ayarlar.json");

exports.run = async (client, message, args) => {
const prefix = ayarlar.prefix;
  
let ölçüm = await message.channel.send(`Ping.`).then(a => {
setTimeout(async () => {
a.edit(`Ping..`)
setTimeout(async () => {
a.edit(`Ping...`)
setTimeout(async () => {
a.edit(`Pong! Bot pingi: ${client.ping}`)
}, 1500)  
}, 1500)  
}, 1500)  

})

  
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'ping'
};