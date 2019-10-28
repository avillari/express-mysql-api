const mysql = require('mysql');
const config = require('./config');

const connection = mysql.createConnection(config);

connection.connect((error) => {
    if(error){
        return console.log(`Error connection to DB: ${error}`);
    }

    console.log('Connection established to db!');
})

module.exports = connection;