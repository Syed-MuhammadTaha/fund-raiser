const express = require("express")
const dotenv = require("dotenv").config()
const cors = require('cors')
const app = express()
const cookieParser = require('cookie-parser')
const connection = require("./models/db")

//middleware
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended:false}))
app.use('/',require('./routes/authRoutes'))

app.listen(8000,() => {
console.log("Server is running on port 8000")
connection.connect(function(err){
    if(err) throw err;
    console.log('Database COnnected')
})})