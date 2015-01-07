'use strict';

// The HomeController holds the presentation logic for the home screen
app.controller('HomeController',
    function ($scope, $rootScope, adsService, notifyService, pageSize) {
      adsService.getAds(
            null,
            function success(data) {
                // TODO: put the ads in the scope
            },
            function error(err) {
                notifyService.showError("Cannot load ads", err);
            }
        );
   }
);