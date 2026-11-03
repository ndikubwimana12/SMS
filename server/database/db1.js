const mysql = require('mysql2');

const db1 = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'sms'
});

db1.connect((error) => {
    if (error) {
        console.log("error");
        return;
    }

    console.log("database is running correctly!!");
});


module.exports = db1;
