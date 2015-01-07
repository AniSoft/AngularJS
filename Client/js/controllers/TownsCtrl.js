app.controller('TownsCtrl', ['$scope','townsData', function($scope,townsData){
	//$scope.towns=townsData.getTowns();	

	townsData.getTowns()
		.$promise
		.then(function(data){
			$scope.towns=data;
	});
}]);