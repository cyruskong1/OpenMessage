var express = require('express');
var app = express();
var cors = require('cors')

var port = 3000;

// app.options('*', cors());

app.use(express.static(__dirname + '/'));

app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", GET, POST, PUT, DELETE, OPTIONS);
    res.header("Access-Control-Allow-Credentials",true);
    next();
});

app.listen(port, function(req, res) {
  console.log('Hi Cy, working on OpenMessage Technical Challenge');
});

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

