app.controller('DeleteAdController', function ($scope, $location, $rootScope, userService, notifyService) {
    $scope.deleteAd = function (id) {
        userService.deleteAd(
            id,
            function success () {
                notifyService.showInfo('Success: Ad deleted!');
                $location.path('/user/ads');
            }, function error (err) {
                notifyService.showError('Error: ' + err.message);
            }
        );
    };
});