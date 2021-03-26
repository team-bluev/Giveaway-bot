module.exports = client => {
    console.log(
      `Ready to serve in ${client.channels.cache.size} channels on ${client.guilds.cache.size} servers for a total of ${client.users.cache.size} users.`
    );
  
    const activities = [
      `Giveaways in ${client.guilds.cache.size} guilds`,
      "g!help",
      `over ${client.users.cache.size} users! and My prefix is -`
    ];
    setInterval(() => {
      const activities = [` ${client.users.cache.size} users in ${client.guilds.cache.size} servers` , `a!invite | a!help` , `serving you all guys` ];
          const activity = activities[Math.floor(Math.random() * activities.length)];
          client.user.setActivity(activity, { type: "WATCHING" });
      }, 5000);
  };
  