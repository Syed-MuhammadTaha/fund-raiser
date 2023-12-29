const mysql = require('mysql')

const connection = mysql.createConnection({
    host:'localhost',
    database:'users',
    user:'root',
    password:'moeez.200317'
})
// moeez
// host:'localhost',
// database:'users',
// user:'root',
// password:'moeez.200317'


//taha
// host:'localhost',
//     database:'dbs',
//     user:'root',
//     password:'root'
module.exports = connection