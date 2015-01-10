'use strict';

// The HomeController holds the presentation logic for the home screen
app.controller('HomeController',
    function ($scope, $rootScope, adsService, notifyService, pageSize) {

        $scope.adsParams = {
            'startPage' : 1,
            'pageSize' : pageSize
        };

        $rootScope.showRightSidebar = true;
        $rootScope.ngViewSize = 'col-md-8';

        $scope.reloadAds = function() {
            adsService.getAds(
                $scope.adsParams,
                function success(data) {
                    $scope.ads = data;
                },
                function error(err) {
                    notifyService.showError("Cannot load ads", err);
                }
            );
        };

        $scope.reloadAds();

        // This event is sent by RightSideBarController when the current category is changed
        $scope.$on("categorySelectionChanged", function(event, selectedCategoryId) {
            $scope.adsParams.categoryId = selectedCategoryId;
            $scope.adsParams.startPage = 1;
            $scope.reloadAds();
        });

        // This event is sent by RightSideBarController when the current town is changed
        $scope.$on("townSelectionChanged", function(event, selectedTownId) {
            $scope.adsParams.townId = selectedTownId;
            $scope.adsParams.startPage = 1;
            $scope.reloadAds();
        });
   }
);