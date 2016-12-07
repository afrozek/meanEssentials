(function() {
  'use strict';

  angular
    .module('app', [
    	'api',
    	'ui.router',
        'ngAnimate',
    	'landing',
    	'auth',
    	'token',
    	'login',
    	'dashboard',
        'orbit',
        'notify'

    ]);
})();



(function(){
	'use strict'

angular
	.module('api', [
	  
	]);

})();

(function(){
	'use strict'

angular
	.module('auth', [
	  'token',
	  'api'
	]);

})();

(function(){
	'use strict'

angular
	.module('dashboard', [
	  
	]);

})();

(function(){
	'use strict'

angular
	.module('login', [
	  'token',
	  'auth',
	  'ngAnimate'
	]);

})();


(function(){
	'use strict'

angular
	.module('landing', [
	  
	]);

})();

(function(){
	'use strict'

angular
	.module('notify', [
	  
	]);

})();

(function(){
	'use strict'

angular
	.module('orbit', [
	  
	]);

})();

(function(){
	'use strict'

angular
	.module('token', [
	  
	]);

})();

angular.module('app').run(['$templateCache', function($templateCache) {$templateCache.put('app/app.view.html','<h1>appView</h1>\n<h2>controllerTest: {{appCtrl.controllerName}}</h2>\n<div ui-view></div>');
$templateCache.put('app/appComponents/landing/views/landing.view.html','<div id="landing" class="container" >\n\t<div class="page-header centerText">\n\t  <h1>landing</h1>\n\t</div>\n</div>\n');}]);

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


  

  }//end appController
   
})();





  
  /////////////


// (function(){
// 'use strict';

// angular
// .module('app')
// .directive('transitionDirective', ['$animate', function($animate) {
  
//   return function(scope, element, attrs) {
    
//     attrs.$observe('fadeIn', function(value) {
//       value ? $animate.addClass(element, 'on') : $animate.removeClass(element, 'on');
//     });
    
//   };
  
// }]);
	
// })();
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

(function(){

'use strict';

	angular
	.module('app')
	.run(function($rootScope, $templateCache) {
	   $rootScope.$on('$viewContentLoaded', function() {
	      $templateCache.removeAll();
	   });
	});

})();
(function(){
	'use strict'

	angular
    	.module('api')
    	.factory('apiService', apiService);

    apiService.$inject = [];

    function apiService() {
    	var service = {

    		rippleBaseUrl: '',
            tangentBaseUrl: '',
            consellationBaseUrl: '',
            customerSupportBaseUrl: ''


    	};

    	return service;

    	////////////

    	function error() {
	      /* */
	    }

	    function info() {
	      /* */
          console.log("apiService");
	    }

	    function success() {
	      /* */
	    }


    }

	
// end IIFE
})();


(function(){
	'use strict'

	angular
    	.module('auth')
    	.factory('interceptorService', interceptorService);

    interceptorService.$inject = ['tokenService' ]

    function interceptorService( tokenService ) {

    	var service = {

    		request: request,
            reponseError: responseError

    	};

    	return service;

    	////////////

    	function request(config) {

	      var token = tokenService.getToken();

          if(token){
            // console.log("setting Headers");
            config.headers['token'] = token;
          }

          return config;

	    }

	    function responseError(response) {
	      
            // if our server returns a 403 forbidden response
            if (response.status == 401 || response.status == 403) {
                 $state.go('/login');
            }

            // return the errors from the server as a promise
            return $q.reject(response);
	    }



    } //end authService

	
// end IIFE
})();


(function(){
	'use strict'

	angular
    	.module('auth')
    	.factory('authService', authService);

    authService.$inject = ['tokenService', '$state', '$http', '$q', '$rootScope','apiService', '$log']

    function authService( tokenService, $state, $http , $q, $rootScope, apiService, $log) {

        var service = {
            login: login
        }

        var ripple = apiService.rippleBaseUrl;
     

        

        function login(formData) {
            return $http.post(ripple + '/account/login/', formData).then(function(res) {
                        return res;
                    })//end then
        }//end login function

        return service;

    }//end authService 

	
// end IIFE
})();


