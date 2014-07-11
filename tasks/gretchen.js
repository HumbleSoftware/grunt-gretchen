/*
 * grunt-gretchen
 * https://github.com/humblesoftware/grunt-gretchen
 *
 * Copyright (c) 2014 Carl Sutherland
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  /**
   * Build the mocks for our test runner.
   */
  var bundle = require('fetch-cli/lib/bundle');

  grunt.registerMultiTask('gretchen', 'Making grunt make fetch happen.', function() {
    var done = this.async();
    var data = this.data;
    var options = this.options({
      routes: 'gretchen/routes',
      mocks: 'gretchen/mocks'
    });

    // Exectue bundle:
    bundle(options)(null, function (err, src) {
      if (err) {
        grunt.log.error(err);
        grunt.fail.warn('Error making fetch happen.');
      } else {
        grunt.file.write(data.dest, src);
        grunt.log.ok('Made fetch happen.');
      }
      done();
    });
  });
};
