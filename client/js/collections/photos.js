// Photos collection
define(['jquery', 'underscore', 'backbone', 'js/models/photo'], function($, _, Backbone, PhotoModel) {
  return Backbone.Collection.extend({
    model: PhotoModel,
    url: "api/photos",
  });
});