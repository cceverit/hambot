exports.run = (client, message, args) => {
const fs = require('fs');
    let act = 1;
    if (args[0] = 1){
    let rawdata = fs.readFileSync('act1.json');  
act = JSON.parse(rawdata);  
    }
    message.channel.send(act.scene1.line1);
}