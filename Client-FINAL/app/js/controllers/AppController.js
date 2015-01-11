'use strict';

// The AppController is the main controller for application  and holds the presentation logic for the entire app (common for all screens)
//It is attached to the app <html> element, so its logic is shared between all screens. 
//It will hold common logic needed by the app header, app content and sidebars.
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