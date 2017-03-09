module.exports = function(grunt) {

  /**
   * Pass in grunt instance as first require
   */
  require('time-grunt')(grunt);


  /**
   * Begin grunt configuration
   */
  grunt.initConfig ({

    /**
     * Import project information
     */
    pkg: grunt.file.readJSON('package.json'),

    /**
     * Set project banner
     */
    tag: {
      banner: '/*!\n' +
      ' * <%= pkg.name %>\n' +
      ' * <%= pkg.title %>\n' +
      ' * @author <%= pkg.author %>\n' +
      ' * @version <%= pkg.version %>\n' +
      ' * Copyright <%= pkg.copyright %>. <%= pkg.license %> licensed.\n' +
      ' */\n'
    },

    /**
     * Sass task
     */
    sass: {
      dev: {
        options: {
          style: 'expanded',
          banner: '<%= tag.banner %>',
          compass: true
        },
        files: [
          {
            expand: true,
            cwd: 'app/assets/sass',
            src: ['**/main.scss'],
            dest: 'app/assets/css',
            ext: '.css'
          }
        ]
      },
      dist: {
        options: {
          style: 'compressed',
          compass: true
        },
        files: [
          {
            expand: true,
            cwd: 'app/assets/sass',
            src: ['**/main.scss'],
            dest: 'app/assets/css',
            ext: '.css'
          }
        ]
      }
    },


    /**
     * Linting
     */
    jshint: {
      files: {
        src: [
          'app/*.js',
          'app/*.es6',
          'app/src/*.js',
          'app/src/**/*.js',
          '!app/src/libs/vendor/**'
        ]
      }
    },

    /**
     * Clean task
     */
    clean: {
      build: {
        src: ['app/dist/*']
      }
    },

    /**
     * Shell task
     */
    shell: {
      symlink: {
        command: 'ln -sf ../../../node_modules app/dist/libs/vendor'
      },
      babel: {
        command: './node_modules/.bin/babel app/src --out-dir app/dist --ignore "app/src/libs/vendor"'
      }
    },

    /**
     * Template/html minification
     */
    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: [{
          expand: true,
          cwd: 'app/src',
          src: ['**/*.html', '*.html', '!libs/vendor/**'],
          dest: 'app/dist'
        }]
      }
    },

    /**
     * Watch task
     */
    watch: {
      options: {
        livereload: false
      },
      scripts: {
        files: [
          'app/*.js',
          'app/*.es6',
          'app/src/*.js',
          'app/src/*.es6',
          'app/src/libs/native/**/*.js',
          'app/src/libs/native/**/*.es6',
          '!app/libs/vendor/**'
        ],
        options: {
          spawn: true
        },
        tasks: ['shell:babel']
      },
      html: {
        files: [
          'app/src/**/*.html',
          'app/src/*.html',
          '!app/src/libs/vendor/**'
        ],
        options: {
          spawn: true
        },
        tasks: ['htmlmin']
      },
      sass: {
        files: 'app/assets/sass/**/*.{scss,sass}',
        tasks: ['sass:dev']
      }
    }
  });

  /**
   * Load grunt plugins
   */
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  /**
   * Default task
   * Run `grunt` on the command line
   */
  grunt.registerTask('default', [
    'sass:dev',
    'clean',
    'shell:babel',
    'htmlmin',
    'shell:symlink',
    'lint',
    'watch'
  ]);

  /**
   * Lint task
   */
  grunt.registerTask('lint', [
    'jshint'
  ]);

  /**
   * Symlink task
   */
  grunt.registerTask('symlink', [
    'shell:symlink'
  ]);

  /**
   * Template minification task
   */
  grunt.registerTask('templates', [
    'htmlmin'
  ]);

  /**
   * Transpile task
   */
  grunt.registerTask('transpile', [
    'shell:babel'
  ]);

  /**
   * "Compile" task
   */
  grunt.registerTask('compile', [
    'sass:dev',
    'clean',
    'shell:babel',
    'htmlmin',
    'shell:symlink'
  ]);
};
