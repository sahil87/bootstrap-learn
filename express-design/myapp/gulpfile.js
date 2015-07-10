'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');
var nodemon = require('gulp-nodemon');


gulp.task('default', ['browser-sync'], function() {});

gulp.task('browser-sync', ['nodemon'], function() {
  console.log("browser-sync");
  browserSync.init(require('./browser-sync-config.js'));
});

gulp.task('nodemon', function(cb) {
  console.log("nodemon");
  //We use this 'started' variable to ensure callback is called only once
  var started = false;
  return nodemon({
    script: 'bin/www',
    ext: 'js html hbs scss',
    env: {
      'DEBUG': 'myapp:*'
    }
  }).on('start', function() {
    if (!started) {
      cb();
      started = true;
    }
  }).on('restart', function onRestart() {
    setTimeout(function reload() {
			browserSync.reload({
        stream: false
      });
    }, 2000);
  });
});
