var gulp = require('gulp');
var $ = require('gulp-load-plugins');
var inject = require('gulp-inject');
var wiredep = require('wiredep');
var flatten = require('gulp-flatten');


var path = require('path');
var fs = require('fs');
var config = require('./gulp.config')();
var options = config.getWiredepDefaultOptions();



gulp.task('wiredep', function(){

	console.log('Wire bower cssjs and index.js into html');
	
	var wiredep = require('wiredep').stream;

	return gulp 
		.src(config.index)
		.pipe(wiredep(options))
		.pipe(inject(gulp.src(config.js, {read: false})))
		.pipe(gulp.dest(config.client))
		.pipe(flatten());

})


gulp.task('inject',['wiredep'], function(){

	console.log("Wire up css into the html and call wiredep");

	return gulp
		.src(config.index)
		.pipe(wiredep(options))
		.pipe(inject(gulp.src(config.css)))
		.pipe(gulp.dest(config.client))

})






