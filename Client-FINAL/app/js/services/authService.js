'use strict';

app.factory('authService',
    function ($http, baseServiceUrl) {
        return {
            login: function(userData, success, error) {
                var request = {
                    method: 'POST',
                    url: baseServiceUrl + '/api/user/login',
                    data: userData
                };
                $http(request).success(function(data) {
                    sessionStorage['currentUser'] = JSON.stringify(data);
                    success(data);
                }).error(error);
            },
            
            register: function(userData, success, error) {
                // TODO
            },

            logout: function() {
                // TODO
            },

            getCurrentUser : function() {
                // TODO
            },

            isAnonymous : function() {
                // TODO
            },

            isLoggedIn : function() {
                // TODO
            },

            isNormalUser : function() {
                // TODO
            },

            isAdmin : function() {
                // TODO
            },

            getAuthHeaders : function() {
                // TODO
            }
        }
    }
);
