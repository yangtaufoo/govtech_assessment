const express = require('express');
const app = express();
const mysql = require('mysql');
const fs = require('fs');
const drinksMenu = "./drinksMenu.json";
const venues = "./venues.json";

app.get('/drinksMenu', (req, res) => {
    res.send(JSON.parse(fs.readFileSync(drinksMenu)));
});

app.get('/venues', (req, res) => {
    res.send(JSON.parse(fs.readFileSync(venues)));
});

app.post('/placeOrder', (req, res) => {
    console.log("post!");
});

// const dbConnection = mysql.createConnection({
//     host: "remotemysql.com:3306",
//     user: "tlvRWeCJZP",
//     password: "P8aVD4Fm6d"
//   });
  
//   dbConnection.connect((err) => {
//     if (err) throw err;
//     console.log("DB Connected!");
//   });

app.listen(3000, () => console.log('Gator app listening on port 3000!'));

