app.directive('leftPublicSidebar', function () {
	return {
		controller:'HomeCtrl',
		restrict: 'E',
		templateUrl: 'templates/public/left-sidebar.html',
		replace: true,
	};
}); 


