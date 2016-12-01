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
    	'dashboard'

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
	.module('api', [
	  
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

    $log.debug(apiService);
  

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
        templateUrl: 'app/appModules/dashboard/dashboard.view.html',
        controller: 'dashboardController',
        controllerAs: 'dashboardCtrl',
        data: {
          requireLogin: false
        }
      })

      .state('app.dashboard.home', {
        url: '/dashboard',
        template: '<h1> dashboard home </h1>',
        
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
        console.log(ripple);

        

        function login(formData) {
            return $http.post(ripple + '/auth/login/', formData).then(function(res) {
                        return res;
                    })//end then
        }//end login function

        return service;

    }//end authService 

	
// end IIFE
})();


(function(){
	'use strict'

	angular
    	.module('api')
    	.factory('apiService', apiService);

    apiService.$inject = [];

    function apiService() {
    	var service = {

    		rippleBaseUrl: 'http://192.168.14.12:8000/2e720b4',
            tangentBaseUrl: 'http://192.168.14.99/c73e2b3',
            customerSupportBaseUrl: 'http://192.168.1.11:8000'


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

	loginController.$inject = ['loginService', '$state','tokenService', 'authService','$scope'];

	function loginController( loginService, $state, tokenService, authService,$scope) {
	    var vm = this;

	    vm.login = login;
	    vm.loginForm = {};
	    vm.loginSuccess = null;
	    vm.submitForm = false;
	    vm.validateFormFields = validateFormFields;
	    // console.log(vm.loginForm.username.$pristine);
	     // console.log($scope);
	    var fieldNames = ['username','password'] 
	     
		$scope.$watch('loginForm', function(loginForm) {
			console.log("im watching")

		    if(loginForm) { 
		        
		    }
		    else {
		        
		    }        
		});


	    ////////////

	    function login() {

	    	 return validateFormFields($scope.loginForm);
	    	 


	    	//
	    	vm.submitForm = true;
	    	setTimeout(sendRequest, 1000)
	    	

	    	function sendRequest(){

	    		// make copy of data
	    		var formData = angular.copy(vm.loginForm)

	    		//send request
	    		authService.login(formData).then(function(res) {
		    		console.log(res);
		    		vm.loginSuccess = true;
		    		//$state.go('app.dashboard.home');
		    	});
	    	}//end sendRequest function

	    }//end login function

	    function validateFormFields(form){
	    	console.log("triggered");
	    	console.log(form)

	    	var isValid = false;

	    	//loop through all fields

	    	 for(var i = 0; i < fieldNames.length; i++){
	    		
	    		var fieldName = fieldNames[i];
	  			//sets scope form field to variable
	    		var field = form[fieldName];
	    		// return console.log(field)

	    		// return console.log(field.$error)

	    		// if(field.$isEmpty(field.$viewValue))
	    		// 	return field.customError = "Required";	 
	    		// else if(field.$error.minlength) 
	    		// 	return field.customError = "Not enough bits";
	    		// else if(field.$error.maxlength) 
	    		// 	return field.customError = "Too many bits";
	    		// else
	    		// 	return field.customError = null;

	    		if(field.$isEmpty(field.$viewValue) && field.$touched)
	    			 field.customError = "Required";	 
	    		else if(field.$error.minlength) 
	    			 field.customError = "Minimum 5 characters";
	    		else if(field.$error.maxlength) 
	    			 field.customError = "Maximum 8 characters";
	    		else if(field.$error.pattern) 
	    			 field.customError = "Only characters and numbers, no whitespaces";
	    		else {
	    			 field.customError = null;
	    			 isValid = true;
	    		}

	    	}//end for
	    	
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
                elem.css("display", "none");
            }
        }, true);


		
	}//end link function


}//end loginFormDirective function

//end IIFE
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
