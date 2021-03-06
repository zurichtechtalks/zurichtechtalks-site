var express = require('express'),
    engine = require('ejs-locals'),
    routes = require('./routes'),
    post = require('./routes/post'),
    http = require('http'),
    path = require('path');

var app = express();

app.engine('ejs', engine);

app.configure(function(){
    app.set('port', process.env.PORT || 5000);
    app.set('views', __dirname + '/views');
    app.set('view engine', 'ejs');
    app.use(express.favicon());
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(app.router);
    app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
    app.use(express.errorHandler());
});


/*
 * ROUTES
 *
 */

app.get('/', routes.index);
app.get('/posts', post.index);
app.get('/posts/:id', post.show);

http.createServer(app).listen(app.get('port'), function(){
    console.log('Server listening on port ' + app.get('port'));
});
