var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
var MovieCollection = require('./movieCollection');
var MovieModel = require('./movieModel');
var MovieCollectionView = require ('./movieCollectionView')
Backbone.$ = $;

// var movieTmpl = [
//   '<article class ="newMovie">',
//   '<%= movieTitle %>',
//   '<%= <img src="imageUrl"> %>',
//   '<p><%=year%></p>',
//   '<p><%=plot%></p>',
//   '<h4><%=rating%></h4>',
//   '</article>'
//
// ].join('');
//
$(function () {
  var movieCollection = new MovieCollection();
  movieCollection.fetch().then(function(data) {
    new MovieCollectionView({collection: movieCollection});
  })
})
