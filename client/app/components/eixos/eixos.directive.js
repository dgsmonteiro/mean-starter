(function() {
  'use strict';

  angular
    .module('base')
    .directive('eixosDirective', eixosDirective);

  function eixosDirective(){
    var directive = {
      controller: 'eixosController',
      controllerAs: 'eixos',
      restrict: 'E',
      scope: {},
      templateUrl: '/app/components/eixos/eixos.view.html'
    };
    return directive;
  }
})();
