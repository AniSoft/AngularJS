'use strict';

app.controller('UserEditAdController',
    function ($scope, $location, $routeParams, townsService, categoriesService,
              userService, notifyService, userAdsService) {

        userAdsService.findOne($routeParams.id, function(response) {
            $scope.adData = response;
        });

        $scope.categories = categoriesService.getCategories();
        $scope.towns = townsService.getTowns();

        $scope.editAd = function(adData) {
            userAdsService.edit(
                adData,
                function() {
                    notifyService.showInfo("Succesfully edited ad");
                },
                function() {
                    notifyService.showError("Error editting ad");
                }
            );
        }
    }
);