/**
 * App initialization module
 */
define([
  'devgrid',
  'modernizr-tests',
  'router',
  'socketio',
  'core/_module/views/_moduleView',
  'es6!core/_module-es6/_module-es6'
], function(
  Devgrid,
  ModernizrTests,
  Router,
  io,
  _ModuleView,
  _ModuleES6
) {
  var Init = function() {
    return {

      /**
       * Initialize modules
       */
      initialize: function() {
        var
          devgrid           = new Devgrid(),
          modernizr_tests   = new ModernizrTests();

        // Module initializations
        devgrid.initialize();
        modernizr_tests.initialize();
        Router.initialize({pushState: true});

        // Build socket
        this.socket = io.connect('//localhost:9222');

        // Register
        this.socket.emit('register', {ready: true});

        // Receive registration
        this.socket.on('ready', function( info ) {
          _this.client_id = info.id;
          console.log('my client_id: ', _this.client_id);
        });

        // Backbone initializations
        new _ModuleView();

        // ES6 module initialization
        new _ModuleES6();
      }
    };
  };

  return Init;
});
