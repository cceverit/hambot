const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");

const config = require("./config.json");
const sqlite3 = require('sqlite3').verbose();



////Glitch hosting
//const http = require('http');
//const express = require('express');
//const app = express();
//app.get("/", (request, response) => {
//  console.log(Date.now() + " Ping Received");
//  response.sendStatus(200);
//});
//app.listen(process.env.PORT);
//setInterval(() => {
//  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
//}, 280000);
////end glitch


var mute = false;

// This loop reads the /events/ folder and attaches each event file to the appropriate event.
fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    let eventFunction = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    // super-secret recipe to call events with all their proper arguments *after* the `client` var.
    client.on(eventName, (...args) => eventFunction.run(client, ...args));
  });
});
// ^^ DONT TOUCH THIS ^^


client.on("message", message => {
//IGNORES MESSAGES FROM BOTS
    if (message.author.bot) return;
//MESSAGE CONTENT DETECTION + MESSAGES
if (mute === false){
    if(message.content.includes("nothing")) { message.channel.send("That's a fair thought to lie between maids' legs."); 
    }
    else if(message.content.includes("fortun")) { message.channel.send("Out, out, thou strumpet Fortune!"); 
    }
    else if(message.content.includes("dream")) { message.channel.send("A dream itself is but a shadow."); 
    }
    else if(message.content.includes("honest")) { message.channel.send("To be honest, as this world goes, is to be one man pick'd out of ten thousand."); 
    }
    else if(message.content.includes("death")) { message.channel.send("In that sleep of death what dreams may come?"); 
    }
    else if(message.content.includes("heart")) { message.channel.send("O heart, lose not thy nature."); 
    }
    else if(message.content.includes("sleep")) { message.channel.send("Perchance to dream."); 
    }
    else if(message.content.includes("thanks hambot")) { message.channel.send("You are welcome, masters; welcome, all."); 
    }
    else if(message.content.includes("goodnight")) { message.channel.send("Once more, good night."); 
    }
    else if(message.content.includes("hambot play despacito")) { message.channel.send("https://www.youtube.com/watch?v=kJQP7kiw5Fk"); 
    }
    ;
};
  
    
// DEFINING ARGS
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
// IN-SCRIPT COMMANDS 
//(aka havent figured this bit out yet)   
if (command === "shutup"){
    if (mute === false){
        message.channel.send("Break, my heart, for I must hold my tongue!");
        mute = true;
    }
    else {
        message.channel.send("The rest is silence.");
    }
}
if (command === "speak"){
    if (mute === true){
        mute = false;
        message.channel.send("Speak, I am bound to hear!"); 
    }
    else {
        message.channel.send("Speak the speech, I pray you.");
    
    }
}   
    
    
// COMMAND HANDLER
  try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err) {
    console.error(err);
  }

});


client.login(config.token);