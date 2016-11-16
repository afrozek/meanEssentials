(function() {
  'use strict';

  angular
    .module('app', [
    	'api',
    	'ui.router',
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
	.module('api', [
	  
	]);

})();

(function(){
	'use strict'

angular
	.module('auth', [
	  'token'
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
	  'auth'
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
        controller: 'loginController',
        controllerAs: 'loginCtrl'
        
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

    authService.$inject = ['tokenService', '$state', '$http', '$q', '$rootScope']

    function authService( tokenService, $state, $http , $q, $rootScope) {

     //    var path = "http://localhost:3100/api/users";


    	// var service = {
     //        isAuthenticated: isAuthenticated,
    	// 	isAuthorized: isAuthorized,
    	// 	redirectDefault: redirectDefault,
    	// 	getProfile: getProfile
    	// };

    	// return service;

    	// ////////////

     //    //basically are they logged in
     //    function isAuthenticated () {

     //        var token = tokenService.getToken();

     //        if(token){
     //            $http.post(path + '/authorize')
     //                .then(function (res) {
     //                    if( res.data.success == true) {
     //                        console.log("authenticated")
     //                        $rootScope.$emit("loggedIn");
     //                        return true;
     //                    } 
     //                    else {
     //                        console.log("Authentication Failed")
     //                        return false;
     //                    }
     //                })
     //        }
     //        else{
     //            console.log("authentication failed, no token present")
     //        } 
           
     //    } //end isAuthenticated




     //    function isAuthorized (event, fromState, toState) {
     //            //return $q.reject();
     //            console.log("running is authorized")

     //            var token = tokenService.getToken();
     //            var userLevel = null;
     //            var proceed = false;

     //            if(token){
     //              //  return $q.reject;
     //               return $http.post(path + '/authorize')
     //                    .then(function (res) {
     //                        console.log('authorizing..')
     //                        if( res.data.success == true && res.data.profile.userLevel){
                                
     //                            console.log(res.data.profile.userLevel)
     //                            userLevel = res.data.profile.userLevel;

     //                                    //loop through permission list
     //                                     for(var i=0; i < toState.data.permissionLevel.length; i++){
     //                                       //if current userlevel matches permission level
     //                                       //then set proceed to true and break the for loop 
     //                                       console.log("current loop i : " + toState.data.permissionLevel[i])
                                           
     //                                       if(userLevel == toState.data.permissionLevel[i]){
     //                                            console.log("permission match")
     //                                            console.log("setting proceed true")
     //                                            proceed = true;
     //                                            break;
     //                                            //return toastr.success("proceed")
     //                                        }
     //                                       else {
     //                                            console.log("keep looking")
     //                                            console.log("setting proceed false")
     //                                            proceed = false;
     //                                        }  
     //                                    }//end for loop  
     //                        } // end if profile returned
     //                        // else no profile
     //                        else{
     //                            toastr.error("bad request")
     //                            proceed = false;
     //                        }

     //                        console.log("last check")
     //                        if(proceed == false) {
     //                            console.log("ITS FALSE")
     //                            return $q.reject();
     //                            $state.go('app.docs')
     //                        }
     //                    },
     //                    function(err){
     //                        console.log(err)
     //                    }) //end then
     //            }//end if token

     //            //else no token 
     //            else{
     //                toastr.error("no token present")
     //                return $q.reject();
     //            }
                 
            

     //    }//end isAuthorized





     //    //redirects to default page based on the profile user role
	    // function redirectDefault() {
	    //   $http.post('/api/users/authorize').then(function(res) {

     //        console.log("getting profile info")
     //        console.log(res)
     //        //if profile was returned
     //        var userLevel = res.data.profile.userLevel;

     //        if(userLevel){

     //            switch(userLevel){

     //                case 'superuser': 
     //                $state.go('app.user.documents.documentStatuses');
     //                break;

     //                case 'admin': 
     //                $state.go('app.user.documents.documentStatuses');
     //                break;

     //                case 'author': 
     //                $state.go('app.user.documents.documentStatuses');
     //                break;

     //            }//end switched
     //        }
     //      })
	    // }

     //    //return profile
	    // function getProfile() {
	    //   return  $http.post(path + '/authorize');
	    // }

        return {};

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
		.controller('dashboardCtrl', dashboardCtrl)

	dashboardCtrl.$inject = []

	function dashboardCtrl() {

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
	    vm.loginForm = {}
	    vm.loginForm.username = "";
	    vm.loginForm.password = "";


	    ////////////

	    function login() {

	    	//make copy of data
	    	// var formData = angular.copy(vm.)

	    	// authService.login(vm.loginForm).then(){

	    	// };
	    }

	    function clearForm() {
	    	vm.loginForm = {};
	    }


	}


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
		restrict: 'AE',
		templateUrl: 'app/appModules/login/loginForm.view.html',
		replace: true
		// scope: {}
	}
}

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
