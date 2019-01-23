exports.run = (client, message, args) => { 
var user = message.mentions.users.first();
var xuser = user.username;
message.channel.send(xuser)
}