'use strict';

app.controller('UserAdsController',
   function ($scope, userService, notifyService, pageSize) {
      $scope.adsParams = {
          'startPage' : 1,
          'pageSize' : pageSize
      };

      $scope.reloadAds = function() {
          userService.getUserAds(
              $scope.adsParams,
              function success(data) {
                  $scope.ads = data;
              },
              function error(err) {
                  notifyService.showError("Cannot load user ads", err);
              }
          );
      };

      $scope.reloadAds();
	  
      $scope.$on("categorySelectionChanged", function(event, selectedCategoryId) {
          $scope.adsParams.categoryId = selectedCategoryId;
          $scope.adsParams.startPage = 1;
          $scope.reloadAds();
      });

      $scope.$on("townSelectionChanged", function(event, selectedTownId) {
          $scope.adsParams.townId = selectedTownId;
          $scope.adsParams.startPage = 1;
          $scope.reloadAds();
      });
   }
);
