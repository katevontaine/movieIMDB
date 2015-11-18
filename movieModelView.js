var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
Backbone.$ = $;
var movieModel = require('./movieModel');


module.exports = Backbone.View.extend({
          tagName: 'article',
          className: 'movies',
          template: _.template($('#movieTmpl').html()),
          // events: {'click button': 'newMovie'},

    // onFormClick: function (event) {
      //     event.preventDefault();
      //     alert('a new movie');
      //     var movieModel = new movieModel(movieTemp);
      //     movieCollection.fetch(movieTemp).then(function () {
      //       new movieCollectionView({collection:movieCollection})
      //     });
      //     saveMovie();
      //   },
      //
      //   saveMovie: function (){
      //     console.log("moooo");
      //     var theActualMovie = {
      //     movieTitle: this.$el.find('input[name="movieTitle"]').val(),
      //     //  year: this.$el.find('input[name="year"]').val(),
      //     //  imageUrl: this.$el.find('input[name="imageUrl"]').val(),
      //     //  plot: this.$el.find('input[name="plot"]').val(),
      //     //  rating: this.$el.find('input[name="rating"]').val()
      //   }
      //   movieModel.save(theActualMovie);
      // },

        render: function () {
          var markup = this.template(this.model.toJSON());
          this.$el.html(markup);
          return this;
        },

        initialize: function(){

        }


});
