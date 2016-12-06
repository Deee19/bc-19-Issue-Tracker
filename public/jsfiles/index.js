var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var Firebase = require('firebase');

var app = express();
var FirebaseRef = new Firebase

var route = require('./route.js');
app.use('/route', route);

var port = process.env.PORT || 3000;

//for static css and js files
app.use(express.static(path.join(__dirname, '/public')));

//form handling
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

var setpath = path.join(__dirname, '/views');
app.set('views', setpath);
app.set('view engine', 'ejs');

//Start server
app.listen(port, function() {
	console.log('app started');
});

//route for the homepage
app.get('/', function(req, res) {
	res.render('index');
});

//route for the login page
app.get('/login', function(req, res) {
	res.render('login');
});

//route for the register page
app.get('/register', function(req, res) {
	res.render('register');
});

//route for the admin page
app.get('/register', function(req, res) {
	res.render('admin');
});

module.exports = app;