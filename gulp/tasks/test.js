'use strict';

var mocha = require('gulp-mocha');
var config = require('../config');

module.exports = function (gulp) {
  gulp.task('test', ['lint'], function (cb) {
    gulp.src(config.paths.test)
      .pipe(mocha({reporter: 'spec'}))
      .on('end', cb);
  });
};
