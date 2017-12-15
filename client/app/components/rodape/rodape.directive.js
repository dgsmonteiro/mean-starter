(function() {
  'use strict';

  angular
    .module('base')
    .directive('rodapeDirective', rodapeDirective);

  function rodapeDirective() {
    var directive = {
      controller: 'rodapeController',
      controllerAs: 'rodape',
      restrict: 'E',
      templateUrl: '/app/components/rodape/rodape.view.html'
    };

    return directive;
  }
})();
