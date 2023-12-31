const mysql = require('mysql')

const connection = mysql.createConnection({
host:'localhost',
database:'dbs',
user:'root',
password:'root'
})
// moeez
// host:'localhost',
// database:'dbs',
// user:'root',
// password:'moeez.200317'


//taha
// host:'localhost',
//     database:'dbs',
//     user:'root',
//     password:'root'
module.exports = connection