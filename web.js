var express = require('express');
<<<<<<< HEAD
var fs = require('fs');
var buf = new Buffer(256);
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var file = fs.readFileSync('index.html','utf-8');
  //output = buf.toString('utf-8');
  response.send(file);
=======

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send('Hello World!');
>>>>>>> 950a10a7020a48cbdbf62b1311f5dd0c768c3675
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
<<<<<<< HEAD
});
=======
});
>>>>>>> 950a10a7020a48cbdbf62b1311f5dd0c768c3675
