(function() {
  'use strict';

  angular
    .module('ced')
    .directive('scrollTop', scrollTop);

  function scrollTop() {
      var directive = {
        restrict: 'E',
        templateUrl: 'app/components/scroll-top/scroll-top.view.html',
        controller: 'scrollTopController',
        controllerAs: 'scrollTopController'
      };
      return directive;
  }

})();
