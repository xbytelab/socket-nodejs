const express = require('express');
const app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res) {
   res.sendFile(__dirname + '/static/index.html');
});

io.on('connection', function(socket) {

    //Send a message after a timeout of 4 sec
    setInterval(function() {
        let data = { mgs: 'Emitted from server :'+new Date().getSeconds()}
        socket.emit('test', data);
    }, 4000);

});

http.listen(3000, function() {
   console.log('listening on port:3000');
});