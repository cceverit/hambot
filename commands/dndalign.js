exports.run = (client, message, args) => {
    var w = Math.floor(Math.random() * 9);
   
        if(args[0] === "polonius"){
      message.channel.send("True Neutral");
      } else if(args[0] === "gertrude"){
      message.channel.send("Lawful Neutral");
      } else if(args[0] === "claudius"){
      message.channel.send("Lawful Evil");
      } else if(args[0] === "horatio"){
      message.channel.send("Neutral Good");
      } else if(args[0] === "laertes"){
      message.channel.send("Chaotic Good");
      } else if(args[0] === "ophelia"){
      message.channel.send("Lawful Good");
      } else if(args[0] === "hamlet"){
      message.channel.send("Chaotic Neutral");
      } else if(args[0] === "hambot"){
      message.channel.send("Chaotic Good");
      } 
    
    else if (w === 0){ 
       message.channel.send("Lawful Good")
               }
    else if (w === 1){
        message.channel.send("Lawful Neutral")
               }
    else if (w === 2){
        message.channel.send("Lawful Evil")
               }
    else if (w === 3){
        message.channel.send("Neutral Good")
               }
    else if (w === 4){
        message.channel.send("True Neutral")
               }
    else if (w === 5){
        message.channel.send("Neutral Evil")
               }
    else if (w === 6){
        message.channel.send("Chaotic Good")
               }
    else if (w === 7){
        message.channel.send("Chaotic Neutral")
               }
    else if (w === 8){
        message.channel.send("Chaotic Evil")
               }

}