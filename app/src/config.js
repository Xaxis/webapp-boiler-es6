/**
 * Require.js initialization
 */
(function(window, require) {

  /**
   * Configure require.js
   */
  require.config({
    baseUrl: 'dist',
    paths: {

      // Vendor dependencies
      es6:                  'libs/vendor/requirejs-babel/es6',
      babel:                'libs/vendor/requirejs-babel/babel-5.8.34.min',
      jquery:               'libs/vendor/jquery/dist/jquery.min',
      'jquery.devgrid':     'libs/vendor/jquery.devgrid/dist/jquery.devgrid.min',
      text:                 'libs/vendor/requirejs-text/text',
      underscore:           'libs/vendor/underscore/underscore',
      backbone:             'libs/vendor/backbone/backbone',
      socketio:             '//localhost:9222/socket.io/socket.io',

      // Native modules
      util:                 'libs/native/util/util',
      devgrid:              'libs/native/devgrid/devgrid',
      'modernizr-tests':    'libs/native/modernizr-tests/modernizr-tests'
    },
    shim: {
      'jquery.eye': ['jquery'],
      'jquery.devgrid': ['jquery']
    }
  });

  /**
   * Bootstrap app JavaScript
   */
  require(['init'], function(Init) {
    var app = new Init();
    app.initialize();
  });

})(window, require); 
