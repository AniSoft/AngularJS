app.controller('TownsCtrl', ['$scope', function($scope){
	townsData.getTowns()
		.$promise
		.then(function(data){
			$scope.towns=data;
		}); 
}])