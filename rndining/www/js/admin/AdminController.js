app.controller('AdminController', ['$scope', '$http', '$rootScope', '$filter', '$ionicModal', 'storage', '$state', function ($scope, $http, $rootScope, $filter, $ionicModal, storage, $state) {
  $scope.fileContent = null;
  $scope.uploadMenus = function () {
    var content = {
      content: $scope.fileContent
    };
    console.log($scope.fileContent);
    $http.post(host + '/menu-date-relations', content)
      .then(function (response) {
        $scope.hide();
        console.log(response)
      })
  };

  //가게 등록을 위한 과정
  $scope.stores = {
    "name":null,
    "category":null,
    "menus": []
  };
  $scope.menuObj = {
    "name":null,
    "price":null
  };

  $scope.uploadStores = function () {
    var content = {
      content: $scope.fileContent
    };
    console.log($scope.fileContent);
    $http.post(host + '/stores', content)
      .then(function (response) {
        $scope.hide();
        console.log(response)
      })
  };

  $scope.addMenus = function () {

  };

}]);
