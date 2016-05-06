// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
var app = angular.module('RnDining', ['ionic', 'ui.router']);

app.config(function ($stateProvider, $urlRouterProvider) {
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/app/menus");

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
          templateUrl: 'templates/menus.html',
          controller: 'MenusCtrl'
        }
      }
    })
    .state('app.single', {
      url: '/playlists/:playlistId',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlist.html',
          controller: 'PlaylistCtrl'
        }
      }
    })
    .state('app.mealdatemenus', {
      url: '/meal-date-menus',
      views: {
        'menuContent': {
          templateUrl: 'templates/meal-date-menus.html',
          controller: 'MealController'
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
  $rootScope.logout = function () {
    console.log('logout');
    console.log($rootScope);
    $rootScope.token = null;
    $rootScope.user = null;
    $http.defaults.headers.common.Authorization = null;
    storage.set('userData', null);
    storage.set('token', null);
    $state.go('login');
  }
});
