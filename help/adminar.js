const Discord = require("discord.js");
const client = new Discord.Client();
exports.run = (client, message, args) => {
  if(!message.channel.guild) return message.reply('this command is for guilds only!');
  message.react('✉')
message.reply('تحقق من الخاص بك أرسل لك رسالة').then(message => {message.delete(20000)})
message.author.send(`\n\n\`\`\`fix
                 اوامر المسؤولين                          
__________________________________________________
|                                                 
|  f!ban <@user> <reason> حظر المستخدم           
|  f!kick <@user> <reason> ركل المستخدم           
|  f!delete chat مسح الشات                        
|  f!mute <@user> <time> <reason> اسكات المستخدم  
|  f!unmute <@user> <reason> الغاء اسكات المستخدم 
|  f!role <@user> <namerole> اعطاء دور            
|  f!removerole <@user> <name role> ازالة ادور    
|  f!bans جميع أعضاء المحظورة                     
|  f!chatmute اغلاق الشات                          
|  f!openchat فتح الشات                           
|  f!say امر ساي عادي                             
|  f!sayembed امر ساي مع المبيد                   
|  f!shut @<user> اسكات شخص من روم محدد           
|  f!open @<user> الغاء اسكات شخص                
|  f!antilinks منع روابط السيرفرات الاخرى         
|  f!antiinfo معلومات حول مانع روابط         
|________________________________________________

لإرسال التقارير اليها logs لا تنسى ان تنشأ قناة اسمها   
\`\`\``)
 }
