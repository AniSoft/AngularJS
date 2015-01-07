'use strict';

// The AppController holds the presentation logic for the entire app (common for all screens)
app.controller('AppController',
    function ($scope, $location, authService, notifyService) {
		// Put the authService in the $scope to make it accessible from all screens
		$scope.authService = authService;
        
        $scope.logout = function() {
            authService.logout();
            notifyService.showInfo("Logout successful");
            $location.path('/');
        };
    }
);