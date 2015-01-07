'use strict';

app.factory('adsService',
    function ($resource, baseServiceUrl) {
        var adsResource = $resource(
            baseServiceUrl + '/api/ads',
            null,
            {
                'getAll': {method:'GET'}
            }
        );

        return {
            getAds: function(params, success, error) {
                return adsResource.getAll(params, success, error);
            }
        }
    }
);

// 
app.factory('userAdsService',
    function ($http, baseServiceUrl, authService) {
        return {
            findOne: function(id, success, error) {
                var request = {
                    method: "GET",
                    url: baseServiceUrl + '/api/user/Ads/' + id,
                    headers: authService.getAuthHeaders()
                };

                $http(request).success(success).error(error);
            },
            edit: function(params, success, error) {
                var request = {
                    method: "PUT",
                    url: baseServiceUrl + '/api/user/Ads/' + params.id,
                    headers: authService.getAuthHeaders(),
                    data: JSON.stringify(params)
                }

                $http(request).success(success).error(error);
            }
        }
    }
);

app.factory('categoriesService',
    function ($resource, baseServiceUrl) {
        var categoriesResource = $resource(
            baseServiceUrl + '/api/categories'
        );

        return {
            getCategories: function (success, error) {
                return categoriesResource.query(success, error);
            }
        }
    }
);

app.factory('townsService',
    function ($resource, baseServiceUrl) {
        var townsResource = $resource(
            baseServiceUrl + '/api/towns'
        );

        return {
            getTowns: function(success, error) {
                return townsResource.query(success, error);
            }
        }
    }
);