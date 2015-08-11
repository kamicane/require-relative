'use strict';

var expect = require('chai').expect;
var path = require('path');

describe('require-relative', function () {
  describe('initialize', function () {
    var relative = require('../lib');

    describe('with valid path parameter', function () {
      var dirname = path.dirname(__dirname);

      it('should expose a function', function () {
        expect(relative).to.be.a('function');
      });

      it('should require path', function () {
        expect(relative('path', dirname)).to.be.a('object');
        expect(relative('path', dirname).dirname).to.be.a('function');
      });

      it('should require chai', function () {
        expect(relative('chai', dirname)).to.be.a('object');
        expect(relative('chai', dirname).should).to.be.a('function');
      });

      it('should require jscs from gulp-jscs', function () {
        var gulpJscsPath = path.join(path.dirname(__dirname), 'node_modules/gulp-jscs');

        expect(relative('jscs', gulpJscsPath)).to.be.a('function');
      });

      it('should require ./lib', function () {
        expect(relative('./lib')).to.be.a('function');
      });
    });

    describe('without valid path parameter', function () {
      it('should throw a TypeError', function () {
        expect(function () {
          relative('test', path.dirname(__dirname));
        }).to.throw('Cannot find module \'test\'');
      });
    });
  });

  describe('exports', function () {
    var relative = require('../lib');

    it('should expose a function', function () {
      expect(relative).to.be.a('function');
    });
    it('should expose resolve function', function () {
      expect(relative.resolve).to.be.a('function');
    });
  });
});