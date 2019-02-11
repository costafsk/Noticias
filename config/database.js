const mysql = require('mysql');

const connection = () => {
    return (
        mysql.createConnection({
            host:'localhost',
            user:'root',
            database:'portal',
            password:'1234'
        })
    );
}

module.exports = () => {
    return connection;
}