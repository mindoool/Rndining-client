// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
var app = angular.module('RnDining', ['ionic', 'ui.router']);

app.config(function ($stateProvider, $urlRouterProvider) {
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/app/meal-date-menus");

  $stateProvider
    .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'templates/menu.html',
      controller: 'AppCtrl'
    })
    .state('app.menus', {
      url: '/menus',
      views: {
        'menuContent': {
          templateUrl: 'templates/weeklymenus/menus.html',
          controller: 'MenusCtrl'
        }
      }
    })
    //.state('app.mealdatemenu', {
    //  url: '/meal-date-menu',
    //  views: {
    //    'menuContent': {
    //      templateUrl: 'templates/meal-date-menu.html',
    //      controller: 'MealController'
    //    }
    //  }
    //})
    .state('app.mealdatemenus', {
      url: '/meal-date-menus',
      views: {
        'menuContent': {
          templateUrl: 'templates/weeklymenus/meal-date-menus.html',
          controller: 'MealController'
        }
      }
    })
    .state('app.uploadmenus', {
      url: '/upload-menus',
      views: {
        'menuContent': {
          templateUrl: 'templates/admin/upload-menus.html',
          controller: 'MealController'
        }
      }
    })
    .state('app.restaurants', {
      url: '/restaurants',
      views: {
        'menuContent': {
          templateUrl: 'templates/restaurants/restaurants.html',
          controller: 'RestaurantController'
        }
      }
    })
    .state('app.favoriterestaurants', {
      url: '/favorite-restaurants',
      views: {
        'menuContent': {
          templateUrl: 'templates/restaurants/favorite-restaurants.html',
          controller: 'RestaurantController'
        }
      }
    })
    .state('app.userinfos', {
      url: '/user-infos',
      views: {
        'menuContent': {
          templateUrl: 'templates/auth/user-info.html',
          controller: 'UserController'
        }
      }
    });
});

app.run(function ($ionicPlatform, $http, storage, $rootScope) {
  $ionicPlatform.ready(function () {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
  $http.defaults.headers.common.Authorization = storage.get('token');
  $rootScope.token = storage.get('token');
  $rootScope.user = storage.get('userData');
});
