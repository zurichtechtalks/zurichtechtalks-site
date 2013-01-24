var express = require('express');

var app = express(express.logger());

app.get('/', function(request, response) {
  response.send('Hello World from Zurichtechtalks!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});