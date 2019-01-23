exports.run = (client, message, args) => { message.channel.send({"embed": {
    "title": "A List of Hambot's Commands",
    "color": 1,
    "fields": [
      {
        "name": "hambot help:",
        "value": "You are here!"
      },
      {
        "name": "hambot say [message]:",
        "value": "Have Hambot say whatever you want him to!"
      },
        {
        "name": "hambot whois [person]:",
        "value": "Ask Hambot his opinion of other characters, or have him identify a discord user."
      },
        {
        "name": "hambot whereis [person]:",
        "value": "Hambot will tell you the status of a discord user (or Polonius)."
      },
      {
        "name": "------------------------",
        "value": "Occasionally, Hambot will interject a relevant quote into the conversation. This can get annoying, so you can control his eavesdropping habit with the following commands:"
      },
      {
        "name": "hambot shutup:",
        "value": "Make Hambot stop interrupting the chat with his nonsense."
      },
      {
        "name": "hambot speak:",
        "value": "Allow Hambot to continue interrupting the chat with his nonsense."
      },
        {"name": "------------------------",
        "value": "Some of Hambot's less useful commands include:"
        
      },
        {
        "name": "hambot choose [person]:",
        "value": "Have Hambot choose between two options."
      },
        {
        "name": "hambot dndalign [person]:",
        "value": "Hambot will assign you your D&D alignment."
      },
        {
        "name": "hambot align [person]:",
        "value": "Hambot will assign you your tumblr alignment."
      },{
        "name": "hambot insult [person]:",
        "value": "Hambot will insult your target in the Shakespearean fashion."
      },
        {
        "name": "------------------------",
        "value": "Reminder: Hambot only understands lowercase text! This will be fixed... eventually."
      }
    ]
  }
})
                                         };