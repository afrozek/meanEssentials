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
