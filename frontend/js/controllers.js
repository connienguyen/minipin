var minipinControllers = angular.module('minipinControllers', []);

minipinControllers.controller('TestController', [
    '$scope',
    function($scope) {
	$scope.data = {message: "Hello Bunny"};
    }
]);
