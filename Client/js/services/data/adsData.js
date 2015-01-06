app.factory('adsData', ['$resource','baseServiceUrl',function ($resource,baseServiceUrl) {
	var resource=$resource(baseServiceUrl+'ads:adId',{adId:'@id'},{ 
		update:{method:'PUT'}
	})

	function getPublicAds(){
		return $resource.query();
	}

	function editAd(adId,ad){
		return resource.update({id:adId},ad);
	}

	function getAdById(adId){
		return resource.get({id:adId});
	}

	return {
		getPublicAds:getPublicAds
		edit:
	};
}])