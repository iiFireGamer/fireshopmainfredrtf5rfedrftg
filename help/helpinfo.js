const Discord = require("discord.js");
const client = new Discord.Client();
exports.run = (client, message, args) => {
  if(!message.channel.guild) return message.reply('this command is for guilds only!');
  message.react('✉')
  message.reply('bot is been sent in private with the information').then(message => {message.delete(20000)})
message.author.send(`\n\n\`\`\`
               📚 fun commands 👏    
_________________________________________________
|                                               |
| f!bots to show all bots in server              |
| f!rooms to show all rooms in server            |
| f!count start count time                       |
| f!meteo To see the weather                     |
| f!invite invitation the bot                    |
| f!bcowner send message to owner                |
| f!serverpic show photo the server              |
| f!userinfo Information about user              |
| f!server Information about server              |
| f!avatar photo profile person                  |
| f!ping The quality of the bot connection       |
| f!myid info about your profile                 |
| f!botinfo Information about bot                |
| f!support link server support                  |
| f!uptime boot time the bot                     |
|_______________________________________________|
                                             
we will add more commands a soon to contact the owner
    \`\`\``)
}
