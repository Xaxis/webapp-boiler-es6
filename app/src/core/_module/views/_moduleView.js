/**
 * Backbone module view template
 */
define([
  'jquery',
  'underscore',
  'backbone',
  'text!../templates/_module.tpl.html',
  '../collections/_moduleCollection'
], function(
  $,
  _,
  Backbone,
  _ModuleTemplate,
  _ModuleCollection
) {
  var _ModuleView = Backbone.View.extend({
    el: $('body'),

    module_template: _.template(_ModuleTemplate),

    events: {
      'click': 'defaultHandler'
    },

    initialize: function() {
      var
        _this             = this;

      // Bind methods
      _.bindAll(this,
        'defaultHandler'
      );

      // Initialize model collection
      this.collection = new _ModuleCollection();
    },

    defaultHandler: function() {
    }

  });

  return _ModuleView;
});
