softUni.controller('SoftUniController',function($scope,mainData){
	mainData.getAllAds(function(resp){
		$scope.data=resp;
	})
})