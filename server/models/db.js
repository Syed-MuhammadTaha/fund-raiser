const mysql = require('mysql')
require("dotenv").config()
const urlDB=`mysql://${process.env.MYSQLDATABASE}:${process.env.MYSQLPASSWORD}@${process.env.MYSQLHOST}:${process.env.PORT}/${process.env.MYSQLUSER}`
const connection = mysql.createConnection(urlDB)
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