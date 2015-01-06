app.directive('publicAds', function () {
	return {
		controller:'PublicAdsCtrl',
		restrict: 'E',
		templateUrl:'templates/public/public-ads.html',
		replace:true,

	};
});