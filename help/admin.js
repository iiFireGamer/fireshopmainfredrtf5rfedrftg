const Discord = require("discord.js");
const client = new Discord.Client();
exports.run = (client, message, args) => {
  if(!message.channel.guild) return message.reply('this command is for guilds only!');
  message.react('✉')
message.reply('check your private i sent you message').then(message => {message.delete(20000)})
message.author.send(`\n\n\`\`\`
                  Admin Commands    

_________________________________________________
|                                               |              
|  f!ban  = <@user> <reason>                     |
|  f!kick = <@user> <reason>                     |
|  f!delete = chat                               | 
|  f!clean  = clean chat from 1-100              |
|  f!mute = <@user> <time> <reason>              |
|  f!unmute = <@user> <reason>                   |
|  f!role = <@user> <namerole>                   |
|  f!removerole = <@user> <name role>            |
|  f!bans = all members banned                   |
|  f!chatmute                                    |
|  f!openchat                                    |
|  f!say = command say normal                    |
|  f!sayembed = command say with embed           |
|  f!shut = @<user> Mute a user from the room    |
|  f!open = @<user> open mute user from room     |
|  f!antilinks = blocker links other clans       |
|  f!antiinfo = information about command        |
|_______________________________________________|
                                             
       don forget create channel named logs         
    \`\`\``)
 }
