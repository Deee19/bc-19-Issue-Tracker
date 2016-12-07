var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
// var firebase = require('firebase');

var app = express();
// var route = require('./route.js');
// app.use('/', route);

var port = 3000;

//for static css and js files
app.use(express.static('public'));

//form handling
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}));

var setpath = path.join(__dirname, '/views');
// app.set('views', setpath);
// app.set('view engine', 'ejs');

//Start server
app.listen(port, function () {
	console.log('app started');
});
var publicpath = path.join(__dirname, 'public');
//route for the authentication page
app.get('/', function (req, res) {
	res.sendFile(path.join(publicpath, 'views/index.html'));
});
app.get('/main', function (req, res) {
	res.sendFile(path.join(publicpath, 'views/main.html'));
});
//route for the admin page
app.get('/admin', function (req, res) {
	res.sendFile(path.join(publicpath, 'views/admin.html'));
});



module.exports = app;