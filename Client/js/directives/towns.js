app.directive('towns', function () {
	return {
		controller:'TownsCtrl',
		restrict: 'E',
		templateUrl: 'templates/public/towns.html', 
		replace: true,
	};
});