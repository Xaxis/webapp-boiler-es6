# webapp-boiler-es6

## Summary

Scaffolding for rapidly building node/backbone based single page web applications.

I'm continually building different single page web applications based on Node, Backbone, require.js, and other technologies. Through 
these experiences I'm always attempting to refine my processes. One effort towards increased efficiency is spinning up a new 
project as quickly as possible with a boilerplate framework that has the base of everything I need to get started.

This boilerplate project aims to make getting started developing using common build tools and practices as fast and painless
as possible. Leveraging a combination of AMD and ES6 modules, prescriptive SASS structures and with node.js running the backend I have
all the tools I need to get started building sophisticated single page applications.

## Features

* Prescriptive yet flexible (scalable) directory structure scaffolding
* Node.js integration w/ express and socket.io
* ES6 transpiling with Babel
* ES6 integrated require.js module loading support
* ES6 module template example
* Require.js integration/module template example
* Backbone MVC module pattern/module template example
* Backbone router integration and template example
* Socket.io integration and connection example
* Cleanly organized SASS/CSS structure
* [fluid-grid](https://github.com/Xaxis/fluid-grid) integration - SASS based column/grid system
* [jQuery.devgrid](https://github.com/Xaxis/jquery.devgrid) integration - Grid system and breakpoint support/visualization
* [Modernizr](https://modernizr.com/) integration - HTML, CSS, JavaScript feature detection
* Grunt task runner with SASS compilation, linting, and more
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
