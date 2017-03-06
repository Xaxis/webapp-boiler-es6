var
  _                   = require('lodash'),
  io                  = require('socket.io'),
  express             = require('express'),
  port                = 9222,
  exp_app             = express(),
  hosts               = {},
  server              = null;


/**
 * App definition/initialization
 */
var App = (function(A) {

    // Register a host/client
    A.register = function(msg, socket) {

      // Register client as ready
      if (msg.ready && !(socket.id in hosts)) {
        hosts[socket.id] = {
          socket: socket,
          id: socket.id
        };

        // Build registration object
        hosts[socket.id].init = {
          id: socket.id
        };

        // Send registration to client
        socket.emit('ready', hosts[socket.id].init);
      }
    };

    // Deregister a host/client
    A.deregister = function(socket_id) {
      delete hosts[socket_id];
    };

    return A;
  } (App || {}));


/**
 * Server configuration
 */

// Trust X-Forwarded-* header fields
exp_app.enable('trust proxy');

// Initialize express server & socket.io
server = exp_app.listen(port);
io = io.listen(server, {log: false});


/**
 * Socket.io event listeners
 */

io.sockets.on('connection', function(socket) {

  // Listen on request to register a client
  socket.on('register', function(msg) {
    App.register(msg, socket);
  });

  // Listen on request to deregister client
  socket.on('disconnect', function() {
    App.deregister(socket.id);
  });

});
