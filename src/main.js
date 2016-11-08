(function() {
  'use strict';

  angular
    .module('app', [
    	'ui.router'
    ]);
})();


(function() {
  'use strict';

  angular
    .module('app')
    .controller('appController', appController);

  appController.$inject = [];

  /** @ngInject */
  function appController() {
    var vm = this;
    vm.controllerName = "appController";

  

  }//end appController
   
})();





  
  /////////////


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
        url: '/',
        templateUrl: 'app/app.view.html',
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


//# sourceMappingURL=main.js.map
