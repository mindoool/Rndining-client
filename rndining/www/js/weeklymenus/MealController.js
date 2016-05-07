app.controller('MealController', ['$scope', '$http', '$rootScope', '$filter', '$ionicModal', function ($scope, $http, $rootScope, $filter, $ionicModal) {
  $scope.currentTime = new Date().getTime();

  $scope.changeDate = function (forward) {
    if (forward) {
      $scope.currentTime += 86400000;
    } else {
      $scope.currentTime -= 86400000;
    }
    $scope.getMealDateMenuLists();
  };

  $scope.getMealDateMenuLists = function () {
    var params = {
      "date": $filter('date')(new Date($scope.currentTime), 'yyyy-MM-dd')
    };
    $http.get(host + '/meal-date-menus', {params: params, cache: true})
      .then(function (response) {
        console.log(response);
        $scope.mealDateMenus = response.data.data;
      });
  };
  $scope.getMealDateMenuLists();

  $scope.fileContent = null;
  $scope.uploadMenus = function () {
    var content = {
      content: $scope.fileContent
    };
    console.log($scope.fileContent);
    $http.post(host + '/problems', content)
      .then(function (response) {
        $scope.hide();
        console.log(response)
      })
  };

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/meal-date-menu.html', {
    scope: $scope
  }).then(function (modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeMenu = function () {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.openMenu = function (mealDateMenu) {
    console.log('modal open')
    $scope.modal.show();
    $scope.mealDateMenu = mealDateMenu
  };
}]);
