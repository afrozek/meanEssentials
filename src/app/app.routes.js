(function() {
  'use strict';




  angular
    .module('app')
    .config(routerConfig);

    routerConfig.$inject = ['$stateProvider','$urlRouterProvider', '$locationProvider'];

  /** @ngInject */
   function routerConfig($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
  

      .state('app', {
        abstract: true,
        templateUrl: 'app/app.view.html',
        controller: 'appController',
        controllerAs: 'appCtrl',
        data: {
          requireLogin: false
        }
      })

      .state('app.landing', {
        url: '/',
        templateUrl: 'app/appComponents/landing/views/landing.view.html',
        controller: 'landingController',
        controllerAs: 'landingCtrl',
        data: {
          requireLogin: false
        }
      })



    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);

  }//end routerConfig function




})();
