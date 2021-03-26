 const Discord = require("discord.js");
const config = require("../config.json");

module.exports.run = async (client, message, args) => {
 if(!message.member.hasPermission("MANAGE_MESSAGE")) return message.send('you cannot use this command.');
  if(!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.channel.send("I do not have \`MANAGE_MESSAGES\`permissions");
  if(!args[0]) return message.channel.send("You must state a number of message to purge \` -purge number \`");
  const amonutToDelete = Number(args[0],10);
 
  if(isNaN(amonutToDelete)) return message.channel.send("Number stated must be a whole number.");
  if(!Number.isInteger(amonutToDelete)) return message.channel.send("Number stated must be a whole number.");
  if(!amonutToDelete || amonutToDelete <2 || amonutToDelete >100) return message.channel.send('The number stated must be between 2 and 100.');
  const fetched = await message.channel.messages.fetch({
    limit: amonutToDelete
  });

await message.channel.bulkDelete(fetched)
message.reply('doneeeeee');
  }
  