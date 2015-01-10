app.controller('DeactivateAdController', function ($scope, userService, notifyService) {
    $scope.deactivate = function (id) {
        $scope.someId = id;
    };
    /*$scope.deactivate = function (id) {
        userService.deactivateAd(
            id,
            function success () {
                notifyService.showInfo('Success: Advertisement deactivated!');
            }, function error (err) {
                notifyService.showError('Error: ' + err);
            }
        );
    }*/
});