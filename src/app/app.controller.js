(function() {
  'use strict';

  angular
    .module('app')
    .controller('appController', appController);

  appController.$inject = ['apiService','$log'];

  /** @ngInject */
  function appController(apiService, $log) {
    var vm = this;
    vm.controllerName = "appController";

    $log.debug(apiService);
  

  }//end appController
   
})();





  
  /////////////

