app.factory('adsData', ['$resource','baseServiceUrl',function ($resource,baseServiceUrl) {
	var resource=$resource(baseServiceUrl+'ads:adId',{adId:'@id'},{ 
		update:{method:'PUT'}
	})

	function getPublicAds(){
		return resource.get();
	}

	function editAd(adId,ad){
		return resource.update({id:adId},ad);
	}

	function getAdById(adId){
		return resource.get({id:adId});
	}

	function addAd(ad){
		return resource.save(ad);
	}

	function deleteAd(adId){
		return resource.delete({id:adId});
	}

	return {
		getPublicAds:getPublicAds,
		edit:editAd,
		getAdById: getAdById,
		add: addAd,
		delete: deleteAd
	};
}])