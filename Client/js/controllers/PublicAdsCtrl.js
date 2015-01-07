app.controller('PublicAdsCtrl', ['$scope','adsData', function($scope,adsData){
	$scope.ready=false;
	adsData.getPublicAds()
		.$promise
		.then(function(data){
			$scope.adsData=data;
			$scope.ready=true;
		})
}])