const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
client.channels.get("765868768257507328").send(`Aktif, Komutlar yüklendi!`);
client.channels.get("765868768257507328").send(`${client.user.username} ismi ile giriş yapıldı!`);
client.user.setStatus("dnd");
client.user.setActivity("Huffy BOT | .yardım | Beta 1.0.0")
};
