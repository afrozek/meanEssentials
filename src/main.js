(function() {
  'use strict';

  angular
    .module('app', [
        'jlareau.bowser',
        'browserCheck',
        'scriptBlockerCheck',
        'tabSessionSync',
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
	.module('browserCheck', [
	  
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
	.module('scriptBlockerCheck', [
	  
	]);

})();

(function(){
	'use strict'

angular
	.module('tabSessionSync', [
	  
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

  appController.$inject = ['apiService','$log','notifyService'];

  /** @ngInject */
  function appController(apiService, $log, notifyService) {
    var vm = this;
    vm.controllerName = "appController";

    notifyService.success("Testing");

  

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
	.run(run)

	run.$inject = ['$rootScope', '$templateCache', 'browserCheckService','scriptBlockerCheckService','tabSessionSyncService'];

	function run($rootScope, $templateCache, browserCheckService, scriptBlockerCheckService, tabSessionSyncService) {

	   $rootScope.$on('$viewContentLoaded', function() {
	      $templateCache.removeAll();
	   });

	 //browser check  
	 browserCheckService.checkBrowser();
	 
	 //script blocker check
	 scriptBlockerCheckService.checkScripts();

	 //sync session storage
	 tabSessionSyncService.sync();




	} //end run

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
		.module('browserCheck')
		.controller('browserCheckCtrl', browserCheckCtrl)

	browserCheckCtrl.$inject = []

	function browserCheckCtrl() {

	    var vm = this;

	    vm.gotoSession = gotoSession;
	    vm.refresh = refresh;
	    vm.search = search;
	    vm.sessions = [];
	    vm.title = 'browserCheck';

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
    .module('browserCheck')
    .directive('browserCheckDir', browserCheckDir);

function browserCheckDir() {
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
    	.module('browserCheck')
    	.factory('browserCheckService', browserCheckService);

    browserCheckService.$inject = ['bowser', '$state', '$location']

    function browserCheckService(bowser, $state, $location) {
    	var service = {
    		checkBrowser: checkBrowser,
            oldBrowser: false
    	};

    	return service;

    	////////////

    	function checkBrowser() {

           

	        if(bowser.mobile){

            }
            else if(bowser.tablet){

            }
            else{

                  // console.log(bowser)
                  //browser check

                  if (bowser.chrome && bowser.version < 40) {
                    service.oldBrowser = true;
                  }

                  //browser check
                  if(bowser.msie && bowser.version < 9) {
                    service.oldBrowser = true;
                  }

                  //browser check
                  if(bowser.safari && bowser.version < 9) {
                    service.oldBrowser = true;
                  }

                  //browser check
                  if(bowser.firefox && bowser.version < 49) {
                    service.oldBrowser = true;
                  }

                  //browser check
                  if(bowser.opera && bowser.version < 10) {
                    service.oldBrowser = true;
                  }
            }

            if(service.oldBrowser == true){
                // $location.path('/updatebrowser')
                document.write("Your " + bowser.name + " browser is out of date. Please update it for the best experience");
            }


	    } // end check browser



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

	    	//first validate form
	    	if(validateFormFields(form) == false)
	    		return false;
	    	 
	    	
	    	vm.submitForm = true;

	    	//wait 500 millisecs so they see the loading animation
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

	    //takes the scope version of form
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
		// console.log(vm.loginSuccess);


		scope.$watch(function(){return vm.loginSuccess}, function(newValue, oldValue) {
            if (newValue){
                // console.log("I see a data change!");
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

	notifyController.$inject = ['$scope', 'notifyService']

	function notifyController($scope, notifyService) {


			

			// notifyService.info("testing the service");
			$scope.messages = notifyService.messages;

			$scope.info = function(message){
				console.log("bb")
				notifyService.info(message);
			}

			$scope.success = function(message){
				notifyService.success(message);
			}

			$scope.error = function(message){
				notifyService.error(message);
			}

			$scope.close = function(message){
				notifyService.removeNotification(message);
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
		controller: 'notifyController'
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
            success: success,
            error: error,
            removeNotification: removeNotification,
            messages : []
    	};

        //dismisses after 5 seconds
        var duration = 6000;

        

    	return service;

    	////////////

    	function error() {
	      /* */
	    }

	    function info(message) {
        message = {class: 'info', data: message};
        //check for dupes
            if(findMessage(message) !== false)
                return false;

          //no dupes, push message  
          service.messages.push(message) 

          //remove after x seconds
          $timeout(function(){
            service.messages.splice(0,1);
          }, duration)

	    } //end info

        function success(message) {
        message = {class: 'success', data: message};
        //check for dupes
            if(findMessage(message) !== false)
                return false;

          //no dupes, push message  
          service.messages.push(message)  

          //remove after x seconds
          $timeout(function(){
            service.messages.splice(0,1);
          }, duration)

        } //end success

        function error(message) {
        message = {class: 'error', data: message};
        //check for dupes
            if(findMessage(message) !== false)
                return false;

          //no dupes, push message  
          service.messages.push(message)  

          //remove after x seconds
          $timeout(function(){
            service.messages.splice(0,1);
          }, duration)

        } //end error

        function removeNotification(message) {

            var found = findMessage(message);
            if(found !== false){
                 service.messages.splice(found, 1);
            }
               
        }//end removeNotification

        //searches message array for message
        //returns index of message if found
        function findMessage(message){
             for(var i = 0; i < service.messages.length; i++) { 
                if(service.messages[i].data == message.data){
                    return i;
                }
                
            } //end for
            return false;
        }//end find message


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


(function() {
	'use strict'

	angular
		.module('scriptBlockerCheck')
		.controller('scriptBlockerCheckCtrl', scriptBlockerCheckCtrl)

	scriptBlockerCheckCtrl.$inject = []

	function scriptBlockerCheckCtrl() {

	    var vm = this;

	    vm.gotoSession = gotoSession;
	    vm.refresh = refresh;
	    vm.search = search;
	    vm.sessions = [];
	    vm.title = 'scriptBlockerCheck';

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
    .module('scriptBlockerCheck')
    .directive('scriptBlockerCheckDir', scriptBlockerCheckDir);

function scriptBlockerCheckDir() {
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
    	.module('scriptBlockerCheck')
    	.factory('scriptBlockerCheckService', scriptBlockerCheckService);

    scriptBlockerCheckService.$inject = []

    function scriptBlockerCheckService() {
    	var service = {

            checkScripts: checkScripts,
            scriptsBlocked: false

    	};

    	return service;

    	////////////

        function checkScripts() {
            console.log("Called")
            checkStripe()
                .then(checkRecaptcha)
                .then(gstatic)
        }



        function checkStripe(){

          return $.getScript('https://js.stripe.com/v2/')
              .done(function( script, textStatus ) {
                console.log("completed stripe ajax request");
              })
              .fail(function( jqxhr, settings, exception ) {
                    console.log("failed stripe");
                    service.scriptsBlocked = true;
                    return scriptErrorHandler("Stripe");
            }); // end getScript
        }//end checkStripe

        function checkRecaptcha(){

          return $.getScript('https://www.google.com/recaptcha/api.js?onload=vcRecaptchaApiLoaded&render=explicit')
              .done(function( script, textStatus ) {
                console.log("completed stripe ajax request");
              })
              .fail(function( jqxhr, settings, exception ) {
                    console.log("failed recaptcha");
                    service.scriptsBlocked = true;
                    return scriptErrorHandler("Recaptcha");
            }); // end getScript
        }//end checkStripe

        function gstatic(){

          return $.getScript('https://www.gstatic.com/recaptcha/api2/r20161004153729/recaptcha__en.js')
              .done(function( script, textStatus ) {
                console.log("completed stripe ajax request");
              })
              .fail(function( jqxhr, settings, exception ) {
                    console.log("failed gstatic");
                    service.scriptsBlocked = true;
                    return scriptErrorHandler("Gstatic");
            }); // end getScript
        }//end checkStripe

        function scriptErrorHandler(scriptName){
            document.write("Failed to load " + scriptName + ". Please ensure all script blockers are disabled.")
        }


    }//end scriptBlockerCheckService

	
// end IIFE
})();


(function() {
	'use strict'

	angular
		.module('tabSessionSync')
		.controller('tabSessionSyncCtrl', tabSessionSyncCtrl)

	tabSessionSyncCtrl.$inject = []

	function tabSessionSyncCtrl() {

	    var vm = this;

	    vm.gotoSession = gotoSession;
	    vm.refresh = refresh;
	    vm.search = search;
	    vm.sessions = [];
	    vm.title = 'tabSessionSync';

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
    .module('tabSessionSync')
    .directive('tabSessionSyncDir', tabSessionSyncDir);

function tabSessionSyncDir() {
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
    	.module('tabSessionSync')
    	.factory('tabSessionSyncService', tabSessionSyncService);

    tabSessionSyncService.$inject = []

    function tabSessionSyncService() {
    	var service = {

    		sync: sync,

    	};

    	return service;

    	////////////

    	function sync() {
            //session manager bewtween tabs
   

                if (!sessionStorage.length || typeof(sessionStorage) == 'undefined') {
                    // Ask other tabs for session storage
                    localStorage.setItem('getSessionStorage', Date.now());
                };

                window.addEventListener('storage', function(event) {

                    //console.log('storage event', event);

                    if (event.key == 'getSessionStorage') {
                        // Some tab asked for the sessionStorage -> send it

                        localStorage.setItem('sessionStorage', JSON.stringify(sessionStorage));
                        localStorage.removeItem('sessionStorage');

                    } else if (event.key == 'sessionStorage' && !sessionStorage.length) {
                        // sessionStorage is empty -> fill it

                        var data = JSON.parse(event.newValue),
                                    value;

                        for (var key in data) {
                            sessionStorage.setItem(key, data[key]);
                        }

                        // showSessionStorage();
                    }
                });

                window.onbeforeunload = function() {
                    //sessionStorage.clear();
                };

         
	    }

	    function info() {
	      /* */
          console.log("tabSessionSyncService");
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
