require('dotenv').config();
const Discord = require("discord.js");
const keepAlive = require("./server");
const { ActivityType, EmbedBuilder } = require('discord.js');
const Client = require('./client/Client');
const client = new Client()

client.once('ready', async () => {
  console.log(`Ready!`);
  client.user.setPresence({
    activities: [{ name: "fuck you", type: ActivityType.Competing }],
    status: 'dnd',
  });
});



client.on('messageCreate', msg => {
  if (msg.content === "test") {
    console.log(msg.author.displayAvatarURL());
  }
});


client.on('messageCreate', msg => {
  if (msg.content === "ping") {
    msg.reply("jebi se");
  }
});

client.on('guildMemberAdd', member => {
  const intro = member.guild.channels.cache.get('575058144695418910').toString();
  const embedMessage = new EmbedBuilder()
    .setColor(0x80b282)
    .setTitle('Welcome to the Gay server')
    .setAuthor({ name: 'cOwOna 👁️👄👁️ server', iconURL: 'attachment://Untitled2.png' })
    .setDescription(`Welcome ${member.user}! Please head over to ` + intro + ` and wait for one of our <@&776950832226500609>s to let you in! :D`)
    .setThumbnail('attachment://Untitled2.png')
    .setImage(`${member.displayAvatarURL()}`)
    .addFields({ name: '1. Please make an intro in the next 24h', value: '-' })
    .addFields({ name: '2. If noone is online vibe for a couple hours someone will be w you soon enough', value: 'Apologies for the wait' })
    .setTimestamp()
    .setFooter({ text: 'Notturna#7099', iconURL: 'attachment://Untitled1.png' });

  member.guild.channels.cache.get('745376796345892965').send({ embeds: [embedMessage], files: ['./assets/Untitled1.png', './assets/Untitled2.png'] });
  member.guild.channels.cache.get('745376796345892965').send('<@&776950832226500609>, @everyone')
    .then(msg => {
      setTimeout(() => msg.delete(), 1000)
    })
    .catch(console.error);
  console.log(`Test ${member.displayName}`);
});


keepAlive();
client.login(process.env['TOKEN']);
