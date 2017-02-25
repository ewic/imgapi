//Photo Model
define(['jquery', 'underscore', 'backbone'], function($, _, Backbone) {
  return Backbone.Model.extend({
    url: '/api/photos/' + this.id,

    defaults: {
      name: "",
      caption: "",
    },

    getURL: function() {
      return "/common/content/full/" + this.get("location") + ".jpg";
    },

    getThumb: function() {
      return "/common/content/thumbs" + this.get("location") + ".jph"
    },

    initialize: function() {
      
      this.set({
        url: this.getURL(),
        thumb: this.getThumb(),
      });

    },

  });
});