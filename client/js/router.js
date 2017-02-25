//Router
define(['jquery', 'underscore', 'backbone'], function($, _, Backbone) {
  return Backbone.Router.extend({
    // App routes
    routes: {
      "about": "aboutRoute",
      "photos": "photosRoute",
      "contact": "contactRoute",
      "*path": "defaultRoute",
    },

    aboutRoute: function() {
      require(['js/views/about'], function(AboutView) {
        var about = new AboutView;
      });
    },

    photosRoute: function() {
      // Note that this is a Collection View
      require(['js/views/photos', 'js/collections/photos'], function(PhotosView, PhotosCollection) {
        $.get("api/photos", function(response) {
          var collection = new PhotosCollection(response);

          var photosView = new PhotosView({collection: collection});
        });
      });
    },

    contactRoute: function() {
      require(['js/views/contact'], function(ContactView) {
        var contact = new ContactView;
      });
    },
 
    defaultRoute: function() {
      require(['js/views/index'], function(IndexView) {
        var index = new IndexView;
      });
    },

  });
});