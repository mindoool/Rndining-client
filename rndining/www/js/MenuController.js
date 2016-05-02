app.controller('MenuController', ['$scope', 'storage', '$mdMedia', '$mdDialog', '$http', '$rootScope', '$filter', function ($scope, storage, $mdMedia, $mdDialog, $http, $rootScope, $filter) {
  //서버에서 메뉴를 받아오는함수
  var menuObj = {};
  $http.get(host + "/menus")
    .then(function(response) {
      menuObj = response.data.data;
    });
}]);
