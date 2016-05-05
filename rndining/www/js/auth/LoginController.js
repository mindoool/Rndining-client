app.controller('LoginController', ['$scope', '$http', '$rootScope', '$filter', '$ionicModal', '$timeout', 'storage', '$state', function ($scope, $http, $rootScope, $filter, $ionicModal, $timeout, storage, $state) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function (modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function () {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function () {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function () {
    console.log('Doing login', $scope.loginData);
    $http.post(host + '/users/login', $scope.loginData)
      .then(function successCallback(response) {
        storage.set('token', response.data.token);
        storage.set('userData', response.data.data);
        console.log(response.data);
        $scope.$root.token = response.data.token;
        $http.defaults.headers.common.Authorization = storage.get('token');
        $scope.$root.user = response.data.data;
        if (response.data.data.isAdmin) {
          $state.go('app.menus');
        } else {
          $state.go('app.mealdatemenus');
        }
      }, function errorCallback(response) {
        alert('이메일 주소나 비밀번호가 잘못되었습니다.');
      });

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function () {
      $scope.closeLogin();
    }, 1000);
  };
}]);
