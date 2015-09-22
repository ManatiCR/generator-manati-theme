'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');

describe('manati theme:app', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/app'))
      .withOptions({ skipInstall: true })
      .withPrompts({ themeName: 'Manatí Theme' })
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      'package.json',
      '.editorconfig',
      '.jshintrc',
      '.gitignore',
      'Gruntfile.js',
      'template.php',
      'theme-settings.php',
      'manati_theme.info',
      'src-js',
      'sass',
      'css',
      'templates',
      'templates/system/html.tpl.php',
      'templates/system/page.tpl.php'
    ]);
  });
});
