'use strict';
var gulp = require('gulp');
var clean = require('gulp-clean');
var gls = require('gulp-live-server');

var PORT = 3000;

gulp.task('default', ['copy'], function () {
    gulp.watch([
        'src/lib.js',
        'src/index.html'
    ], ['copy']);

    gulp.watch([
        'src/animation.css'
    ], ['css']);

    var server = gls.static('dist', PORT);
    server.start();
    gulp.watch(['dist/*'], function (file) {
        server.notify.apply(server, [file]);
    });
});

gulp.task('copy', function () {
    return gulp.src([
        './src/index.html',
        './src/lib.js'
    ], {
        base: 'src'
    }).pipe(gulp.dest('dist'));
});

gulp.task('publish', function () {
    return gulp.src([
        './src/lib.js'
    ], {
        base: 'src'
    }).pipe(gulp.dest('dist'));
});

