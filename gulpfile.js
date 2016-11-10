


/*=========================================================
						CONFIG
=========================================================*/


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

var angularTemplateCache = require('gulp-angular-templatecache');




/*=========================================================
					DEVELOPMENT TASKS
=========================================================*/

//paths
var jsPaths = ['src/app/**/*.module.js','src/app/**/*.js'];
var sassPaths  = ['src/app/**/*.scss'];
var htmlTemplatePaths  = ['src/app/**/*.html'];





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




/*=========================================================
					PRODUCTION TASKS
=========================================================*/

gulp.task('build',function(){


	//declare paths
	var jsPaths = ['src/app/**/*.module.js', '.temp/templates.js', 'src/app/**/*.js'];
	var sassPaths  = ['src/app/**/*.scss'];
	var htmlTemplatePaths  = ['src/app/**/*.html'];

	//first copy index file to dist folder
	gulp.src('./src/index.html')
	.pipe(gulp.dest('./dist'));


	//build template cache and convert to angular script
	//put in temp folder to later reference in js build
	gulp.src(htmlTemplatePaths)
	.pipe(angularTemplateCache({standAlone: false}))
	.pipe(gulp.dest('./.temp'));


	//js build
	//ends in dist folder
	gulp.src(jsPaths)

	.pipe(concat('./dist/main.js'))
	.pipe(uglify())

	.pipe(gulp.dest('./'));


	//styles build
	//ends in dist folder
	gulp.src(sassPaths)
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('./dist/main.css'))
    .pipe(gulp.dest('./'));




    //inject scripts
    gulp.src('./dist/index.html')
 	.pipe(inject(gulp.src(['./dist/main.js','./dist/main.css']),{relative: true}))	
 	.pipe(gulp.dest('./dist'));




 	//inject css
 	gulp.src('./dist/index.html')
 	.pipe(inject(gulp.src(['./dist/main.js','./dist/main.css']),{relative: true}))	
 	.pipe(gulp.dest('./dist'));











});

















































