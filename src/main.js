(function() {
  'use strict';

  angular
    .module('app', [
    	'ui.router',
    	'landing'
    ]);
})();

(function(){
	'use strict'

angular
	.module('landing', [
	  
	]);

})();

angular.module('app').run(['$templateCache', function($templateCache) {$templateCache.put('app/app.view.html','<h1>appView</h1>\n<h2>controllerTest: {{appCtrl.controllerName}}</h2>\n<div ui-view></div>');
$templateCache.put('app/appComponents/landing/views/landing.view.html','<div id="landing" class="container" >\n\t<div class="page-header centerText">\n\t  <h1>landing</h1>\n\t</div>\n</div>\n');}]);

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

      .state('test', {
        url: '/test',
        template: '<h1>HI!</h1>',

      })



    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);

  }//end routerConfig function




})();


(function(){
angular
    .module('landing')
    .directive('landingDir', landingDir);

function landingDir() {
	return{
		restrict: 'E',
		templateUrl: '',
		replace: true
		// scope: {}
	}
}

//end IIFE
})();

(function() {
	'use strict'

	angular
		.module('landing')
		.controller('landingController', landingController)

	landingController.$inject = []

	function landingController() {

	    var vm = this;

	    vm.gotoSession = gotoSession;
	    vm.refresh = refresh;
	    vm.search = search;
	    vm.sessions = [];
	    vm.title = 'landing';

	    ////////////

	    function gotoSession() {
	      /* */
	    }

	    function refresh() {
	      /* */
	    }

	    function search() {
	      /* */
	    }
	}


//end IIFE
})();




(function(){
	'use strict'

	angular
    	.module('landing')
    	.factory('landingService', landingService);

    landingService.$inject = []

    function landingService() {
    	var service = {

    		error: error,
    		info: info,
    		success: success

    	};

    	return service;

    	////////////

    	function error() {
	      /* */
	    }

	    function info() {
	      /* */
          console.log("landingService");
	    }

	    function success() {
	      /* */
	    }


    }

	
// end IIFE
})();


//# sourceMappingURL=main.js.map
