const mysql = require('mysql')

const connection = mysql.createConnection({
    host:'localhost',
    database:'users',
    user:'root',
    password:'moeez.200317'
})
module.exports = connection