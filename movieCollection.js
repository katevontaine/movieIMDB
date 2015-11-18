var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
var movieModel = require('./movieModel');
var movieCollection = require('./movieCollection');

Backbone.$ = $;

module.exports = Backbone.Collection.extend({
  url: 'http://tiny-tiny.herokuapp.com/collections/katemovies',
  model: movieModel,
  initialize: function() {

  }
});
