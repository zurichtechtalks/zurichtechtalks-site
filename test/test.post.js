var should = require('should'),
    request = require('superagent');

var root_url = 'http://localhost:5000';

describe('Posts', function(){
    it('/posts should return an array of posts', function(done){
        request
            .get(root_url + '/posts')
            .end(function(result){
                JSON.parse(result.text).length.should.equal(20);
                done();
            });
    });
    it('/posts/0 should return a single post', function(done){
        request
            .get(root_url + '/posts/0')
            .end(function(result){
                JSON.parse(result.text).title.should.equal('Cloud Foundry Bootcamp @zhgeeks');
                JSON.parse(result.text).tags.length.should.equal(14);
                done();
            });
    });
});
