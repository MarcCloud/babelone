/**
 * Created by Marco Romero on 4/24/2015.
 */
'use strict';

var gulp = require('gulp'),
    browserify = require('browserify'),
    babelify = require('babelify'),
    source = require('vinyl-source-stream'),
    jade = require('gulp-jade'),
    connect=require('gulp-connect');

gulp.task('browserify', function() {
    return browserify({ debug: true })
        .transform(babelify)
        .require('./src/app.js', { entry: true })
        .bundle()
        .on('error', function handleError(err) {
            console.error(err.toString());
            this.emit('end');
        })
        .pipe(source('app.min.js'))
        .pipe(gulp.dest('./dist/scripts'));
});

gulp.task('html',function(){
    return gulp.src('./src/index.jade')
        .pipe(jade({pretty:true}))
        .pipe(gulp.dest('./dist'));
});

gulp.task('serve',function(){
   return connect.server({
       root:'./dist',
       port:3000,
       livereload:true
   });
});