app.controller('EditAdsController', function ($scope, $rootScope, categoriesService, townsService,
  editService, notifyService, $location, userService) {
    $scope.$on("EditAdData", function (event, editAdData) {
        $scope.adData = editAdData;
    });

    $rootScope.showRightSidebar = false;
    $rootScope.ngViewSize = 'col-md-10';

    $scope.towns = townsService.getTowns();
    $scope.categories = categoriesService.getCategories();

    $scope.editAd = function (adData) {
        editService.editAd(
            adData,
            function success () {
                notifyService.showInfo('Success: Advertisement edited!');
                $location.path("/user/ads");
            }, function error (err) {
                notifyService.showError('Error: ' + err);
            }
            );
    };

    $scope.fileSelected = function(fileInputField) {
        delete $scope.adData.imageDataUrl;
        var file = fileInputField.files[0];
        if (file.type.match(/image\/.*/)) {
            var reader = new FileReader();
            reader.onload = function() {
                $scope.adData.imageDataUrl = reader.result;
                $(".image-box").html("<img src='" + reader.result + "'>");
            };
            reader.readAsDataURL(file);
        } else {
            $(".image-box").html("<p>File type not supported!</p>");
        }
    };

    $scope.deleteAdButtonClicked = function (id) {
        userService.getCurrentAd(
            id,
            function success (data) {
                $rootScope.deletedAd = data;
            }, function error (error) {
                notifyService.showError('Error: fail deleting ad.');
            }
            );
    }

    $scope.deleteAdImage = function (adData) {
        $scope.adData.imageDataUrl = null;
        editService.deleteAdImage(
            adData,
            function success () {
                notifyService.showInfo('Success: Image deleted!');
                // $location.path("/user/ads");
            }, function error (err) {
                notifyService.showError('Error: ' + err);
            }
            );
    };
});