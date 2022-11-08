const {Client, Collection, GatewayIntentBits} = require('discord.js');

module.exports = class extends Client {
  constructor(config) {
    super({
      intents: [GatewayIntentBits.GuildVoiceStates, 
                GatewayIntentBits.GuildMessages, 
                GatewayIntentBits.Guilds, 
                GatewayIntentBits.MessageContent,
                GatewayIntentBits.GuildPresences,
                GatewayIntentBits.GuildMessageReactions,
                GatewayIntentBits.GuildMembers],
    });

    this.commands = new Collection();

    this.config = config;
  }
};
