import express from 'express';
import mysql from 'mysql';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import {parseData} from './parse.mjs';

dotenv.config();

// Enter your own SQL info here. 

var con = mysql.createConnection({
    host: "",
    user: "",
    password: "",
    database: "",
    port: "",
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
    // res.send("receiving...");
    console.log();
});


app.post('/data', (req, res) => {
    console.log(req.body);
    var data = parseData(req.body.data[0], req.body.data[1]);
    var information = data[0];
    var responses = data[1];
    // console.log(information, responses);
    console.log(responses.length);
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
    res.send("Done")
});


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Listening on Port: ${PORT}`);
});