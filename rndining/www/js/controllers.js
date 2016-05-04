angular.module('starter.controllers', ['starter.services'])

  .controller('AppCtrl', function ($scope, $ionicModal, $timeout, $http) {

    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});

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

      // Simulate a login delay. Remove this and replace with your login
      // code if using a login system
      $timeout(function () {
        $scope.closeLogin();
      }, 1000);
    };
  })

  .controller('MenusCtrl', function ($scope, $http) {
    //$scope.menus = Menu.query();

    $http.get(host + "/menus")
      .then(function (response) {
        $scope.menus = response.data.data;
      });
  })

  .controller('MealDateMenusCtrl', function ($scope, $http, $filter) {
    $scope.currentTime = new Date().getTime();

    $scope.changeDate = function(forward) {
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
  })

  .controller('PlaylistCtrl', function ($scope, $stateParams) {
  });
