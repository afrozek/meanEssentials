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
        abstract: true,
        templateUrl: 'app/appModules/landing/landing.view.html',
        controller: 'landingController',
        controllerAs: 'landingCtrl',
        data: {
          requireLogin: false
        }
      })

      .state('app.landing.home', {
        url: '/',
        template: '<h1> Home </h1>',
        
      })

      .state('app.auth', {
        abstract: true,
        templateUrl: 'app/appModules/auth/auth.view.html',
        
      })

      .state('app.auth.login', {
        url: '/login',
        templateUrl: 'app/appModules/login/login.view.html',
        
      })

      .state('app.auth.signup', {
        url: '/signup',
        templateUrl: 'app/appModules/signup/signup.view.html',
        
      })

      .state('app.auth.signupSuccess', {
        url: '/signupSuccess',
        controller: 'signupController',
        controllerAs: 'signupCtrl',
        templateUrl: 'app/appModules/signup/signupSuccess.view.html',
        
      })

      .state('test', {
        url: '/test',
        template: '<h1>HI!</h1>',

      })

      .state('app.dashboard', {
        abstract: true,
        url: '/dashboard',
        templateUrl: 'app/appModules/dashboard/dashboard.view.html',
        controller: 'dashboardController',
        controllerAs: 'dashboardCtrl',
        data: {
          requireLogin: false
        }
      })

      .state('app.dashboard.home', {
        url: '/home',
        template: '<h1> dashboard home </h1>',
        
      })

      .state('app.dashboard.orbits', {
        abstract: true,
        url: '/orbits',
        controller: 'orbitController',
        controllerAs: 'orbitCtrl',
        templateUrl: 'app/appModules/orbit/orbit.view.html',
      })

      .state('app.dashboard.orbits.home', {
        url: '/home',
        templateUrl: 'app/appModules/orbit/orbitHome.view.html',
      })

      .state('app.dashboard.orbits.create', {
        url: '/create',
        templateUrl: 'app/appModules/orbit/orbitCreate.view.html',
      })









    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);

  }//end routerConfig function




})();
