/*global describe, it, before*/
'use strict';

var assert = require('assert');
var esformatter = require('esformatter');
var fs = require('fs');
var radix = require('../');

function readfile(name) {
  return fs.readFileSync('test/' + name).toString();
}

describe('compare input / output', function() {
  before(function() {
    esformatter.register(radix);
  });

  it('should add the radix parameter', function() {
    var output = esformatter.format(readfile('fixtures/default.js'));
    assert.equal(output, readfile('expected/default.js'));
  });
});
