;(function ($, window, undefined) {
    'use strict';

    var $doc = $(document),
        Modernizr = window.Modernizr;

$(document).ready(function() {
    $.fn.foundationAlerts           ? $doc.foundationAlerts() : null;
    $.fn.foundationButtons          ? $doc.foundationButtons() : null;
    $.fn.foundationAccordion        ? $doc.foundationAccordion() : null;
    $.fn.foundationNavigation       ? $doc.foundationNavigation() : null;
    $.fn.foundationTopBar           ? $doc.foundationTopBar() : null;
    $.fn.foundationCustomForms      ? $doc.foundationCustomForms() : null;
    $.fn.foundationMediaQueryViewer ? $doc.foundationMediaQueryViewer() : null;
    $.fn.foundationTabs             ? $doc.foundationTabs({callback : $.foundation.customForms.appendCustomMarkup}) : null;
    $.fn.foundationTooltips         ? $doc.foundationTooltips() : null;
    $.fn.foundationMagellan         ? $doc.foundationMagellan() : null;
    $.fn.foundationClearing         ? $doc.foundationClearing() : null;

    $.fn.placeholder                ? $('input, textarea').placeholder() : null;
});

// UNCOMMENT THE LINE YOU WANT BELOW IF YOU WANT IE8 SUPPORT AND ARE USING .block-grids
// $('.block-grid.two-up>li:nth-child(2n+1)').css({clear: 'both'});
// $('.block-grid.three-up>li:nth-child(3n+1)').css({clear: 'both'});
// $('.block-grid.four-up>li:nth-child(4n+1)').css({clear: 'both'});
// $('.block-grid.five-up>li:nth-child(5n+1)').css({clear: 'both'});

// Hide address bar on mobile devices (except if #hash present, so we don't mess up deep linking).
if (Modernizr.touch && !window.location.hash) {
    $(window).load(function () {
        setTimeout(function () {
            window.scrollTo(0, 1);
        }, 0);
    });
}


/*
 * Ember Application
 *
 */

var App = Ember.Application.create();

// Router
App.Router.map(function(){
    this.resource('posts', function(){
        this.resource('post', {path: ':post_id'});
    });
});

App.IndexRoute = Ember.Route.extend({
    redirect: function(){
        this.transitionTo('posts');
    }
});

App.PostsRoute = Ember.Route.extend({
    model: function(){
        return App.Post.find();
    }
});

App.PostRoute = Ember.Route.extend({
    model: function(params){
        return App.Post.find(params.post_id);
    }
});

// Controllers
App.PostsController = Ember.ArrayController.extend();
App.PostController = Ember.ObjectController.extend();

// Models
App.Store = DS.Store.extend({
    revision: 11,
    adapter: 'DS.RESTAdapter'
});

App.Post = DS.Model.extend({
    title: DS.attr('string'),
    description: DS.attr('string'),
    description_html: function(){
        var converter = new Showdown.converter();
        return converter.makeHtml(this.get('description'));
    }.property('description')
});

})(jQuery, this);
