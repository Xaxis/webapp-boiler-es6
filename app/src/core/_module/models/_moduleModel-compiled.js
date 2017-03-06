'use strict';

/**
 * Backbone module model template
 */
define(['backbone'], function (Backbone) {
  var _ModuleModel = Backbone.Model.extend({
    defaults: function defaults() {
      return {
        id: 0
      };
    }
  });

  return _ModuleModel;
});
//# sourceMappingURL=_moduleModel-compiled.js.map
