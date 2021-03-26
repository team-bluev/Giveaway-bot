const Discord = require("discord.js");
const config = require("../config.json");

module.exports.run = async (client, message, args) => {
 const messageToSay = args.join(" ");
   const sayEmbed = new Discord.MessageEmbed ()
   .setTitle(`${messageToSay}`)
   .setFooter(message.author.tag ,message.author.displayAvatarURL())
   .setColor("#84daf8")
   .setTimestamp();
   message.delete();
  try {
    await message.channel.send(sayEmbed);
  } catch(err) {
    console.log(err);
    message.channel.send('I am not able to say that message');
  } 
  }