
//path
var path = require('path');

//wiredep
var wiredep = require('wiredep')({src: 'src/index.html',  ignorePath: '/bower_components'});


//gulp
var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat')
var nodemon = require('gulp-nodemon');




//tasks
gulp.task('buildScripts', function(){
	 return gulp.src('src/app/**/*.js')
	  .pipe(sourcemaps.init())
	 .pipe(concat('src/main.js'))
	 // .pipe(uglify())
	 .pipe(sourcemaps.write('./'))
	 .pipe(gulp.dest('./'));

})



gulp.task('serve',['buildScripts'], function() {
	
	nodemon({
		script: 'index.js'
	})


})