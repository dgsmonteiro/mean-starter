(function() {
  'use strict';

  angular
    .module('base')
    .directive('usuarioDirective', usuarioDirective);

  function usuarioDirective() {
    var directive = {
      controller: 'usuarioController',
      controllerAs: 'usuario',
      restrict: 'E',
      templateUrl: '/app/components/usuario/usuario.view.html'
    };
    return directive;
  }
})();
