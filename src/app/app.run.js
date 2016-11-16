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