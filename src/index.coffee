'use strict'
module = null
try
  module = angular.module 'ndx'
catch e
  module = angular.module 'ndx', []
module.directive 'tap', ->
  (scope, element, attr) ->
    hammerTap = new Hammer(element[0], {})
    hammerTap.on 'tap', (ev) ->
      scope.$event = ev
      scope.$apply ->
        scope.$eval attr.tap
