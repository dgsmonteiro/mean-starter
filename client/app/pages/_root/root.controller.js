(function() {
  'use strict';

  angular
    .module('base')
    .controller('rootController', rootController);

  rootController.$inject = [];

  function rootController() {
    /* jshint validthis: true */
    var vm = this;
  }
})();
