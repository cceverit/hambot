exports.run = (client, message, args) => {
    var w = Math.floor(Math.random() * 9);
   
        if(args[0] === "polonius"){
      message.channel.send("true dumbass");
      } else if(args[0] === "gertrude"){
      message.channel.send("true thot");
      } else if(args[0] === "claudius"){
      message.channel.send("true bastard");
      } else if(args[0] === "horatio"){
      message.channel.send("cinnamon roll");
      } else if(args[0] === "laertes"){
      message.channel.send("depressed dumbass");
      } else if(args[0] === "ophelia"){
      message.channel.send("true bitch");
      } else if(args[0] === "hamlet"){
      message.channel.send("true edgy");
      } else if(args[0] === "hambot"){
      message.channel.send("edgy dumbass");
      }
    
    else if (w === 0){ 
       message.channel.send("edgy bitch")
               }
    else if (w === 1){
        message.channel.send("edgy thot")
               }
    else if (w === 2){
        message.channel.send("edgy bastard")
               }
    else if (w === 3){
        message.channel.send("dumbass bitch")
               }
    else if (w === 4){
        message.channel.send("dumbass thot")
               }
    else if (w === 5){
        message.channel.send("dumbass bastard")
               }
    else if (w === 6){
        message.channel.send("depressed bitch")
               }
    else if (w === 7){
        message.channel.send("depressed thot")
               }
    else if (w === 8){
        message.channel.send("depressed bastard")
               }

}