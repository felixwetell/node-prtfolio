var express = require('express');
var bodyParser = require('body-parser')

var app = express();
var urlParser = bodyParser.urlencoded();

app.get('/', function(req, res){
    res.sendFile(__dirname + '/' + 'index.html')
});

