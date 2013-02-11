// This is a module for getting the data from the zurichtechtalks REST API.
angular.module('restapi', ['ngResource']).
    factory('Project', function($resource) {
        var Project = $resource('/posts/:id');
        return Project;
    });