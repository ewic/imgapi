// Contact View
define(['jquery', 'underscore', 'backbone'], function($, _, Backbone) {
  return Backbone.View.extend({
    el: '#site-content',
    tagName: 'div',
    className: 'contact',

    template: _.template(""),

    events: {

    },

    initialize: function() {
      console.log("Contact View");

      var self = this;
      $.get('templates/contact.html', function(response) {
        self.template = _.template(response);

        self.render();
      });
    },

    render: function() {
      $(this.el).html(this.template({items: this.items}));
    },
  });
});