'use strict';

app.controller('LeftSidebarController', function ($scope, $rootScope) {
    $scope.selectedMenuItem = 'Home';

    $scope.menuClick = function (option) {
        $rootScope.menuOption = option;
        $rootScope.pageTitle = option;
        $scope.selectedMenuItem = option;
        $rootScope.pageSubtitle = null;
    };

    $scope.myAdsMenuClick = function (option) {
        $scope.selectedMyAds = option;
        $rootScope.pageSubtitle = option;
    };

    $scope.adsTypeClicked = function (status) {
        $scope.statusClickedId = status;
        $rootScope.$broadcast("adsByType", status);
    };
});