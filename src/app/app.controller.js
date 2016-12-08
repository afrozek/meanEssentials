(function() {
  'use strict';

  angular
    .module('app')
    .controller('appController', appController);

  appController.$inject = ['apiService','$log','notifyService'];

  /** @ngInject */
  function appController(apiService, $log, notifyService) {
    var vm = this;
    vm.controllerName = "appController";

    notifyService.success("Testing");

  

  }//end appController
   
})();





  
  /////////////

