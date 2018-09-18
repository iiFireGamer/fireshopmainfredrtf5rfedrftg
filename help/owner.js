const Discord = require("discord.js");
const client = new Discord.Client();
exports.run = (client, message, args) => {
  if(!message.channel.guild) return message.reply('this command is for guilds only!');
  if (message.author.id !== '408374252291751976') return message.reply('sorry but this command for owner 😪')
  message.author.send(`\n\n\`\`\`autohotkey
     ⚠ commands controle a bot 💬
________________________________________________________________
|                                                             
| ✦ To change name the bot type f!f!name                         
| ✦ to make bot on streaming twitch f!f!tw
| ✦ ito make bot play a game f!f!play
| ✦ to make bot watching state f!f!wt
| ✦ if you want make bot listening type f!f!lis
| ✦ to change photo ths bot f!f!photo and url link the photo    
| 
|  ⚠ commands change state the bot 💬
|
| ✦ state dnd type f!f!dnd ❤
| ✦ state idle type f!f!idle 🧡
| ✦ state online type f!f!online 💚
|
| ⚠ commands messages 💬                                      
|                                                               
| ✦ command say for owner f!²²  any word                        
| ✦ brodcast owner type f!f!message                              
| ✦ send message from bot to user f!f!send <@!user>              
|______________________________________________________________ 
\`\`\``)
  
  message.reply('bot is been sent in private with the information').then(message => {message.delete(20000)})
 }
