app.controller('StoreController', ['$scope', '$http', '$rootScope', '$filter', '$ionicModal', 'storage', '$state', function ($scope, $http, $rootScope, $filter, $ionicModal, storage, $state) {
  //가게 정보 조회
  $scope.storeName = null;
  $scope.storeCategory = null;
  $scope.stores = [];

  $scope.getStores = function () {
    var params = {
      "name": $scope.storeName,
      "category": $scope.storeCategory
    };
    $http.get(host + '/stores', {params: params, cache: true})
      .then(function (response) {
        console.log(response);
        $scope.stores = response.data.data;
      });
  };
  $scope.getStores();
}]);
