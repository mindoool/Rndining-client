app.controller('MealController', ['$scope', '$http', '$rootScope', '$filter', function ($scope, $http, $rootScope, $filter) {
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
}]);
