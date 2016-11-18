var mig = angular.module('migApp', ['ngMaterial', 'ngRoute', 'angularCSS']);

mig.controller('migController', ['$scope', function ($scope) {

    $scope.hello = "hello World!";

}])