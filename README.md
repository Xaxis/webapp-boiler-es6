# webapp-boiler-es6

## Summary

Scaffolding for rapidly building node/backbone based single page web applications.

I'm continually building different web applications/single page web applications based on Node and Backbone. Through 
these experiences I'm continually refining my processes. One effort towards increased efficiency is spinning up a new 
project as quickly as possible.

This boilerplate aims to make getting started developing using common build tools and practices fast and as painless
as possible. My aim is to leverage a combination of AMD modules with require.js in combination with ES6 modules in the
same environment and for backwards compatibility.

## Features

* Prescriptive yet flexible (scalable) directory structure scaffolding
* Node.js integration w/ express
* ES6 transpiling with Babel
* ES6 integrated require.js module loading support
* ES6 module template example
* Require.js integration/module template example
* Backbone MVC module pattern/module template example
* Backbone router integration and template example
* Socket.io integration and connection example
* Cleanly organized SASS/CSS structure
* [fluid-grid](https://github.com/Xaxis/fluid-grid) integration 
* [jQuery.devgrid](https://github.com/Xaxis/jquery.devgrid) integration
* Modernizr integration
* Grunt automation and SASS compilation
* Auto reloading of Node.js server with nodemon

## Author

Wil Neeley ( [@wilneeley](http://twitter.com/wilneeley) / [github.com](https://github.com/Xaxis) )

## Getting started

1. Clone the repo into your target project directory.
2. Make sure you have node and npm installed.
3. From your project root run `npm install` to install dependencies.
4. Make sure you have nodemon installed globaly. Run `npm install -g nodemon` from your project root.
5. From your terminal run `nodemon server.js` to start the node server.
6. From your terminal in your project root run `grunt` to initialize SASS/JS file watcher.
