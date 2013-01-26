var should = require('should'),
    request = require('superagent');

var root_url = 'http://localhost:5000';

describe('Root Website', function(){
    it('should return statusCode 200', function(done){
        request
            .get(root_url)
            .end(function(result){
                result.statusCode.should.equal(200);
                done();
            });
    });
});