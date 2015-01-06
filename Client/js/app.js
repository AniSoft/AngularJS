'use strict'

var app=angular.module('adsApp',['ngRoute','ngResource','LocalStorageModule']);

app.constant('baseServiceUrl', 'http://softuni-ads.azurewebsites.net/api/');

app.config(['$routeProvider','localStorageServiceProvider',function($routeProvider,localStorageServiceProvider){
	$routeProvider.when('/',{
		templateUrl: 'templates/home.html',
		controller: 'HomeCtrl'
	});

	$routeProvider.when('/login',{
		templateUrl:'/templates/login.html',
		controller:'LoginCtrl'
	});

	$routeProvider.when('/register',{
		templateUrl:'/templates/register.html',
		controller:'RegisterCtrl'
	});

	$routeProvider.otherwise({ 
		redirectTo: '/' 
	});

	// Web storage settings
	localStorageServiceProvider.setStorageType('localStorage');
	localStorageServiceProvider.setPrefix('adsApp');

}]);


