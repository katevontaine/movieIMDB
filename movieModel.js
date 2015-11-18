var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
var movieModel = require('./movieModel');


module.exports = Backbone.Model.extend({
  urlRoot: 'http://tiny-tiny.herokuapp.com/collections/katemovies',
  idAttribute: '_id',
  defaults: {
    movieTitle: '',
    year:'0000',
    imageUrl: '0',
    plot: '',
    rating:''
  },

});