(function() {
	'use strict'

	angular
		.module('dashboard')
		.controller('dashboardController', dashboardController)

	dashboardController.$inject = []

	function dashboardController() {

	    var vm = this;

	    vm.gotoSession = gotoSession;
	    vm.refresh = refresh;
	    vm.search = search;
	    vm.sessions = [];
	    vm.title = 'dashboard';

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
angular
    .module('dashboard')
    .directive('dashboardDir', dashboardDir);

function dashboardDir() {
	return{
		restrict: 'E',
		templateUrl: '',
		replace: true
		// scope: {}
	}
}

//end IIFE
})();

(function(){
	'use strict'

	angular
    	.module('dashboard')
    	.factory('dashboardService', dashboardService);

    dashboardService.$inject = [];

    function dashboardService() {
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
          console.log("dashboardService");
	    }

	    function success() {
	      /* */
	    }


    }

	
// end IIFE
})();


(function() {
	'use strict'

	angular
		.module('login')
		.controller('loginController', loginController)

	loginController.$inject = ['loginService', '$state','tokenService', 'authService'];

	function loginController( loginService, $state, tokenService, authService) {
	    var vm = this;

	    vm.login = login;
	    vm.loginForm = {};
	    vm.loginSuccess = false;
	    vm.submitForm = false;
	    vm.validateFormFields = validateFormFields;


	    ////////////

	    function login(form) {

	    	if(validateFormFields(form) == false)
	    		return false;
	    	 
	    	//
	    	vm.submitForm = true;
	    	setTimeout(sendRequest, 500)
	    	

	    	function sendRequest(){

	    		// make copy of data
	    		var formData = angular.copy(vm.loginForm)

	    		//send request
	    		authService.login(formData).then(loginRequestHandler,loginRequestErrorHandler);
	    	}//end sendRequest function

	    }//end login function

	    function loginRequestHandler(res){
	    	console.log("handled");
	    	console.log(res);
		    vm.loginSuccess = true;
		    setTimeout(function(){
		    	$state.go('app.dashboard.home');
		    },100)
	    }

	    function loginRequestErrorHandler(err){
	    	console.log(err);
	    	vm.loginSuccess = false;
	    	vm.submitForm = false;
	    	vm.loginError = "Login Failed"
	    	vm.loginForm.password = null;
	    }

	    function validateFormFields(form){

	    	var isValid = true;

	    	//username check
	    	if(form.username.$dirty || form.username.$touched ){
				var username = vm.loginForm.username;
				console.log("touched")
				//empty check
				if( typeof(username) == 'undefined' || username == "" || username == null){
					 form.username.customError = "Username field is required.";
					 isValid = false;
				}
				// else if(username.length < 3){
				// 	form.username.customError = "Minimum 3 characters";
				// 	isValid = false;
				// }
				// else if(username.length > 8){
				// 	form.username.customError = "Maximum 8 characters";
				// 	isValid = false;
				// }
				else{
					form.username.customError = "";
				}	

	    	}

	    	//password check
	    	if(form.username.$dirty || form.username.$touched ){
				var password = vm.loginForm.password;
				console.log("touched")
				//empty check
				if( typeof(password) == 'undefined' || password == "" || password == null){
					 form.password.customError = "password field is required.";
					 isValid = false;
				}
				// else if(password.length < 3){
				// 	form.password.customError = "Minimum 3 characters";
				// 	isValid = false;
				// }
				// else if(password.length > 8){
				// 	form.password.customError = "Maximum 8 characters";
				// 	isValid = false;
				// }
				else{
					form.password.customError = "";
				}	

	    	}

	    	return isValid;

			
	    		
	   	} //end validateFormFields

	    function clearForm() {
	    	vm.loginForm = {};
	    }
			
			


	}//end loginController


//end IIFE
})();



(function(){
	'use strict'

	angular
    	.module('login')
    	.factory('loginService', loginService);

    loginService.$inject = ['$http','tokenService', '$state', 'authService','$rootScope' ];

    function loginService( $http , tokenService, $state, authService, $rootScope) {

        var path = "http://localhost:3100/api/users";

    	var service = {

    		login: login,
            logout: logout,
            isLoggedIn : isLoggedIn

    	};

    	return service;

    	////////////

    	function login( form ) {
             $http.post(path + "/login", form).then(function(res) {

                console.log(res);
                if(res.data.success == true){
                    //clear the form
                    form = {};

                    //emit loggedin to appCtrl
                    $rootScope.$emit("loggedIn");

                    //set the token
                    tokenService.setToken(res.data.token)

                    //send user message
                    toastr.success(res.data.message);
                    
                    //redirects based on the profile user level
                    authService.redirectDefault();
                }
                else toastr.error(res.data.message);
            })
        }

        function logout() {
            tokenService.removeToken();
            $rootScope.$emit("loggedOut");
            $state.go('app.login')

        }

        function isLoggedIn() {
              // emits loggedin, else does nothing 
              authService.isAuthenticated();
        }


    }

	
// end IIFE
})();

