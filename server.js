var users = require('./users.json');

var express = require('express');
var app = express();

app.use(express.static('./public', {index: 'index.html'}));

app.get('/users', function(req, res) {
	res.json(users);
});

app.get('/other', function(req, res) {
	res.json(other);
});

app.listen(3000);
console.log('Listening on port 3000');