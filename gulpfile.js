
var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var wiredep = require('wiredep')({src: 'src/index.html',  ignorePath: 'bower_components'});


console.log(wiredep)
var config = {};

config.wiredep = {

}	



gulp.task('serve', function() {
	
	nodemon({
		script: 'index.js'
	})



})