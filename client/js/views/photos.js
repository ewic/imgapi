// Photos collection view
define(['jquery', 'underscore', 'backbone', 'js/views/photo'], function($, _, Backbone, PhotoView) {
  return Backbone.View.extend({
    el: '#site-content',
    tagName: 'div',
    className: 'photos',

    template: _.template(""),

    events: {

    },

    initialize: function() {
      console.log("Photos Collection View");

      var self = this;
      $.get('templates/photos.html', function(response) {
        self.template = _.template(response);

        self.render();
      });
    },

    render: function() {
      $(this.el).html(this.template());  // Replace the main element with the contents of the photos collection template

      // Then for each photo, render the photo and attach it to the photostrip element
      var self = this;
      this.collection.each(function(photo) {
        var photoView = new PhotoView({model: photo});
        $('.photostrip').append(photoView.el);
      });
    },
  });
});