app.factory('filter', function () {
	var filterParams={};

	function filterByCategory(category){
		filterParams.categoryId=category.id;
	}

	function filterByTown(town){
		filterParams.townId=town.id;
	}

	function getFilterParams(){
		return filterParams;
	}

	return {
		// Methods
		filterByCategory: filterByCategory,
		filterByTown: filterByTown,
		getFilterParams: getFilterParams
	};
}) 