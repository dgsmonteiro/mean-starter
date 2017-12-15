(function() {
  'use strict';

  angular
    .module('base')
    .factory('apiService', apiService);

  apiService.$inject = [];

  function apiService() {
    /* jshint validthis: true */
    this.exemplo = exemplo;

    function exemplo() {
      return true;
    }
  }
})();
