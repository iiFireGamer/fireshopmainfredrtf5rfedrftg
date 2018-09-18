const Discord = require("discord.js");
const client = new Discord.Client();
exports.run = (client, message, args) => {
  if(!message.channel.guild) return message.reply('this command is for guilds only!');
  message.react('✉')
  message.reply('bot is been sent in private with the information').then(message => {message.delete(20000)})
message.author.send(`\n\n\`\`\`
              🎃 fun commands 👏    
_________________________________________________
|                                               |
|  f!dog <@user> Show random dogs                |
|  f!cat Show random cats                        |
|  f!catgif Show random cats                     |
|  f!fox Show random fox                         |
|  f!hug <@user> Hug somebody                    |
|  f!punch <@user> Punch for something           |
|  f!kill <@user> kill someone                   |
|  f!anime show random anime photos              |
|  f!memes show random photos                    |
|  f!garo to get sigart                          |
|  f!rabbits show random rabbits photos          |
|  f!slap <user> To slap a person                |
|  f!poke <user> To poke a person                |
|  f!cuddle <user> To cuddle a person            |
|  f!pat <user> to pat a person                  |
|  f!kiss <user> to kiss a person                |
|  f!tickle <user> to tickle a person            |
|  f!ask to ask bot anything answer you          |
|  f!otaku to show random photos otaku           |
|  f!any                                         |
|  f!gay To find out who someone is gay          |
|  f!nik to nick any one xD                      |
|_______________________________________________|
                                             
we will add more commands a soon to contact the owner
    \`\`\``)
}
