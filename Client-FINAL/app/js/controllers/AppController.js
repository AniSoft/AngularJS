'use strict';

// The AppController holds the presentation logic for the entire app (common for all screens)
app.controller('AppController',
    function ($scope, authService) {
      // Put the authService in the $scope to make it accessible from all screens
      $scope.authService = authService;
    }
);