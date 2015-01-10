app.controller('EditProfileController', function ($scope, $rootScope, notifyService, userService,
                                                  editService, townsService) {
    $rootScope.showRightSidebar = false;
    $rootScope.ngViewSize = 'col-md-10';

    $scope.data = function () {
        userService.getUserData(
            null,
            function (data) {
                $scope.userData = data;
                $scope.userData.username = JSON.parse(sessionStorage['currentUser']).username;
                $scope.userData.phone = data.phoneNumber;
            },
            function (err) {
                console.log('Error getting user data: ' + err);
            }
        );
    };

    $scope.editProfile = function (data) {
        editService.editProfile(data,
        function success () {
            notifyService.showInfo('Success: profile edited!');
        }, function error (err) {
            notifyService.showError('Error: ' + err);
        });
    };

    $scope.towns = townsService.getTowns();

    $scope.data();
});