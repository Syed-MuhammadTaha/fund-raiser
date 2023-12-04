const express = require('express');
const bodyParser = require('body-parser');
// const cors = require('cors');
const mysql = require('mysql2');
const port = 3000;

const app = express();
// app.use(cors());
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'sakila'
});

db.connect((err) => { 
    if (err) throw err;
    console.log('Connected to database');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})
app.get('/', (req, res) => {
    res.send('Hello World!');
})