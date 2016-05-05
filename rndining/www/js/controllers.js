//angular.module('starter.controllers', ['starter.services'])

app.controller('AppCtrl', function ($scope, $ionicModal, $timeout, $http) {

    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});
  })

  .controller('MenusCtrl', function ($scope, $http) {
    //$scope.menus = Menu.query();

    $http.get(host + "/menus")
      .then(function (response) {
        $scope.menus = response.data.data;
      });
  })

  .controller('PlaylistCtrl', function ($scope, $stateParams) {
  });
