var Tumblr = require('ntumblr'),
    fs = require('fs');

var tumblr = new Tumblr({
    consumerKey: 'OukTa78dMj7PeXCCZEzQGijBMUHb0iveDpXC6rTtgjqo0tjFAP',
    host: 'zurichtechtalks.tumblr.com'
});

tumblr.get('posts', function(err, data, response){
    fs.writeFile(__dirname + '/posts.json', JSON.stringify(JSON.parse(data).response.posts), function(err){
        if(err) throw err;
        console.log('posts fixtures updated.');
    });
});
