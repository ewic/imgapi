require.config({
  'baseUrl': '/',

  'shim': {
    'bootstrap': { 'deps': ['jquery'] },
    'backbone': { 'deps': ['underscore', 'jquery'],
            'exports': 'Backbone' }
  },

  'paths': {
    'app': 'js/app',

    //Vendor paths
    'jquery': 'lib/js/jquery.min',
    'underscore': 'lib/js/underscore-min',
    'backbone': 'lib/js/backbone-min',

    'bootstrap': 'lib/js/bootstrap.min',
  }
});

require(['jquery', 'underscore', 'backbone'], function($, _, Backbone) {
  require(['js/router.js'], function(Router) {
    var router = new Router;
    Backbone.history.start();
  });

  require(['js/views/sidebar'], function(SidebarView) {
    var sidebar = new SidebarView;
  });

  require(['js/collections/photos'], function(PhotosCollection) {
    $.get('api/photos/', function(data, err) {
      photos = new PhotosCollection(data);
    });
  });

});