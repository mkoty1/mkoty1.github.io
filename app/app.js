//(function() {
'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
        'ngRoute',
        'ui.bootstrap'
    ])
    .config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.otherwise({redirectTo: '/view1'});
    }])
    .controller('myAppController', myAppController);

myAppController.$inject = ["$scope"];

function myAppController($scope) {
    $scope.tmp = 'hello world';
}
//})();