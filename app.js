var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello world');
});
app.get('/profile', function (req, res) {
    res.send('some text here...');
});

var server = app.listen(3000, function () {
    console.log('App is running...');
});