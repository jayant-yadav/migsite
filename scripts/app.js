var mig = angular.module('migApp', ['ngMaterial', /*'ui.router'*/ , 'angularCSS']);

//mig.config(function ($stateProvider) {
//    var createOrder = {
//        name: 'createOrder',
//        url: '/Create_order',
//        templateUrl: './view/createOrder.tmpl.html'
//            //        controller: 'createOrderController.js'
//            //        component: 'createOrder'
//    }
//
//
//    $stateProvider.state(createOrder);
//});




//mig.component('createOrder', {
//    //    template: './view/createOrder.tmpl.html',
//    template: '<h1>HImANSHU</h1>'
//        //    controller: 'controller/createOrderController.js'
//})

mig.controller('migController', ['$scope', '$mdDialog', function ($scope, $mdDialog) {


    $scope.open = function () {
        $scope.file = 1;
    }

    $scope.createOrder = function (ev) {
        $mdDialog.show({
                //                controller: CreateOrder,
                controller: CreateOrder,
                templateUrl: 'createOrder.tmpl.html',
                //                templateUrl: '.view/createOrder.tmpl.html',
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





    $scope.action = function (ev) {
        $mdDialog.show({
                //                controller: CreateOrder,
                controller: CreateOrder,
                templateUrl: 'action.tmpl.html',
                //                templateUrl: '.view/createOrder.tmpl.html',
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