//(function() {
'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
        'ui.bootstrap'
    ])
    .controller('myAppController', myAppController);

myAppController.$inject = ["$scope"];

function myAppController($scope) {
    $scope.tmp = 'hello world';
}
//})();