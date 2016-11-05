module.exports = function(){
	var client = './public';
	var temp =  './.tmp/';

	var config = {
		temp: 'temp',

		/*
		*	Files paths
		*/
		alljs : [
			'./src/**/*.js',
			'./*.js'
		],
		client: client,
		css: client + 'styles/main.css',
		index: client + 'index.html',
		js: [
			client + '**/*.module.js',
			client + '**/*.js',
			// Example 1
			'!' + client + '**/*.spec.js'
		],

		// less: client + 'styles/styles.less',

		/*
		*	Bower and NPM locations 
		*/

		// Example 3
		bower: {
			"json": require('./bower.json'),
			"directory": './bower_components/',
			"ignorePath": '../..'
		}


	};

	// Example 2 
	config.getWiredepDefaultOptions = function (){
		var options = {
			// Changing a few properties
				// want to get a bower json property
				bowerJson: config.bower.json,
				// want to get a property for the directory
				directory: config.bower.directory,
				// ignore path
				ignorePath: config.bower.ignore
			};

			return options;

		}


	return config;
}