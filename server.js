var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var urlParser = bodyParser.urlencoded();

app.use(express.static('public'));

app.get('/', function(req, res){
    res.sendFile(__dirname + '/' + 'index.html')
});
 
var server = app.listen(3000, function(){
    var host = server.address().address;
    var port = server.address().address;

    console.log('express app listening to ' + host + " " + port)
});