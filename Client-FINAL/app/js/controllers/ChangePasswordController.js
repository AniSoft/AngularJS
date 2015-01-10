app.controller('ChangePasswordController', function ($scope, editService, notifyService, $location) {
    $scope.changePassword = function (data) {
        editService.changePassword(
            data,
            function success (success) {
                notifyService.showInfo('Success: password changed!');
                $location.path('/user/profile');
            }, function error (error) {
                for(var state in error.modelState) {
                    $scope.currentErr = error.modelState[state][0];
                }
                notifyService.showError('Error: ' + $scope.currentErr);
            }
        );
    };

    $scope.checkNewPassword = function (password, confirmPassword) {
        notifyService.showError(password + ', ' + confirmPassword)
        (password !== confirmPassword) ? notifyService.showError('Error: passwords do not match!') : '';
    };
});