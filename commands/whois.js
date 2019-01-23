exports.run = (client, message, args) => {
     
if(message.mentions.users.size === 1){
      var user = message.mentions.users.first();
        var userID = user.id;
    const channel = client.channels.find(channel => channel.name === "introductions");
      if (message.isMentioned(client.user)){
          message.channel.send("This is I, Hambot the Dane!");
      }
      else{
          channel.fetchMessages({ limit: 100 })
  .then(messages => message.channel.send(`${messages.filter(m => m.author.id === userID).first(1)} `))
  .catch(console.error);
//          message.channel.send(user.avatarURL);
        }
  }
else{
    var w = Math.floor(Math.random() * 2);
    if (w === 0){
        if(args[0] === "yorick"){
      message.channel.send("Alas, poor Yorick! I knew him, " + message.author.toString() + ".");
      } else if(args[0] === "polonius"){
      message.channel.send("I know him excellent well! He is a fishmonger.");
      } else if(args[0] === "gertrude"){
      message.channel.send("She has my father much offended.");
      } else if(args[0] === "claudius"){
      message.channel.send("The serpent that did sting my father's life.");
      } else if(args[0] === "horatio"){
      message.channel.send("One who, in suff'ring all, suffers nothing.");
      } else if(args[0] === "laertes"){
      message.channel.send("A very noble youth.");
      } else if(args[0] === "ophelia"){
      message.channel.send("Forty thousand brothers could not with all their quantity of love make up my sum of love for her.");
      } else if(args[0] === "hamlet"){
      message.channel.send("A rogue and peasant slave.");
      } else{
        message.channel.send("Who?");
        }
    }
          
          
    else{
        if(args[0] === "yorick"){
      message.channel.send("A fellow of infinite jest, of most excellent fancy.");
      } else if(args[0] === "polonius"){
      message.channel.send("That wretched, rash, intruding fool. I took him for his better.");
      } else if(args[0] === "gertrude"){
      message.channel.send("Her husband's brother's wife -- and (would it were it not so!) my mother.");
      } else if(args[0] === "claudius"){
      message.channel.send("No more like my father than I to Hercules.");
      } else if(args[0] === "horatio"){
      message.channel.send("I wear him in my heart's core, ay, in my heart of heart.");
      } else if(args[0] === "laertes"){
      message.channel.send("A soul of great article...");
      } else if(args[0] === "ophelia"){
      message.channel.send("She should not have believed me.");
      } else if(args[0] === "hamlet"){
      message.channel.send("A dull and muddy-meddled rascal.");
      }
        else{
        message.channel.send("Who?");
      }
    }
    }
}
