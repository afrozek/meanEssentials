


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

//paths
var jsPaths = ['src/app/**/*.module.js','src/app/**/*.js'];
var sassPaths  = ['src/app/**/*.scss'];





/*------------BUILDERS------------*/

gulp.task('buildScripts', function() {
//outputs main.js to src folder

	 gulp.src(jsPaths)
		.pipe(sourcemaps.init())
		.pipe(concat('src/main.js'))
		.pipe(uglify())
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest('./'));
	
});

gulp.task('buildStyles', function() {
//outputs main.css to src folder

	gulp.src(sassPaths)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('src/main.css'))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./'));
	
});





/*------------INJECTORS------------*/

gulp.task('injectScripts', function() {
//injects main.js into index.html

	gulp.src('./src/index.html')
 	.pipe(inject(gulp.src(['./src/main.js','./src/main.css']),{relative: true}))	
 	.pipe(gulp.dest('./src'));
	
});


gulp.task('injectStyles', function() {
//injects main.css into index.html

	gulp.src('./src/index.html')
 	.pipe(inject(gulp.src(['./src/main.js','./src/main.css']),{relative: true}))	
 	.pipe(gulp.dest('./src'));
	
});





/*------------WATCHERS------------*/

gulp.task('watchScripts', function() {
	gulp.watch(jsPaths,['buildScripts','injectScripts'])
});

gulp.task('watchStyles', function() {
	gulp.watch(sassPaths,['buildStyles','injectStyles'])
});




/*------------DOERS------------*/

gulp.task('serve',['buildScripts','buildStyles','injectScripts','injectStyles','watchScripts','watchStyles'], function() {
// starts server, runs tasks

	nodemon({
		script: 'index.js'
	})


});




/*======================================
			  DIST BUILD
======================================*/














