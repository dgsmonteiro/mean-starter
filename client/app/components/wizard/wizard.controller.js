(function() {
    'use strict';

    angular
        .module('base')
        .controller('wizardController', wizardController);

    wizardController.$inject = ['$scope'];

    function wizardController($scope) {
        $scope.step = 1;
        $scope.nextStep = nextStep;

        function nextStep (step) {
          $scope.step = step;
        }
    }

})();
