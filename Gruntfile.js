module.exports = function (grunt) {
  var path = require('path');
  var matchdep = require('matchdep');
      matchdep.filterDev('grunt-*').forEach(grunt.loadNpmTasks)
      matchdep.filterDev('assemble-*').forEach(grunt.loadNpmTasks)
      matchdep.filterDev('assemble').forEach(grunt.loadNpmTasks)

  var useminPaths = [
        "<%= site.dest %>/{,*/}*.html",
        "<%= site.dest %>/assets/css/*.css",
        "<%= site.dest %>/assets/js/*.js"
        ]
  var assetRevPattern = {
        files: [{
          src: [
            '<%= site.dest %>/assets/js/*.js',
            '<%= site.dest %>/assets/css/*.css',
            // '<%= site.dest %>/assets/img/*.{png,jpg,jpeg,gif,webp}',
            // '<%= site.dest %>/assets/{,*/}fonts/*.{ttf,otf,eot,woff,svg}',
          ]
         }]
      }
  grunt.util._.mixin({
    read: function(src) {
      grunt.file.read(path.join('src/data', src));
    }
  });

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    site: grunt.file.readYAML('config.yml'),

    assemble: {
      options: {
        engine: 'swig',
        site: '<%= site %>',
        plugins: [
          'assemble-contrib-anchors',
          'assemble-contrib-toc'
        ],
        assets: 'assets',
        helpers: ['src/extensions/{,*/}*.js', ],
        layoutdir: 'src/templates/',
        layoutext: '.html'

      },

      site: {
        files:[{
          expand: true,
          cwd: 'src/data/pages',
          src: [
            '*.{md,markdown,yml}',
            '{,*/}*.{md,markdown,yml}'
          ],
          dest: '<%= site.dest %>'
        }]
      }

    },

    copy: {
      dist: {
        files: [{
          cwd: 'src/assets/',
          expand: true,
          src: [
            '**/*.js',
            '**/*.css',
          ],
          dest: '<%= site.dest %>/assets/'
        },{
          cwd: 'src/assets/',
          expand: true,
          flatten: true,
          src: [
            '**/fonts/*.{ttf,otf,eot,woff,svg}',
          ],
          dest: '<%= site.dest %>/assets/fonts/'
        }, {
          cwd: 'src/assets/',
          expand: true,
          flatten: true,
          src: [
            '**/*.{png,jpg,jpeg,gif,webp}',
          ],
          dest: '<%= site.dest %>/assets/img/'
        }]
      },
      dev: {
        files: [{
          expand: true,
          cwd: 'src/assets/',
          src: [
            '**/*.js',
            '**/*.css',
            '**/fonts/*.{ttf,otf,eot,woff,svg}',
            '**/*.{png,jpg,jpeg,gif,webp}',
          ],
          dest: '<%= site.dest %>/assets/'
        }]
      }
    },

    useminPrepare: {
      src: useminPaths,
      options: {
        dest: "<%= site.dest %>/",
        root: path.join(process.cwd(), '<%= site.dest %>')
      }
    },

    filerev: {
      options: {
        algorithm: 'sha1',
        length: 7
      },
      assets: assetRevPattern
    },

    usemin: {
      html: useminPaths,
      options : {
        assetDirs: path.join(process.cwd(), '<%= site.dest %>')
      }
    },

    watch: {
      assets: {
        files: [
          'src/assets/{,**/}*.*',
        ],
        tasks: ['build', 'watch']
      },
      templates: {
        files: [
          'src/data/{,*/}*.*',
          'src/templates/{,*/}*.*',
        ],
        tasks: ['assemble', 'watch']
      },
      app: {
        files: [
          'GruntFile.js',
        ],
        tasks: ['dev', 'watch']
      }
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
        'dest',
        ],
      temp: [
        '.tmp',
        '.grunt'
      ]
    },
  });


  grunt.registerTask('dist', [
    'clean',
    'copy:dist',
    'assemble',
    'less',
    'useminPrepare',
    // 'imagemin',
    'concat',
    'cssmin',
    // 'htmlmin',
    'uglify',
    'filerev',
    'usemin'
  ]);

  grunt.registerTask('dev', [
    'clean',
    'copy:dev',
    'assemble',
    'less',
  ]);

  

  grunt.registerTask('server', [
      'dev',
      'connect',
      'clean:temp',
      'watch'
    ]);

  grunt.registerTask('default', 'server');

};
