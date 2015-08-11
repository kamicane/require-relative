'use strict';

var gulp = require('gulp');
var fs = require('fs');

fs.readdirSync('./gulp/tasks')
  .filter(function (filename) {
    return filename.match(/\.js$/i);
  })
  .forEach(function (filename) {
    require('./gulp/tasks/' + filename)(gulp);
  });