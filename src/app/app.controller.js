(function() {
  'use strict';

  angular
    .module('app')
    .controller('appController', appController);

  appController.$inject = ['apiService','$log','notifyService','authService'];

  /** @ngInject */
  function appController(apiService, $log, notifyService, authService) {
    var vm = this;
    vm.controllerName = "appController";

    vm.logout = logout;

    notifyService.success("Testing");






    //////////////////

    function logout(){
      authService.logout();
    }

  

  }//end appController
   
})();





  
  /////////////

