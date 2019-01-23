exports.run = (client, message, args) => {
if(message.mentions.users.size === 1){
      var user = message.mentions.users.first();
    if (user.presence.status == "online"){
        message.channel.send("Online!");
    }
    else if (user.presence.status == "idle"){
        message.channel.send("Idle!");
    }
    else if (user.presence.status == "offline"){
        message.channel.send("Offline!");
    }
  }
    
else if(args[0] === "polonius"){
    message.channel.send("In heaven. Send thither to see. If your messenger find him not there, seek him in the other place yourself. But indeed, if you find him not within this month, you shall nose him as you go up the stair, into the lobby.");
    }
else{
    message.channel.send("Please mention a user using @.");
    }
}