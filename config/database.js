const mysql = require('mysql');

const connection = () => {
    return (
        mysql.createConnection({
            host:'localhost',
            user:'root',
            database:'portal',
            password:'aham aham'
        })
    );
}

module.exports = () => {
    return connection;
}