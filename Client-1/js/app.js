var softUni=angular.module('softUniModule',['ngRoute'])
.config(function($routeProvider){
	$routeProvider.when('/register',{
		templateUrl:'templates/register.html'//,
		//controller:'SoftUniController'
	});
	$routeProvider.when('/ads',{
		templateUrl:'templates/all-ads.html'
	})
	$routeProvider.when('/login',{
		templateUrl:'templates/login.html'
	})
	$routeProvider.otherwise({redirectTo:'/ads'});
});