exports.run = (client, message, args) => { 
    
    
if(message.mentions.users.size === 1){
var user = message.mentions.users.first();
}
    
    
    
const sqlite3 = require('sqlite3').verbose();    
    
let db = new sqlite3.Database('./db/users.db', (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to the user database.');
});
    
    
    
// 
    let sql = `SELECT Name FROM users WHERE Username = ?`;

db.each(sql, [user.username], (err, row) => {
  if (err) {
    throw err;
  }
  message.channel.send(row.Name);
});     
//
    
    
    
db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Close the database connection.');
});
}
