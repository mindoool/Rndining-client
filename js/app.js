var app = angular.module("Rndining",['ui.router']);

app.config(function($stateProvider, $urlRouterProvider){
    $stateProvider
        .state('rndining',{
            url: '/',
            templateUrl: 'templates/rndining.html',
            controller: 'RndiningController'
        })
        .state('weeklymenu', {
            url: '/weeklymenu',
            templateUrl: 'templates/weekly-menu.html',
            controller: 'WeeklymenuController'
        })
        .state('stores', {
            url: '/stores',
            templateUrl: 'templates/stores.html',
            controller: 'StoresController'
        })
    $urlRouterProvider.otherwise('/');
});