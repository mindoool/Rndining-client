app.controller('UserController', ['$scope', '$http', '$rootScope', '$filter', '$ionicModal', 'storage', '$state', function ($scope, $http, $rootScope, $filter, $ionicModal, storage, $state) {
  $scope.currentTime = new Date().getTime();

  $scope.user = $rootScope.user;

  // Create the signup modal that we will use later
  $ionicModal.fromTemplateUrl('templates/auth/edit-user.html', {
    scope: $scope
  }).then(function (modal) {
    $scope.modal = modal;
  });

  // Triggered in the signup modal to close it
  $scope.closeEditUser = function () {
    $scope.modal.hide();
    $scope.user = $rootScope.user;
  };

  // Open the signup modal
  $scope.editUser = function () {
    $scope.modal.show();
  };

  $scope.doEditUser = function () {
    $scope.user.birth = $filter('date')($scope.user.birth, 'yyyy-MM-dd');
    $http.put(host + '/users/'+$scope.user.id, $scope.user)
      .then(function successCallback(response) {
        console.log(response);
        storage.set('token', response.data.token);
        storage.set('userData', response.data.data);
        $scope.$root.token = response.data.token;
        $http.defaults.headers.common.Authorization = storage.get('token');
        $scope.$root.user = response.data.data;
        $state.go('app.userinfos');
        $scope.closeEditUser()
      }, function errorCallback() {
        alert('회원 정보를 바꿀 수 없습니다. 내용 확인 후 다시 시도해 보세요.');
      });

  };

}]);
