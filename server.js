var express = require('express');
var expressLayouts = require('express-ejs-layouts');
var bodyParser = require('body-parser');

var app = express();
var urlParser = bodyParser.urlencoded();

app.use(express.static('public'));
app.use(expressLayouts);
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.sendFile(__dirname + '/' + 'index.html')

    var locals = {
    title: 'Page Title',
    description: 'Page Description',
    header: 'Page Header'
  };
  res.render('the-view', locals);
});

 
var server = app.listen(8088, function(){
    var host = server.address().address;
    var port = server.address().address;

    console.log('express app listening to ' + host + " " + port)
});