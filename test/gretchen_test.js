'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

function testGretchen (test, gretchen) {

  test.expect(6);
  test.ok(gretchen);

  // Sanity on request:
  var request = gretchen();
  test.ok(request);

  // Sanity on mocks:
  var mocks = request.mocks;
  test.ok(mocks);
  test.equal(mocks.hello(), 'hello', 'should return mock data');

  // Sanity on app:
  var app = request.app;
  test.ok(app);

  // Sanity on request calls:
  request('GET', '/', function (err, res, data) {
    test.equal(data, 'Hello World!', 'should handle mock request');
    test.done();
  });
}

exports.gretchen = {
  setUp: function(done) {
    done();
  },
  default_options: function(test) {
    testGretchen(test, require('../tmp/test_default'));
  },
  custom_options: function(test) {
    testGretchen(test, require('../tmp/test_custom'));
  },
};
