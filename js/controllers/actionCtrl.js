app.controller('actionCtrl', ['$scope', '$mdDialog', '$mdSidenav', '$state', '$http', '$timeout', 'dashboardService', function ($scope, $mdDialog, $mdSidenav, $state, $http, $timeout, dashboardService, actionService) {



    $scope.showAction = function (op) {
        if (op == 1) {
            $scope.showReader = 1;
            $scope.showCommand = 0;
        } else if (op == 2) {
            $scope.showReader = 0;
            $scope.showCommand = 1;
        } else {
            $scope.showReader = 0;
            $scope.showCommand = 0;
        }
    }


  }]);