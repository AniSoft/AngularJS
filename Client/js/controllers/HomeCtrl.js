app.controller('HomeCtrl', ['$scope','authentication',function($scope,authentication){
 	$scope.pageTitle='Home';
 	$scope.isLoggedIn=authentication.isLoggedIn();
}]); 