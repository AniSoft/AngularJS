app.controller('LoginCtrl', ['$scope', function ($scope) {
		$scope.login=function(user){
			userData.login(user);
	}	
}]);