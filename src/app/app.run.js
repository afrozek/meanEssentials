

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