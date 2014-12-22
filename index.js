
var express = require('express'),
    app = express()
    server = require('http').Server(app)
    io = require('socket.io')(server),
    logger = require('morgan'),
    kx = require('elecraft');

server.listen(process.env.PORT || 3000);

app.use(logger('combined'));

app.use(express.static(__dirname + '/public'));

