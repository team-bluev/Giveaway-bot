const Discord = require("discord.js");
const config = require("../config.json");

module.exports.run = async (client, message, args) => {
  if (message.author.bot) return;
  let prefix = config.prefix;
  if (!message.content.startsWith(prefix)) return;

  let help = new Discord.MessageEmbed()
    .setAuthor("help list")
    .setTitle("Command List & Guide for the Bot")
    .setDescription(
      "Below are Commands you can do with Bot."
    )
    .addField(
      "Moderation Commands",
     "Say [a!kick,a!ban,a!mute,a!unmute,a!unban]"
    )
    .addField(
      "Nuke command",
      "Say [type a-nuke for nuking the channel]"
    )
    .addField(
      "Fun Commands",
      "Say [type a-say and other command are coming more ]"
    )
    .addField(
      "?? Giveaway Commands ??",
      "start [channel a!name] [Time] [winners] [Prize]\nreroll [prize name]\nend [prize name]"
    )
    .addField(
      "Examples",
      "-start #giveaway 5m 1 Testing\n-end Testing\n-reroll Testing"
    )
    .addField("Utility", "ping, invite", true)
    .addField("? Information ?", "stats", true)
    .addField("Bot Invite Link!", "[Invite me To Your Server!](https://discord.com/oauth2/authorize?client_id=801017769965518868&permissions=8&scope=bot)")
    .setTimestamp()
    .setFooter(
      `Command Requested By ${message.author.tag}`,
      client.user.displayAvatarURL(),
      message.delete()
    );
  message.channel.send(`${message.author} __**Check Your Dms!**__`);

  return message.author.send(help);
};

module.exports.help = {
  name: "help"
};
