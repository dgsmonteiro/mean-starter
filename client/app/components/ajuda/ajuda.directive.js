(function() {
  'use strict';

  angular
    .module('base')
    .directive('ajudaDirective', ajudaDirective);

    function ajudaDirective(){
      var directive = {
          restrict: 'E',
          templateUrl: '/app/components/ajuda/ajuda.view.html',
          scope: {},
          controller: 'ajudaController',
          controllerAs: 'vm'
      };
      return directive;
    }

})();
