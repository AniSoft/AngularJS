app.factory('townsData', ['$resource','baseServiceUrl',function ($resource,baseServiceUrl) {
	var resource=$resource(baseServiceUrl+'towns');

	function getAllTowns(){
		return $resource.get();
	}
	return {
		getTowns: getAllTowns
	};
}]);