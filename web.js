var express = require('express');
var fs = require('fs');
var buf = new Buffer(256);
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var file = fs.readFileSync('index.html','utf-8');
  //output = buf.toString('utf-8');
  response.send(file);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
