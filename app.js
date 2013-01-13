require('nodefly').profile(
    'ec50d897-6443-4f5a-b96b-ab0cb99b3ed9',
    ['zurichtechtalks','Heroku'],
);

var express = require('express');

var app = express(express.logger());

app.get('/', function(request, response) {
  response.send('Hello World from Zurichtechtalks!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});