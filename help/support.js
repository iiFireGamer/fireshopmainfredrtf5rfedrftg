const Discord = require("discord.js");
const client = new Discord.Client();
exports.run = (client, message, args) => {
  if(!message.channel.guild) return message.reply('this command is for guilds only!');
  let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("BLACK")
  .addField(" This is  Server Support " , "we dont have")
  message.channel.sendEmbed(embed);
   }
