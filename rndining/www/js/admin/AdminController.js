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

  $scope.isObject = function(value) {
    if(typeof value == 'object') {
      return true
    } else {
      return false
    }
  };

  //가게 등록을 위한 과정
  $scope.stores = {
    "name": null,
    "category": null,
    "menuObj": []
  };

  if (!$scope.stores.menuObj || $scope.stores.menuObj.length === 0) {
    $scope.stores.menuObj = [{
      name: null,
      price: null
    }];
  }

  $scope.addMenu = function () {
    $scope.stores.menuObj.push({
      name: null,
      price: null
    });
    console.log($scope.stores.menuObj);
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

}]);
