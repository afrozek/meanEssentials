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
        'signup',
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
	.module('signup', [
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

angular.module('app').run(['$templateCache', function($templateCache) {$templateCache.put('app/app.view.html','<!-- <h1>appView</h1>\n<h2>controllerTest: {{appCtrl.controllerName}}</h2> -->\n<notify-dir></notify-dir>\n<div  ui-view class="fadeLeaveTransition "></div>');
$templateCache.put('app/appModules/browserCheck/browserCheck.view.html','<div id="browserCheckPage" class="container" >\n\t<div class="page-header centerText">\n\t  <h1>browserCheck</h1>\n\t</div>\n</div>\n');
$templateCache.put('app/appModules/dashboard/dashboard.view.html','<div id="dashView" class="fullWidth fullHeight blueSkyBg ">\n<div class="dashHeader">\n\n<div class="container-fluid">\n\t\n\t<div class="vertLogoContainer fl">\n\t\t<a ui-sref="app.landing.home">\n\t\t\t<img class="img-responsive" src="assets/images/logoVertWhite.svg" alt="sogLogo">\n\t\t</a>\n\t</div>\n\t\n\t<div class="dashMenuContainer">\n\t\t<div class="dropdown">\n\t\t    <button class="btn dropdown-toggle" data-toggle="dropdown" aria-expanded="true">\n\t\t\t\t<img ng-src="assets/images/avatarKappa.png" alt="avatar" class="dropdownAvatar"> \n\t\t\t\t<span class="profileName">Afroze</span>\n\t\t\t\t<i class="fa fa-angle-down fr mt10" aria-hidden="true"></i>\n\t\t    </button>\n\t\t    <ul class="dropdown-menu fadeTransition">\n\t\t      <li>asdfsa</li>\n\t\t      <li>adsfas</li>\n\t\t    </ul>\n\t   </div>\n\t</div>\n\n</div>\n\n\t<div class="dashGreeting">\n\t\t<h1>Welcome to the Grid</h1>\n\t</div>\n\t\n</div>\n\n\n\t<div class="container-fluid dashNavContainer">\n\t\t<div class="container">\n\t\t\t<nav>\n\t\t\t\t<ul>\n\t\t\t\t\t<li><a ui-sref="app.dashboard"><img src="assets/images/iconDashboard.png" alt="dashboard">Dashboard</a></li>\n\t\t\t\t\t<li><a ui-sref="app.dashboard.orbits" ui-sref-active="active"><img src="assets/images/iconOrbit.png" alt="Orbit">My Orbits</a></li>\n\t\t\t\t\t<li><a href=""><img src="assets/images/iconVolume.png" alt="Volume">My Volumes</a></li>\n\t\t\t\t\t<li><a href=""><img src="assets/images/iconMyAccount.png" alt="MyAccount">My Account</a></li>\n\t\t\t\t\t<li><a href=""><img src="assets/images/iconSupport.png" alt="Support">Support</a></li>\n\t\t\t\t</ul>\n\t\t\t\t<button class="btn btn-success fr mt5">Create Orbit</button>\n\t\t\t</nav>\n\t\t</div>\n\t</div>\n\t<div id="dashNestedView" class="container-fluid darkSpaceBg">\n\t\t<div class="container">\n\t\t\t<div ui-view class="fadeSlideFromLeftEnterTransition .fadeSlideToRightLeaveTransition"></div>\n\t\t</div>\n\t</div>\n\n\n\n</div>\n');
$templateCache.put('app/appModules/dashboard/dashboardHome.view.html','<h1>Dashboard home</h1>');
$templateCache.put('app/appModules/landing/landing.view.html','<nav class="navbar navbar-default  navbar-fixed-top">\n<div class="container">\n  <div class="container-fluid">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class="navbar-header">\n      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">\n        <span class="sr-only">Toggle navigation</span>\n        <span class="icon-bar"></span>\n        <span class="icon-bar"></span>\n        <span class="icon-bar"></span>\n      </button>\n      <a class="navbar-brand" href="#">Brand</a>\n    </div>\n\n    <!-- Collect the nav links, forms, and other content for toggling -->\n    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">\n      <ul class="nav navbar-nav">\n        <li class="active"><a href="#">Link <span class="sr-only">(current)</span></a></li>\n        <li><a href="#">Link</a></li>\n        <li class="dropdown">\n          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>\n          <ul class="dropdown-menu">\n            <li><a href="#">Action</a></li>\n            <li><a href="#">Another action</a></li>\n            <li><a href="#">Something else here</a></li>\n            <li role="separator" class="divider"></li>\n            <li><a href="#">Separated link</a></li>\n            <li role="separator" class="divider"></li>\n            <li><a href="#">One more separated link</a></li>\n          </ul>\n        </li>\n      </ul>\n      <form class="navbar-form navbar-left">\n        <div class="form-group">\n          <input type="text" class="form-control" placeholder="Search">\n        </div>\n        <button type="submit" class="btn btn-default">Submit</button>\n      </form>\n      <ul class="nav navbar-nav navbar-right">\n        <li><a ui-sref="app.auth.login">Login</a></li>\n        <li class="dropdown">\n          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>\n          <ul class="dropdown-menu">\n            <li><a href="#">Action</a></li>\n            <li><a href="#">Another action</a></li>\n            <li><a href="#">Something else here</a></li>\n            <li role="separator" class="divider"></li>\n            <li><a href="#">Separated link</a></li>\n          </ul>\n        </li>\n      </ul>\n    </div><!-- /.navbar-collapse -->\n  </div><!-- /.container -->\n  </div><!-- /.container-fluid -->\n</nav>\n\n<div ui-view class="fullHeight hasMainNav">\n\t\n</div>');
$templateCache.put('app/appModules/auth/auth.view.html','<div class="container-fluid starfieldAlphaBg  fullHeight">\n<div  class="container" >\n\n\t  <div id="horizontalLogoContainer">\n\t  \t<img id="horizontalLogoImage" src="assets/images/whiteHorizontalLogo@2x.png" alt="white sog logo">\n\t  </div>\n\n\n\t<div ui-view></div>\n\n\n\n</div>\n</div>\n\n\n');
$templateCache.put('app/appModules/login/login.view.html','\t\n\n<login-form-directive ></login-form-directive>\n\n');
$templateCache.put('app/appModules/login/loginForm.view.html','\t<div class="floatingFormContainer centerDiv whiteBg mb30 fadeSlideDownLeaveTransition" ng-if="!loginCtrl.loginSuccess">\n\n\t\t\n\t\t\t<div class="bounceSpinnerContainer fadeTransition"  ng-if="loginCtrl.submitForm">\n\t\t\t\t<div class="bounceSpinner">\n\t            \t<div class="double-bounce1"></div>\n\t            \t<div class="double-bounce2"></div>\n\t            </div>\n            </div>\n\n\t\t\n\t\t<div  ng-if="!loginCtrl.submitForm" class="fadeTransition">\n\t\t\t<form class="form formSmall  centerElement " name="loginForm" novalidate>\n\n\t\t\t\t<h1 class="formHeading centerText">Login</h1>\n\t\t\t\t<!-- <h4 class="formSubHeading centerText">Welcome Back</h4> -->\n\n\t\t\t\t<label class="formLabel" for="username">Username</label>\n\t\t\t\t\n\t\t\t\t<input ng-model="loginCtrl.loginForm.username"\n\t\t\t\t\t   ng-class="{\'fieldErrorBorder\': loginForm.username.customError}"\n\t\t\t\t\t   ng-keyup="loginCtrl.validateFormFields(loginForm)"\n\t\t\t\t\t   ng-focus="loginCtrl.validateFormFields(loginForm)"\n\t\t\t\t\t   name="username"\n\t\t\t\t\t   type="text" class="form-control block " id="username" aria-describedby="basic-addon3" autofocus="on" autocomplete="off"   \n\t\t\t\t>\n\n\t\t\t\t<div class="fieldErrors">\n\t\t\t\t\t<p>{{loginForm.username.customError}}</p>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t<label class="formLabel" for="password">Password</label>\n\t\t\t\t\n\t\t\t\t <input ng-model="loginCtrl.loginForm.password"\n\t\t\t\t \t\tng-class="{\'fieldErrorBorder\': loginForm.password.customError}"\n\t\t\t\t\t\tng-keyup="loginCtrl.validateFormFields(loginForm)"\n\t\t\t\t\t    ng-focus="loginCtrl.validateFormFields(loginForm)"\n\t\t\t\t   \t\ttype="password" class="\tform-control block" \n\t\t\t\t   \t\tid="password" aria-describedby="basic-addon3" \n\t\t\t\t   \t\tname="password">\n\t\t\t\t<div class="fieldErrors">\n\t\t\t\t\t<p>{{loginForm.password.customError}}</p>\n\t\t\t\t</div>\n\n\t\t\t\t<div class="formError mb10">\n\t\t\t\t\t{{loginCtrl.loginError}}\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t<button type="submit" class="btn btn-success btn-lg btn-block" ng-disabled="" ng-click="loginCtrl.login(loginForm)">Login</button>\n\t\t\t</form>\n\n\t\t\t<hr>\n\t\t\t<div class="helpBox mt30">\n\t\t\t\t<h4 class="heading centerText">Forgot Something?</h4>\n\t\t\t\t<h5 class="content centerText">\n\t\t\t\t\t<a href="">Username</a> or <a href="">Password</a>\n\t\t\t\t</h5>\n\t\t\t</div>\n\t\t</div>\n\n\t\t\n\t</div>');
$templateCache.put('app/appModules/notify/notify.view.html','<div id="notifyContainer" >\n\t\n\t<div class="notification notificationAnimation" ng-repeat="message in messages" >\n\t\t\n\t\t\t<div class="imgContainer {{message.class}} ">\n\t\t\t\t<img class="fl" src="assets/images/iconGridBot@2x.png"  alt="gridbot">\n\t\t\t</div>\n\t\t\t<div class="messageContainer">\n\t\t\t\t<div class="message">\n\t\t\t\t\t{{message.data}}\n\t\t\t\t</div>\n\t\t\t\t<i class="fa fa-times close" aria-hidden="true" ng-click="close(message)"></i>\n\t\t\t</div>\n\t</div>\n\n<div class="form-group fr" ng-hide="true">\n\t<input type="text" ng-model="newMessage">\n\t<button ng-click="info(newMessage)">notify</button>\n\t<button ng-click="success(newMessage)">notify</button>\n\t<button ng-click="error(newMessage)">notify</button>\n</div>\n\t\n</div>\n\n\n\n\n\n');
$templateCache.put('app/appModules/scriptBlockerCheck/scriptBlockerCheck.view.html','<div id="scriptBlockerCheckPage" class="container" >\n\t<div class="page-header centerText">\n\t  <h1>scriptBlockerCheck</h1>\n\t</div>\n</div>\n');
$templateCache.put('app/appModules/orbit/orbit.view.html','<div id="orbitPage" class=" dashPages" >\n<ul>\n\t<li><a ui-sref="app.dashboard.orbits.home">home</a></li>\n\t<li><a ui-sref="app.dashboard.orbits.create">Create</a></li>\n</ul>\n\t<div ui-view class="clearFix fadeSlideFromLeftEnterTransition fadeSlideToRightLeaveTransition"></div>\n</div>\n');
$templateCache.put('app/appModules/orbit/orbitCreate.view.html','<h1>Create Orbit</h1>');
$templateCache.put('app/appModules/orbit/orbitHome.view.html','<h1>Orbits Home</h1>\n');
$templateCache.put('app/appModules/tabSessionSync/tabSessionSync.view.html','<div id="tabSessionSyncPage" class="container" >\n\t<div class="page-header centerText">\n\t  <h1>tabSessionSync</h1>\n\t</div>\n</div>\n');}]);

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

      .state('app.auth.signup', {
        url: '/signup',
        templateUrl: 'app/appModules/signup/signup.view.html',
        
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

    authService.$inject = ['tokenService', '$state', '$http', '$q', '$rootScope','apiService', '$log', '$window']

    function authService( tokenService, $state, $http , $q, $rootScope, apiService, $log, $window) {

        var service = {
            signup: signup,
            login: login,
            logout: logout,
            setToken: setToken,
            getToken: getToken,
            removeToken: removeToken
        }

        var ripple = apiService.rippleBaseUrl;
     

        return service;



        function signup(formData) {
            return $http.post(ripple + '/account/signup/', formData).then(function(res) {
                       

                        //set token if successful
                        // if(res.data.auth_token){
                        //     service.setToken(res.data.auth_token);   
                        // }

                        return res;
                    },function(err){
                        return $q.reject(err);
                    })//end then
        }//end signup function


        function login(formData) {
            return $http.post(ripple + '/account/login/', formData).then(function(res) {
                       

                        //set token if successful
                        if(res.data.auth_token){
                            service.setToken(res.data.auth_token);   
                        }

                        return res;
                    },function(err){
                        return $q.reject(err);
                    })//end then
        }//end login function

        function logout() {
            service.removeToken();
            $state.go('app.landing.home')
        }



        //token managment

        function setToken (token) {
            $window.sessionStorage.setItem('token', token);
        }

        function getToken () {
            var token = $window.sessionStorage.getItem('token');
            return token;
        }

        function removeToken () {
            $window.sessionStorage.removeItem('token');
        }



        

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
	    	if(form.username.$dirty || form.username.$touched || vm.loginError ){
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
	    	if(form.username.$dirty || form.username.$touched || vm.loginError ){
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
		replace: true,
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


(function() {
	'use strict'

	angular
		.module('signup')
		.controller('signupController', signupController)

	signupController.$inject = [ '$state','tokenService', 'authService'];

	function signupController( $state, tokenService, authService) {
	    var vm = this;

	    vm.signup = signup;
	    vm.signupForm = {};
	    vm.signupSuccess = false;
	    vm.submitForm = false;
	    vm.validateFormFields = validateFormFields;



	    ////////////

	    function signup(form) {

	    	//first validate form
	    	if(validateFormFields(form) == false)
	    		return false;
	    	 
	    	
	    	vm.submitForm = true;

	    	//wait 500 millisecs so they see the loading animation
	    	setTimeout(sendRequest, 500)
	    	

	    	function sendRequest(){

	    		// make copy of data
	    		var formData = angular.copy(vm.signupForm)

	    		//send request
	    		authService.signup(formData).then(signupRequestHandler,signupRequestErrorHandler);
	    	}//end sendRequest function

	    }//end signup function

	    function signupRequestHandler(res){
	    	console.log("handled");
	    	console.log(res);
		    vm.signupSuccess = true;
		    // setTimeout(function(){
		    // 	$state.go('app.dashboard.home');
		    // },100)
		    console.log(res)
	    }

	    function signupRequestErrorHandler(err){
	    	console.log(err);
	    	vm.signupSuccess = false;
	    	vm.submitForm = false;
	    	vm.signupError = "Signup Failed"
	    	vm.signupForm.password = null;
	    	vm.signupForm.confirmPass = null;
	    }

	    //takes the scope version of form
	    function validateFormFields(form){

	    	var isValid = true;

	    	//username check
	    	if(form.username.$dirty || form.username.$touched || vm.signupError ){
				var username = vm.signupForm.username;
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

	    	//email check
	    	if(form.email.$dirty || form.email.$touched || vm.signupError ){
				var email = vm.signupForm.email;
				console.log("touched")
				//empty check
				if( typeof(email) == 'undefined' || email == "" || email == null){
					 form.email.customError = "email field is required.";
					 isValid = false;
				}
				// else if(email.length < 3){
				// 	form.email.customError = "Minimum 3 characters";
				// 	isValid = false;
				// }
				// else if(email.length > 8){
				// 	form.email.customError = "Maximum 8 characters";
				// 	isValid = false;
				// }
				else{
					form.email.customError = "";
				}	

	    	}

	    	//password check
	    	if(form.username.$dirty || form.username.$touched || vm.signupError ){
				var password = vm.signupForm.password;
				console.log("touched")
				//empty check
				if( typeof(password) == 'undefined' || password == "" || password == null){
					 form.password.customError = "password field is required.";
					 isValid = false;
				}
				else if(password.length < 3){
					form.password.customError = "Minimum 3 characters";
					isValid = false;
				}
				else if(password.length > 8){
					form.password.customError = "Maximum 8 characters";
					isValid = false;
				}
				else{
					form.password.customError = "";
				}	

	    	}

	    	//password check
	    	if(form.username.$dirty || form.username.$touched || vm.signupError ){
	    		var password = vm.signupForm.password;
				var confirmPass = vm.signupForm.confirmPass;
				console.log("touched")
				//empty check
				if( typeof(confirmPass) == 'undefined' || confirmPass == "" || confirmPass == null){
					 form.confirmPass.customError = "This field is required.";
					 isValid = false;
				}
				else if(confirmPass.length < 3){
					form.confirmPass.customError = "Minimum 3 characters";
					isValid = false;
				}
				else if(confirmPass.length > 8){
					form.confirmPass.customError = "Maximum 8 characters";
					isValid = false;
				}
				else if(confirmPass !== password){
					form.confirmPass.customError = "Passwords Don't Match";
					isValid = false;
				}
				else{
					form.confirmPass.customError = "";
				}	

	    	}

	    	return isValid;

			
	    		
	   	} //end validateFormFields

	    function clearForm() {
	    	vm.signupForm = {};
	    }
			
			


	}//end signupController


//end IIFE
})();



(function(){
angular
    .module('signup')
    .directive('signupFormDirective', signupFormDirective);

function signupFormDirective() {
	return{
		restrict: 'E',
		templateUrl: 'app/appModules/signup/signupForm.view.html',
		replace: true,
		controller: 'signupController',
		controllerAs: 'signupCtrl',
		link: link
	}

	function link(scope, elem, attrs) {
		var vm = scope.signupCtrl;
		// console.log(vm.signupSuccess);


		// scope.$watch(function(){return vm.signupSuccess}, function(newValue, oldValue) {
  //           if (newValue){
  //               // console.log("I see a data change!");
  //               // elem.css("display", "none");
  //           }
  //       }, true);


		
	}//end link function


}//end signupFormDirective function

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
