app.controller('actionCtrl', ['$scope', '$mdDialog', '$mdSidenav', '$state', '$http', '$timeout', 'dashboardService', function ($scope, $mdDialog, $mdSidenav, $state, $http, $timeout, dashboardService) {

    $scope.actionId = $state.params.actionId;
    console.log($scope.actionId);


  }]);