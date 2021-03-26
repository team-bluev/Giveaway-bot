const Discord = require("discord.js");

const config = require("../config.json");

module.exports.run = async (client, message, args) => {
  let prefix = config.prefix;

  if (message.author.bot) return;

  if (!message.content.startsWith(prefix)) return;

  let support = new Discord.MessageEmbed()

    .addField("Support Server", "[Click here to Join!](https://discord.gg/fhjxna3SXB)")

    .setFooter(
      `Requested by ${message.author.tag}`,

      client.user.displayAvatarURL(),
    );

  message.channel.send(support);
};

module.exports.help = {
  name: "support"
};
