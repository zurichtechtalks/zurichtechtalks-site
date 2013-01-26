var fs = require('fs'),
    _ = require('underscore');

var getPosts = function(callback){
    fs.readFile('fixtures/posts.json', 'utf8', function(err, data){
        var posts = JSON.parse(data);

        var formattedPosts = _.map(posts, function(post){
            return {
                id: post.id,
                title: post.title,
                description: post.body,
                tags: post.tags
            }
        });
        
        callback(formattedPosts);
    });
};


/*
 * GET /posts
 */

exports.index = function(req, res){
    getPosts(function(posts){
        res.send({posts: posts});
    });
};

/*
 * GET /posts/1
 */

exports.show = function(req, res){
    getPosts(function(posts){
        res.send(posts[req.params['id']]);
    });
};