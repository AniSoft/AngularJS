'use strict';

// The RegisterController is responsible for the "User Registration" screen
app.controller('RegisterController',
    function ($scope, $location, townsService, authService, notifyService) {
        $scope.userData = {townId: null};

        // TODO: load the towns in $scope (for the towns drop-down list)

        $scope.register = function(userData) {
            authService.register(userData,
                function success() {
                    // TODO: display success message
                    // TODO: redirect to login screen
                },
                function error(err) {
                    notifyService.showError("User registration failed", err);
                }
            );
        };

    }
);
