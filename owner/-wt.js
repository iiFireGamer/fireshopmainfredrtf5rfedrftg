const Discord = require("discord.js");
const client = new Discord.Client();
exports.run = (client, message, args) => {
  if(!message.channel.guild) return message.reply('this command is for guilds only!');
  const devs = ['408374252291751976'];
  var argresult = message.content.split(` `).slice(1).join(' ');
  if (!devs.includes(message.author.id)) return;
    client.user.setActivity(argresult, {type:'WATCHING'});
    message.channel.sendMessage(`change status name to watching **${argresult}**`)
}