(function(){
angular
    .module('login')
    .directive('loginFormDirective', loginFormDirective);

function loginFormDirective() {
	return{
		restrict: 'E',
		templateUrl: 'app/appModules/login/loginForm.view.html',
		replace: true,
		controller: 'loginController',
		controllerAs: 'loginCtrl',
		link: link
	}

	function link(scope, elem, attrs) {
		var vm = scope.loginCtrl;
		console.log(vm.loginSuccess);


		scope.$watch(function(){return vm.loginSuccess}, function(newValue, oldValue) {
            if (newValue){
                console.log("I see a data change!");
                // elem.css("display", "none");
            }
        }, true);


		
	}//end link function


}//end loginFormDirective function

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
angular
    .module('landing')
    .directive('landingDir', landingDir);

function landingDir() {
	return{
		restrict: 'E',
		templateUrl: '../views/landingMainNav.html',
		replace: true
		// scope: {}
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


(function() {
	'use strict'

	angular
		.module('notify')
		.controller('notifyController', notifyController)

	notifyController.$inject = []

	function notifyController() {

	    var vm = this;

	    vm.gotoSession = gotoSession;
	    vm.refresh = refresh;
	    vm.search = search;
	    vm.sessions = [];
	    vm.title = 'notify';

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
angular
    .module('notify')
    .directive('notifyDir', notifyDir);


function notifyDir() {
	return{
		restrict: 'E',
		templateUrl: 'app/appModules/notify/notify.view.html',
		replace: false,
		controller: function($scope,notifyService){
			

			// notifyService.info("testing the service");
			$scope.messages = notifyService.messages;

			$scope.notify = function(message){
				
				notifyService.info(message);
			}
		}
	}


}

//end IIFE
})();

(function(){
	'use strict'

	angular
    	.module('notify')
    	.factory('notifyService', notifyService);

    notifyService.$inject = ['$timeout']

    function notifyService($timeout) {

    	var service = {
    		
    		info: info,
            messages : []
    	};

        

    	return service;

    	////////////

    	function error() {
	      /* */
	    }

	    function info(message) {
          service.messages.push(message);

          $timeout(function(){
            service.messages.splice(0,1);
          },3000)

	    }


	    function success() {
	      /* */
	    }


    }

	
// end IIFE
})();


(function() {
	'use strict'

	angular
		.module('orbit')
		.controller('orbitController', orbitController)

	orbitController.$inject = []

	function orbitController() {

	    var vm = this;

	    vm.gotoSession = gotoSession;
	    vm.refresh = refresh;
	    vm.search = search;
	    vm.sessions = [];
	    vm.title = 'orbit';

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
angular
    .module('orbit')
    .directive('orbitDir', orbitDir);

function orbitDir() {
	return{
		restrict: 'E',
		templateUrl: '',
		replace: true
		// scope: {}
	}
}

//end IIFE
})();

(function(){
	'use strict'

	angular
    	.module('orbit')
    	.factory('orbitService', orbitService);

    orbitService.$inject = []

    function orbitService() {
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
          console.log("orbitService");
	    }

	    function success() {
	      /* */
	    }


    }

	
// end IIFE
})();


(function(){
	'use strict'

	angular
    	.module('token')
    	.factory('tokenService', tokenService);

    tokenService.$inject = ['$window']

    function tokenService($window) {
    	
        var service = {

    		setToken: setToken,
            getToken: getToken,
            removeToken: removeToken

    	};

    	return service;

    	////////////

    	function setToken (token) {
            $window.sessionStorage.setItem('userToken', token);
        }

        function getToken () {
            var token = $window.sessionStorage.getItem('userToken');
            return token;
        }

        function removeToken () {
            $window.sessionStorage.removeItem('userToken');
        }

	    function success() {
	      /* */
	    }


    }

	
// end IIFE
})();


//# sourceMappingURL=main.js.map
