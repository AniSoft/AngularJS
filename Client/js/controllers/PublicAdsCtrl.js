app.controller('PublicAdsCtrl', ['$scope','adsData','filter', function($scope,adsData,filter){
	$scope.ready=false;

	function loadPublicAds(filterParams){
		filterParams=filterParams ||{}
		adsData.getPublicAds()
		.$promise
		.then(function(data){
			$scope.adsData=data;
			$scope.ready=true;
		})
	}

	loadPublicAds();

	$scope.on('categoryClicked', function(event,category){
		loadPublicAds(filter.getFilterParams());
	})	
}])