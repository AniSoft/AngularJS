app.controller('UserAdsController',
    function ($scope, $location, $rootScope, userService, authService, notifyService, pageSize) {
    $scope.personalAdsParams = {
        startPage: 1,
        pageSize: pageSize
    };

    $rootScope.showRightSidebar = false;
    $rootScope.ngViewSize = 'col-md-10';

    $scope.getUserAds = function () {
        userService.getUserAds(
            $scope.personalAdsParams,
            function success (data) {
                $scope.ads = data;
            }, function error (error) {
                notifyService.showError('Error: ' + error);
            }
        );
    };

    $scope.editButtonClicked = function (id) {
        $rootScope.pageTitle = 'Edit Ad';
        userService.getCurrentAd(
            id,
            function success(data) {
                $scope.editAdData = data;
                $rootScope.$broadcast("EditAdData", data);
            }, function error() {

            }
        );
    };

    $scope.deactivateButtonClicked = function (id) {
        userService.deactivateAd(
            id,
            function success () {
                notifyService.showInfo('Success: Ad deactivated!');
            }, function error (err) {
                notifyService.showError('Error: ' + err.message);
            }
        );
    };

    $scope.activateAgainButtonClicked = function (id) {
        userService.publishAgainAd(
            id,
            function success () {
                notifyService.showInfo('Success: Ad activated!');
            }, function error (err) {
                notifyService.showError('Error: ' + err.message);
            }
        );
    };

    $scope.deleteAdButtonClicked = function (id) {
        userService.getCurrentAd(
            id,
            function success (data) {
                $rootScope.deletedAd = data;
            }, function error (error) {
                notifyService.showError('Error: fail deleting ad.');
            }
        );
    };

    // This event is sent by LeftSideBarController when the ads by type is changed
    $scope.$on("adsByType", function (event, statusClickedId) {
        $scope.personalAdsParams.status = statusClickedId;
        $scope.personalAdsParams.startPage = 1;
        $scope.getUserAds();
    });

    $scope.getUserAds();
});