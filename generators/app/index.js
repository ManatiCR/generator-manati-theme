'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var _ = require('lodash');

module.exports = yeoman.generators.Base.extend({
  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the super duper ' + chalk.red('Manatí Theme') + ' generator!'
    ));

    var prompts = [{
      name: 'themeName',
      message: 'What\'s the name of this theme?',
      default: 'Manatí Theme'
    },{
      name: 'themeDescription',
      message: 'Please enter a description:',
      default: function(props) {
        return props.themeName+' is the best!';
      }
    },{
      type: 'confirm',
      name: 'hasLiveReload',
      message: 'Do you want livereload to be setup for you?',
      default: true
    }];

    this.prompt(prompts, function (props) {
      this.props = props;
      /**
       * Create snake case slug for Drupal
       */
      if (props.themeName) {
        this.props.themeSlugName = _.snakeCase(props.themeName);
      } else {
        this.props.themeSlugName = 'manati_theme';
      }

      this.destinationRoot(this.destinationPath()+'/'+this.props.themeSlugName);

      // To access props later use this.props.someOption;

      done();
    }.bind(this));
  },

  writing: {
    base: function () {
      this.fs.copyTpl(
        this.templatePath('_package.json'),
        this.destinationPath('package.json'),
        this.props
      );
      this.fs.copyTpl(
        this.templatePath('_theme.info'),
        this.destinationPath(this.props.themeSlugName+'.info'),
        this.props
      );
      this.fs.copyTpl(
        this.templatePath('_template.php'),
        this.destinationPath('template.php'),
        this.props
      );
      this.fs.copyTpl(
        this.templatePath('_theme-settings.php'),
        this.destinationPath('theme-settings.php'),
        this.props
      );
      this.fs.copy(
        this.templatePath('templates'),
        this.destinationPath('templates')
      );
    },

    projectfiles: function () {
      this.fs.copyTpl(
        this.templatePath('_README.md'),
        this.destinationPath('README.md'),
        this.props
      );
      this.fs.copyTpl(
        this.templatePath('_Gruntfile.js'),
        this.destinationPath('Gruntfile.js'),
        this.props
      );
      this.fs.copy(
        this.templatePath('gitignore'),
        this.destinationPath('.gitignore')
      );
      this.fs.copy(
        this.templatePath('editorconfig'),
        this.destinationPath('.editorconfig')
      );
      this.fs.copy(
        this.templatePath('jshintrc'),
        this.destinationPath('.jshintrc')
      );
      this.fs.copy(
        this.templatePath('css'),
        this.destinationPath('css')
      );
      this.fs.copy(
        this.templatePath('sass'),
        this.destinationPath('sass')
      );
      this.fs.copy(
        this.templatePath('js'),
        this.destinationPath('js')
      );
      this.fs.copy(
        this.templatePath('src-js'),
        this.destinationPath('src-js')
      );
    }
  },

  install: function () {
    if (!this.options.skipInstall) {
      this.npmInstall();
    } else {
      this.log('Run npm install to begin working');
    }
  }
});
