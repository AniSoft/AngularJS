app.factory('categoriesData', ['$resourse','baseServiceUrl',function ($resourse,baseServiceUrl) {
	function getCategories(){
		return $resource(baseServiceUrl+'categories');
	}

	return {
		getCategories:getCategories
	}; 
}])