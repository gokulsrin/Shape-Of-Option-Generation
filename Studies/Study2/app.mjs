import express from 'express';
import mysql from 'mysql';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import {parseData} from './parse.mjs';
import {exdata} from './sampledata.mjs'

dotenv.config();

// sequel connection 
// I am hard coding in the information here instead of using the .env function because, for whatever reason, it leads to errors...
// here, you want to insert the information to your sql database. 
// we used amazon RDS to host our sequel db, so the host was the amazon ID thing 
// the user was our username 
// the password was the account password or a specific password for the db, I don't exactly remember 
// the database is the name of the database

var con = mysql.createConnection({
    host: "INSERT HOST",
    user: "INSERT USER",
    password: "INSERT PASSWORD",
    database: "INSERT SQL DB NAME",
    port: "INSERT PORT",
    // socketPath: '/var/run/mysqld/mysqld.sock',
  });
// try to connect
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected to database!");
});
  
// express app
const app = express();

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// serving the server the index.html file 
app.use(express.static('public'));

// if we receive a "get" request from the path "./", then we will send the message receiving
app.get('/', (req, res) => {
    res.send("receiving...");
});

// var q = "INSERT INTO test_table (Name) VALUES (234234525);";
// if we receieve a post request from the path "./data", then we will do the following...
app.post('/data', (req, res) => {
    console.log("attempting to send data to server.......");
    console.log(req.body);
    var arr = parseData(req.body.responses);
    // var arr = parseData(exdata);
    var information = arr[0];
    var responses = arr[1];
    //information table
    con.query(information, function (err, result) {
      if (err) console.log(err);
      else console.log("information data recorded");
    });
    //generations table
    for (var response of responses){
        con.query(response, function (err, result) {
            if (err) console.log(err);
            else console.log("generations data recorded");
        });
    }
});


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Listening on Port: ${PORT}`);
});
