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
        templateUrl: 'templates/user/edit-add.html',
        controller: 'UserEditAdController'
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
