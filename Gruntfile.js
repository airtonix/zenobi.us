module.exports = function (grunt) {

  var matchdep = require('matchdep');
      matchdep.filterDev('grunt-*').forEach(grunt.loadNpmTasks)
      matchdep.filterDev('assemble-*').forEach(grunt.loadNpmTasks)
      matchdep.filterDev('assemble').forEach(grunt.loadNpmTasks)

  grunt.util._.mixin({
    read: function(src) {
      grunt.file.read(require('path').join('src/data', src));
    }
  });

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    site: grunt.file.readYAML('config.yml'),

    assemble: {
      options: {
        engine: 'swig',
        // flatten: true,
        site: '<%= site %>',
        // plugins: ['permalinks'],
        // marked: {
        //   highlight: function (code) {
        //     return require('highlight.js').highlightAuto(code).value;
        //   }
        // }
        // data: ['src/data/**/*.{json,yml}'],
        assets: 'assets',
        helpers: ['src/extensions/**/*.js', ],
        layoutdir: 'src/templates/',
        layoutext: '.html'

      },

      site: {
        files:[{
          expand: true,
          cwd: 'src/data/pages',
          src: ['*.{md,markdown,yml}'],
          dest: '<%= site.dest %>'
        }]
      },

      // resume: {
      //   files: {
      //     '<%= site.build %>/resume/index.html': ['src/templates/pages/resume.html.swig']
      //   }
      // },

      // coverletter: {
      //   files: {
      //     '<%= site.build %>/coverletter/index.html': ['src/templates/pages/coverletter.html.swig']
      //   }
      // },

      // projects: {
      //   files: {
      //     '<%= site.build %>/projects/*': ['src/templates/projects/**/*.swig']
      //   }
      // },

      // posts: {
      //   files: {
      //     '<%= site.build %>/posts/*': ['src/templates/posts/**/*.swig']
      //   }
      // },

    },

    useminPrepare: {
      options: {
        dest: "<%= site.dest %>",
        root: "src"
      },
      html: "<%= site.dest %>/**/*.html"
    },

    copy: {
      dist: {
        files: [{
          expand: true,
          dest: '<%= site.dest %>/assets/',
          src: "src/assets/**/*"
        }]
      }
    },

    // concat: {},
    // imagemin: {},
    // htmlmin: {},

    rev: {
      options: {
        algorithm: 'md5',
        length: 8
      },
      assets: {
        files: [{
          expand: true,
          cwd: '<%= site.dest %>/assets/',
          src: [
            '**/*.js',
            '**/*.css',
            '**/*.{jpg,jpeg,gif,png}',
            '**/*.{eot,svg,ttf,woff}'
          ]
        }]
      }
    },

    usemin: {
      html: "<%= site.dest %>/**/*.html",
      options: {
        assetDirs: [
          '<%= site.dest %>',
          '<%= site.dest %>/assets'
        ]
      }
    },

    watch: {
      pages: {
        files: [
          'src/data/**/*',
          'src/assets/**/*',
          'src/templates/**/*',
          'GruntFile.js'
        ],
        tasks: ['build']
      },
      // copy: {
      //   files: [
      //     'src/images/**',
      //     'src/scripts/**',
      //     'src/styles/**.css',
      //     'src/styles/fonts/**'
      //   ],
      //   tasks: ['copy']
      // }
    },

    connect: {
      dist: {
        options: {
          port: 5455,
          hostname: '0.0.0.0',
          base: '<%= site.dest %>',
          livereload: false
        }
      }
    },

    clean: {
      dist: [
        '<%= site.dest %>',
        '.tmp'
        ]
    },
  });

  grunt.registerTask('build', [
    'clean',
    'assemble',
    'useminPrepare',
    // 'imagemin',
    'concat',
    'cssmin',
    // 'htmlmin',
    'uglify',
    'rev',
    'usemin'
  ]);

  

  grunt.registerTask('server', [
    'build',
    'connect',
    'watch'
  ]);

  grunt.registerTask('default', 'server');

};
