const mysql = require('mysql2')
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database:'sms'
})

db.connect((error) => {
    if (error) {
        console.log("failed to connect");
        return;
    }
    console.log("database connected sucessful!!");

});


module.exports = db;