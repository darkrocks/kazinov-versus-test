var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var routes = require('./routes');

var PORT = 3000;

var app = express();
app.use(express.static(path.join(__dirname, '../..')));
console.log(path.join(__dirname, '../..'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
routes.configure(app);


var server = app.listen(PORT, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('API is listening at %s:%s', host, port);
});

module.exports = app;


//C:\123123123\kazinov-versus-test\node_modules