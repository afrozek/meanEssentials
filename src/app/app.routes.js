(function() {
  'use strict';




  angular
    .module('app')
    .config(routerConfig);



  /** @ngInject */
   function routerConfig($stateProvider, $urlRouterProvider,$locationProvider) {
    $stateProvider
  

      .state('app', {
        url: '/',
        templateUrl: 'app.view.html',
        controller: 'appController',
        controllerAs: 'appCtrl',
        data: {
          requireLogin: false
        }
      })



    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);

  }//end routerConfig function




})();
