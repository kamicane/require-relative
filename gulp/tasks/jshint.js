'use strict';

var stylish = require('jshint-stylish');
var lazypipe = require('lazypipe');
var jshint = require('gulp-jshint');
var config = require('../config');

var jshintPipe = function (jshintrc) {
  return lazypipe()
    .pipe(jshint, jshintrc)
    .pipe(jshint.reporter, stylish)
    .pipe(jshint.reporter, 'fail')();
};

module.exports = function (gulp) {
  gulp.task('jshint', ['jshint:lib', 'jshint:test', 'jshint:gulp']);

  gulp.task('jshint:lib', function () {
    return gulp.src(config.paths.lib)
      .pipe(jshintPipe('.jshintrc'));
  });

  gulp.task('jshint:test', function () {
    return gulp.src(config.paths.test)
      .pipe(jshintPipe('.spec.jshintrc'));
  });

  gulp.task('jshint:gulp', function () {
    return gulp.src(config.paths.gulp)
      .pipe(jshintPipe('.jshintrc'));
  });
};
