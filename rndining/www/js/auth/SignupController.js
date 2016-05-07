app.controller('SignupController', ['$scope', '$http', '$rootScope', '$filter', '$ionicModal', '$timeout', function ($scope, $http, $rootScope, $filter, $ionicModal, $timeout) {
  // Form data for the signup modal
  $scope.signupData = {};

  // Create the signup modal that we will use later
  $ionicModal.fromTemplateUrl('templates/auth/signup.html', {
    scope: $scope
  }).then(function (modal) {
    $scope.modal = modal;
  });

  // Triggered in the signup modal to close it
  $scope.closeSignup = function () {
    $scope.modal.hide();
  };

  // Open the signup modal
  $scope.signup = function () {
    $scope.modal.show();
  };

  // Perform the signup action when the user submits the signup form
  $scope.doSignup = function () {
    console.log('Doing signup', $scope.signupData);
    $http.post(host + '/users', $scope.signupData)
      .then(function (response) {
        console.log(response);
        $scope.hide()
      });

    // Simulate a signup delay. Remove this and replace with your signup
    // code if using a signup system
    $timeout(function () {
      $scope.closeSignup();
    }, 1000);
  };
}]);
