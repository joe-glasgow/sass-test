module.exports = function(grunt) {
  grunt.initConfig({
    sass: {                              // Task
      dist: {                            // Target
        options: {                       // Target options
          style: 'expanded'
        },
        files: {                         // Dictionary of files
          'css/style.css': 'sass/style.scss'      // 'destination': 'source'
        },
        tasks: ['cssmin']
      }
    },
    jshint: {
      // define the files to lint
      files: ['gruntfile.js', '**/*.js'],
      // configure JSHint (documented at http://www.jshint.com/docs/)
      options: {
          // more options here if you want to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true
        }
      }
    },
    cssmin: {
      dist: {
        src: ['css/**.css'],
        dest: 'css/styles.min.css'
      }
    },
    watch: {
      css: {
        files: '**/*.scss',
        tasks: ['sass', 'cssmin'],
        options: {
          livereload: true
        }
      },
      javascript: {
        files: '<%= jshint.files %>',
        tasks: ['jshint'],
        options: {
          livereload: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-yui-compressor');

  grunt.registerTask('hint', ['jshint']);
 // grunt.registerTask('minifycss', ['cssmin']);
  grunt.registerTask('default', ['sass', 'watch', 'jshint', 'cssmin']);
};