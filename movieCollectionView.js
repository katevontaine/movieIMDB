var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
Backbone.$ = $;
var MovieView = require('./movieModelView');
var MovieModel = require('./movieModel');
var MovieCollection = require('./movieCollection');


module.exports = Backbone.View.extend({
  el: '.main',
  events: {
    'click button': 'newMovie'
  },
  initialize: function() {
      this.addAll();
  },
  addOne: function(oneMovie) {
    var photoView = new MovieView({model: oneMovie});
    this.$el.append(photoView.render().el);
  },
  addAll: function() {
    _.each(this.collection.models,this.addOne,this)
  },

  newMovie: function(event){
    console.log("movie collection view");
    event.preventDefault();

    var MovieView = {
    movieTitle: $('input[name="movieTitle"]').val(),
     year: this.$el.find('input[name="year"]').val(),
     imageUrl: this.$el.find('input[name="imageUrl"]').val(),
     plot: this.$el.find('input[name="plot"]').val(),
     rating: this.$el.find('input[name="rating"]').val()
  };

    var movieModel = new MovieModel(MovieView);
    movieModel.save();
    console.log("saved");
    console.log(this.movieTitle);
}
});
