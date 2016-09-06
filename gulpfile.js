'use strict';

var gulp = require('gulp'),
	sass = require('gulp-sass');
	
var paths = {
	scss: './helppper.scss',
	css: './helppper.css'
};

gulp.task('compileSass', function () {
	return gulp.src(paths.scss)
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./'));
})

gulp.task('default', function(){});