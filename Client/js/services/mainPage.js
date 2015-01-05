'use strict'
softUni.factory('mainData',function($http,$log){
    return{
        getAllAds:function(success){
            $http({method:'GET',url:'http://softuni-ads.azurewebsites.net/api/ads?pagesize=8&startpage=2'})

            .success(function(data,status,headers,config){
                success(data);
            })

            .error(function(data,status,headers,config){
                $log.warn(data);
            })
        },

        getAllTowns:function(success){
            $http({method:'GET',url:'http://softuni-ads.azurewebsites.net/api/towns'})

            .success(function(data,status,headers,config){
                success(data);
            })

            .error(function(data,status,headers,config){
                $log.warn(data);
            })
        },

        getAllCategories:function(success){
            $http({method:'GET',url:'http://softuni-ads.azurewebsites.net/api/categories'})

            .success(function(data,status,headers,config){
                success(data);
            })

            .error(function(data,status,headers,config){
                $log.warn(data);
            })
        } 
    }
})