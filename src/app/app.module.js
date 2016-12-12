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


