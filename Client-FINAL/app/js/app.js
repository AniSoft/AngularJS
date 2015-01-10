'use strict';

var app = angular.module('app', ['ngRoute', 'ngResource','ui.bootstrap.pagination']);

app.constant('baseServiceUrl', 'http://softuni-ads.azurewebsites.net');
app.constant('pageSize', 2);

app.config(function ($routeProvider) {

    $routeProvider.when('/', {
        templateUrl: 'templates/home.html',
        controller: 'HomeController'
    });

    $routeProvider.when('/login', {
        templateUrl: 'templates/login.html',
        controller: 'LoginController'
    });

    $routeProvider.when('/register', {
        templateUrl: 'templates/register.html',
        controller: 'RegisterController'
    });

    $routeProvider.when('/user/profile', {
        templateUrl: 'templates/user/edit-profile.html',
        controller: 'EditProfileController'
    });

   $routeProvider.when('/user/password', {
        templateUrl: 'templates/user/change-password.html',
        controller: 'ChangePasswordController'
    });

    $routeProvider.when('/user/ads/publish', {
        templateUrl: 'templates/partial/publish-new-ad.html',
        controller: 'UserPublishNewAdController'
    });

    //
    $routeProvider.when('/user/ads', {
        templateUrl: 'templates/home.html',
        controller: 'UserAdsController'
    });

    //
    $routeProvider.when('/user/ads/edit/:id/:title', {
        templateUrl: 'templates/user/edit-ads.html',
        controller: 'UserEditAdController'
    });

    $routeProvider.when('/user/ads/:id', {
        templateUrl: 'templates/user/edit-ads.html',
        controller: 'EditAdsController'
    });
    
    $routeProvider.when('/user/ads/publishAgain/:id', {
        redirectTo: '/user/ads'
    });

    $routeProvider.when('/user/ads/deactivate/:id', {
        redirectTo: '/user/ads'
    });

    $routeProvider.when('/user/ads/delete/:id', {
        templateUrl: 'templates/user/confirm-delete.html',
        controller: 'DeleteAdController'
    });

    $routeProvider.otherwise(
        { redirectTo: '/' }
    );

});

app.run(function ($rootScope, $location, authService) {
  $rootScope.$on('$locationChangeStart', function (event) {
    if ($location.path().indexOf("/user/") != -1 && !authService.isLoggedIn()) {
      // Authorization check: anonymous site visitors cannot access user routes
      $location.path("/");
    }
  });
});