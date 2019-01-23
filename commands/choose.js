exports.run = (client, message, args) => {
    var w = Math.floor(Math.random() * 2);
   if (w === 0){ 
       message.channel.send(args[0])
               }
    else if (w === 1){
        message.channel.send(args[2])
               }
}