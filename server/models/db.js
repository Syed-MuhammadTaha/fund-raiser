const mysql = require('mysql')

const connection = mysql.createConnection({
    host:'localhost',
    database:'dbs',
    user:'root',
    password:'root'
})
module.exports = connection