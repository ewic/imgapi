define(['jquery', 'underscore', 'backbone'], function($, _, Backbone) {
  return Backbone.View.extend({
    tagName: 'li',
    className: 'editor',

    template: _.template(""),

    events: {

    },

    initialize: function() {
      var self = this;
      $.get('templates/photo.html', function(response) {
        self.template = _.template(response);
        self.render();
      });
    },

    render: function() {
      this.$el.html(this.template( { photo: this.model.toJSON() } )); 
      return this;
    },
  });
});