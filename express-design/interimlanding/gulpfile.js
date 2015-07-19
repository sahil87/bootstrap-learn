'use strict'; /* jslint node: true */
//npm install --save-dev gulp gulp-if gulp-uglify minimist gulp-sass browser-sync

var gulp = require('gulp');
var browserSync = require('browser-sync');
//var nodemon = require('gulp-nodemon');
//var sass = require('gulp-sass');

//gulp.task('default', ['browser-sync'], function() {});

// gulp.task('default', ['sass', 'sass:watch', 'browser-sync']);

// gulp.task('sass:watch', function () {
//   console.log("Starting sass-watch.");
//   gulp.watch('./design/scss/**/*.scss', ['sass']);
// });
//
// gulp.task('sass', function () {
//   gulp.src(['./design/scss/**/*.scss'])
//     .pipe(sass.sync().on('error', sass.logError))
//     .pipe(gulp.dest('./design/css/'));
// });


var minimist = require('minimist');

var minimistOptions = {
  string: 'env',
  default: {
    env: process.env.NODE_ENV || 'production'
  }
};

var options = minimist(process.argv.slice(2), minimistOptions);


var exec = require('child_process').exec;
gulp.task('express', function(cb) {
  exec('node bin/www', function(err, stdout, stderr) {
    //exec('ls', function(err, stdout, stderr) {

    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

gulp.task('browser-sync', function() {
  console.log("Starting browser-sync.");
  browserSync.init(require('./browser-sync-config.js'));
});
