'use strict';

// The RegisterController is responsible for the "User Registration" screen
app.controller('RegisterController',
    function ($scope, $location, townsService, authService, notifyService) {
        $scope.categories = categoriesService.getCategories();
        $scope.towns = townsService.getTowns();
    }
);
