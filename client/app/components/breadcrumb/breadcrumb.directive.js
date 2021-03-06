(function() {
  'use strict';

  angular
    .module('base')
    .directive('breadcrumb', breadcrumb);


  function breadcrumb() {
      var directive = {
        restrict: 'E',
        templateUrl: 'app/components/breadcrumb/breadcrumb.view.html',
        controller: 'breadcrumbController',
        controllerAs: 'breadcrumbController'
      };
      return directive;
  }

})();
