var mig = angular.module('migApp', ['ngMaterial', 'ngRoute', 'angularCSS']);

mig.controller('migController', ['$scope', '$mdDialog', function ($scope, $mdDialog) {

    $scope.createOrder = function (ev) {
        $mdDialog.show({
                controller: CreateOrder,
                templateUrl: 'view/createOrder.tmpl.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true
            })
            .then(function (answer) {
                //                $scope.status = 'You said the information was "' + answer + '".';
            }, function () {
                //                $scope.status = 'You cancelled the dialog.';
            });
    }




}])


var CreateOrder = function ($scope, $mdDialog) {
    $scope.hide = function () {
        $mdDialog.hide();
    };
    $scope.cancel = function () {
        $mdDialog.cancel();
    };
    $scope.answer = function (answer) {
        $mdDialog.hide(answer);
    };
}