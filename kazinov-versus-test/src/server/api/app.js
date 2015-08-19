var express = require('express');
var routes = require('./routes');

var PORT = 3000;

var app = express();
routes.configure(app);

var server = app.listen(PORT, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('API is listening at %s:%s', host, port);
});

module.exports = app;