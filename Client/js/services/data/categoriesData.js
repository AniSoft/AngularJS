app.factory('categoriesData', ['$resourse','baseServiceUrl',function ($resourse,baseServiceUrl) {
	function getCategories(){
		return $resource(baseServiceUrl+'categories').query();
	}

	return {
		getCategories:getCategories
	}; 
}])