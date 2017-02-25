// Photos collection view
define(['jquery', 'underscore', 'backbone'], function($, _, Backbone) {
  return Backbone.View.extend({
    el: '#site-content',
    tagName: 'div',
    className: 'about',

    template: _.template(""),

    events: {

    },

    initialize: function() {
      console.log("AboutView");

      var self = this;
      $.get('templates/about.html', function(response) {
        self.template = _.template(response);

        self.render();
      });
    },

    render: function() {
      $(this.el).html(this.template({items: this.items}));
    },
  });
});