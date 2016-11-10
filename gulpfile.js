


/*======================================
				CONFIG
======================================*/


//path
var path = require('path');

//wiredep
var wiredep = require('wiredep')({src: 'src/index.html',  ignorePath: '/bower_components'});


//gulp
var gulp = require('gulp');
var inject = require('gulp-inject');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var nodemon = require('gulp-nodemon');




/*======================================
				TASKS
======================================*/

//tasks
gulp.task('buildScripts', function(){

	//get modules files then the rest
	 gulp.src(['src/app/**/*.module.js','src/app/**/*.js'])
		.pipe(sourcemaps.init())
		.pipe(concat('src/main.js'))
		.pipe(uglify())
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest('./'));



	// sass
	gulp.src('src/app/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('src/main.css'))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./'));


	//inject
	gulp.src('./src/index.html')
	 	.pipe(inject(gulp.src(['./src/main.js','./src/main.css']),{relative: true}))	
	 	.pipe(gulp.dest('./src'));

})


  




gulp.task('watchSass', function() {
	gulp.watch(['./public/assets/styles/*.scss'],['transpileSass'])
})




gulp.task('serve',['buildScripts'], function() {
	
	nodemon({
		script: 'index.js'
	})


})