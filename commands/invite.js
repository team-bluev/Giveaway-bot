const Discord = require("discord.js");
const config = require("../config.json");

module.exports.run = async (client, message, args) => {
  let prefix = config.prefix;
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let invite = new Discord.MessageEmbed()
    .addField("Invite Link", "[Click here to invite me!](https://discord.com/api/oauth2/authorize?client_id=816655649052033064&permissions=8&scope=bot)")
  .addField("Support server", "[Click here to know about me!](https://discord.gg/fhjxna3SXB)")
    .setFooter(`Requested by ${message.author.tag}`,
      client.user.displayAvatarURL()
    );
  message.delete();
  message.channel.send(invite);
};

module.exports.help = {
  name: "invite"
};
