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
