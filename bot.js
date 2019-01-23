const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");



client.on("message", (message) => {
  if (!message.content.startsWith(config.prefix) || message.author.bot) return;
//More consts???
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();
//end consts
  if(command === 'ping') {
  message.channel.send('Pong!');
} else
if (command === 'blah') {
  message.channel.send('Meh.');
}
});


client.login(config.token);