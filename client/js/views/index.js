// Index View
define(['jquery', 'underscore', 'backbone'], function($, _, Backbone) {
  return Backbone.View.extend({
    el: 'div',
    tagName: 'div',
    classNameL: 'page-content',
    initialize: function() {
      console.log("Index View");
    },

    render: function() {
      
    }
  });
});