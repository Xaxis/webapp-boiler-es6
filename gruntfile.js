module.exports = function(grunt) {
  grunt.initConfig ({

    /**
     * Import project information
     */
    pkg: grunt.file.readJSON('package.json'),

    /**
     * Project details
     */
    project: {
      public: '/app/',
      sass: '<%= project.public %>assets/sass',
      css: [
        '<%= project.public %>css/style.scss'
      ],
      js: [
        '<%= project.public %>js/*.js'
      ]
    },

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
        command: 'ln -s ../../../node_modules app/dist/libs/vendor'
      }
    },

    /**
     * Babel task
     */
    babel: {
      options: {
        sourceMap: false
      },
      dist: {
        files: [{
          expand: true,
          cwd: 'app/src',
          src: ['**/*.js', '**/*.es6', '!libs/vendor/**'],
          dest: 'app/dist',
          ext:'.js'
        }]
      }
    },

    /**
     * Watch task
     */
    watch: {
      options: {
        livereload: true
      },
      scripts: {
        files: [
          'app/src/*.js',
          'app/src/*.es6',
          'app/src/libs/native/**/*.js',
          'app/src/libs/native/**/*.es6',
          '!app/libs/vendor/**'
        ],
        options: {
          spawn: true
        },
        tasks: ['babel', 'shell:symlink']
      },
      html: {
        files: [
          '**/*.html'
        ],
        options: {
          spawn: false
        }
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
    'watch'
  ]);

  /**
   * Symlink task
   */
  grunt.registerTask('symlink', [
    'shell:symlink'
  ]);

  /**
   * "Compile" task
   */
  grunt.registerTask('compile', [
    'sass:dev',
    'clean',
    'babel',
    'symlink'
  ]);
};
