'use strict';

app.factory('userService',
    function ($http, baseServiceUrl, authService) {
        return {
            createNewAd: function (adData, success, error) {
                var request = {
                    method: 'POST',
                    url: baseServiceUrl + '/api/user/ads',
                    headers: authService.getAuthHeaders(),
                    data: adData
                };
                $http(request).success(success).error(error);
            },

            getUserAds: function (params, success, error) {
                var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/api/user/ads',
                    headers: authService.getAuthHeaders(),
                    params: params
                };
                $http(request).success(success).error(error);
            },

            getUserData: function (params, success, error) {
                var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/api/user/profile',
                    headers: authService.getAuthHeaders(),
                    params: params
                };
                $http(request).success(success).error(error);
            },

            getCurrentAd: function (id, success, error) {
                var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/api/user/ads/' + id,
                    headers: authService.getAuthHeaders()
                };
                $http(request).success(success).error(error);
            },

            deactivateAd: function (id, success, error) {
                var request = {
                    method: 'PUT',
                    url: baseServiceUrl + '/api/user/ads/deactivate/' + id,
                    headers: authService.getAuthHeaders()
                };
                $http(request).success(success).error(error);
            },

            publishAgainAd: function (id, success, error) {
                var request = {
                    method: 'PUT',
                    url: baseServiceUrl + '/api/user/ads/publishAgain/' + id,
                    headers: authService.getAuthHeaders()
                };
                $http(request).success(success).error(error);
            },

            deleteAd: function (id, success, error) {
                var request = {
                    method: 'DELETE',
                    url: baseServiceUrl + '/api/user/ads/' + id,
                    headers: authService.getAuthHeaders()
                };
                $http(request).success(success).error(error);
            }
        }
    }
);