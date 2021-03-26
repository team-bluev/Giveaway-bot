const Discord = require("discord.js");

const config = require("../config.json");

module.exports.run = async (client, message, args) => {
 if(!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send('I don\'t have the right permissions.')
        if (!message.member.hasPermission("MANAGE_CHANNELS")) {
            return message.channel.send("You Don't Have Permission!")
           
        }
        message.channel.clone().then
        ((ch) => {
            ch.setParent(message.channel.parent);
            ch.setPosition(message.channel.position);
            message.channel.delete().then(() => {
                ch.send("**Channel Has Been Nuked** \n https://imgur.com/LIyGeCR")
            })

        });
}