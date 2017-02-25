define(['jquery', 'underscore', 'backbone'], function($, _, Backbone) {
  return Backbone.View.extend({
    el: 'nav',
    tagName: 'div',
    className: 'navbar',

    template: _.template(""),

    items: [
      { name: "About Me", url: "#about", iconclass: "glyphicon-user" },
      { name: "Photos", url: "#photos", iconclass: "glyphicon-camera"},
      { name: "Contact Me", url: "#contact", iconclass: "glyphicon-envelope"},
    ],

    initialize: function() {
      var self = this;
      $.get('templates/sidebar.html', function(response) {
        self.template = _.template(response);

        self.render();
      });
    },

    render: function() {
      // So to make this work, this.template must be an underscore template.
      //   Variables are passed to the underscore template via arguments.
      //   This feels like it used to run differently...
      $(this.el).html(this.template({items: this.items}));
    }
  });
});