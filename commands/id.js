exports.run = (client, message, args) => { 
const channel = client.channels.find(channel => channel.name === "introductions");
//    
//    console.log(eyedee.id);
//    const mentionedMember
//  
var user = message.mentions.users.first();
var userID = user.id;
    
channel.fetchMessages({ limit: 100 })
  .then(messages => message.channel.send(`${messages.filter(m => m.author.id === userID).first(1)} `))
  .catch(console.error);
}