app.factory('editService', function ($http, baseServiceUrl, authService) {
    return {
        editProfile: function (params, success, error) {
            var request = {
                method: 'PUT',
                url: baseServiceUrl + '/api/user/profile',
                headers: authService.getAuthHeaders(),
                data: params
            };
            $http(request).success(success).error(error);
        },

        changePassword: function (params, success, error) {
            var request = {
                method: 'PUT',
                url: baseServiceUrl + '/api/user/ChangePassword',
                headers: authService.getAuthHeaders(),
                data: params
            };
            $http(request).success(success).error(error);
        },

        editAd: function (data, success, error) {
            var request = {
                method: 'PUT',
                url: baseServiceUrl + '/api/user/ads/' + data.id,
                headers: authService.getAuthHeaders(),
                data: data
            };
            $http(request).success(success).error(error);
        }
    }
});