(function() {
  'use strict';
  var e, error, module;

  module = null;

  try {
    module = angular.module('ndx');
  } catch (error) {
    e = error;
    module = angular.module('ndx', []);
  }

  module.directive('tap', function() {
    return function(scope, element, attr) {
      var hammerTap;
      hammerTap = new Hammer(element[0], {});
      return hammerTap.on('tap', function(ev) {
        scope.$event = ev;
        return scope.$apply(function() {
          return scope.$eval(attr.tap);
        });
      });
    };
  });

}).call(this);

//# sourceMappingURL=index.js.map
