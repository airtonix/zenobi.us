module.exports = (grunt) ->

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks)
  require('matchdep').filter('grunt-*').forEach(grunt.loadNpmTasks)
  path = require("path")

  @paths =
    build: "build"
    dist: "dist"
    src: "src"

  grunt.initConfig

    pkg: grunt.file.readJSON 'package.json'
    bower: grunt.file.readJSON 'bower.json'

    paths: @paths

    connect:
      options:
        port: 8000
        keepalive: true
        hostname: '*'

      dist:
        options:
          base: '<%= paths.dist %>'

    fontello:
      options:
        config: "<%= paths.src %>/contents/assets/font/fontello.json"
        scss: true
        force: true
        zip: "./.grunt/fontello"

      build:
        options:
          fonts: "<%= paths.build %>/assets/font"
          styles: "<%= paths.build %>/assets/css/font"

      dev:
        options:
          fonts: "<%= paths.src %>/contents/assets/font"
          styles: "<%= paths.src %>/templates/assets/css/font"

    clean:
      all:
        src: [
          "./*"
          "!./{src,node_modules,bower_components}"
          "!./{package.json,.bowerrc,bower.json,.gitignore}"
          "!./{Gruntfile,app}.coffee"
          "!./readme.md"
          "!./CNAME"
        ]

      build:
        src: ["<%= paths.build %>"]

      dist:
        src: ["<%= paths.dist %>"]

    copy:
      build:
        files: [
          expand: true,
          cwd: '<%= paths.build %>'
          dest: '<%= paths.dist %>/'
          src: [
            '**/*.html'
            '**/*.{jpg,jpeg,gif,png,webp}'
            'assets/font/**/*.{ttf,eot,otf,woff,svg}'
            'assets/css/**/*.css'
            '!assets/vendor/**/*'
          ]
        ]
      config:
        src:'./CNAME'
        dest: '<%= paths.dist %>/CNAME'

    html2js:
      options:
        module: "app.templates"
        indentString: ''
        htmlmin:
          collapseWhitespace: true

      dist:
        options:
          base: "<%= paths.build %>/"
          rename: (name) ->
            '/epochdb/' + name
        src: ['<%= paths.build %>/js/templates/**/*.html']
        dest: '<%= paths.build %>/js/templates.js'

      test:
        options:
          base: "<%= paths.build %>/"
          rename: (name) ->
            '/dist/' + name
        src: ['<%= paths.build %>/js/templates/**/*.html']
        dest: '<%= paths.build %>/js/templates.js'

    requirejs:
      compile:
        options:
          wrap: true
          almond: true
          mainConfigFile: "<%= paths.build %>/assets/js/boot.js"
          name: 'boot'
          out: "<%= paths.dist %>/assets/js/application.js"
          optimize: "uglify"
          replaceRequireScript: [
            files: ['<%= paths.dist %>/**/*.html']
            module: '/assets/js/boot'
            modulePath: '/assets/js/application',
          ]


    useminPrepare:
      compile:
        src: ['<%= paths.dist %>/**/*.html']

    rev:
      compile:
        files:
          src: [
            '<%= paths.dist %>/assets/js/{,*/}*.js'
            '<%= paths.dist %>/assets/css/{,*/}*.css'
            '<%= paths.dist %>/assets/font/{,*/}*.{ttf,eot,otf,woff,svg}'
            '<%= paths.dist %>/{,**/}**.{png,jpg,jpeg,gif,webp,svg}'
          ]

    usemin:
      options:
        assetsDirs: [
          '<%= paths.dist %>/**/*'
          '<%= paths.dist %>/'
        ]
        patterns:
          html: [
            [/(js\/[\w\d-]*\.js)/g, "Replacing javascript link"]
            [/(css\/[\w\d-]*\.css)/g, "Replacing stylesheet link"]
            [/(img\/[\w\d-]*\.(png|jpeg|jpg|gif))/g, "Replacing image link"]
          ]

      html: ['<%= paths.dist %>/**/*.html']
      css: ['<%= paths.dist %>/assets/css/**/*.css']
      

    filerev:
      options:
        encoding: 'utf8',
        algorithm: 'md5',
        length: 8
        copy: false

      production:
        files: [
          expand: true
          cwd: '<%= paths.dist %>'
          dest: '<%= paths.dist %>'
          src: [
            'assets/js/application.js'
            'assets/js/**/*.html'
            '**/**.{jpg,jpeg,gif,png,webp}'
            'assets/css/**/*.css'
            'assets/font/**/*.{ttf,eot,otf,woff,svg}'
          ]
        ]

    userev:
      options:
        hash: /(\.[a-f0-9]{8})\.[a-z]+$/

      application:
        src: '<%= paths.dist %>/assets/js/*.js'
        options:
          patterns:
            'Data': /(api\/.*\/[\w\d-]*\.json)/
            'Img': /(img\/[\w\d-]*\.(png|jpg|jpeg|gif))/

      styles:
        src: '<%= paths.dist %>/assets/css/*.css'
        options:
          patterns:
            'Img': /(img\/[\w\d-]*\.(png|jpg|jpeg|gif))/
            'Font': /(font\/[\w\d-]*\.(eot|ttf|otf|woff|svg))/

      index:
        src: '<%= paths.dist %>/**/*.html'
        options:
          patterns:
            'Img': /(img\/[\w\d-]*\.(png|jpeg|jpg|gif))/
            'Css': /(css\/[\w\d-]*\.css)/
            'Js': /(js\/[\w\d-]*\.js)/

    bump:
      options:
        files: ['package.json', 'bower.json']
        updateConfigs: ['pkg', 'bower']
        commit: false
        createTag: false
        push: false
        pushTo: 'origin develop'

    "gh-pages":
      options:
        base: 'dist'
        message: "Release <%= pkg.version %>"
        tag: "<%= pkg.version %>"
      src: ['**']

    wintersmith:
      preview:
        options:
          mode: 'preview'
      build:
        options:
          mode: 'build'
          async: true
      test:
        options:
          mode: 'test'
          async: true


  grunt.registerMultiTask "wintersmith", "loads wintersmith", () ->
    async = @async()
    if @data.options.async
      @data.options.async = async

    klass = require './src/app'
    wintersmith = new klass(@data.options)
    wintersmith.start()


  grunt.registerTask "default", [
    "clean"
    "wintersmith:preview"
  ]

  grunt.registerTask "test", [
    'clean:all'
    'wintersmith:test'
    'compile'
    'connect:dist'
  ]

  grunt.registerTask 'compile', [
    'copy'
    'requirejs:compile'
    'useminPrepare:compile'
    'rev:compile'
    'usemin'
    'clean:build'
  ]

  grunt.registerTask "deploy", [
    'bump:patch'
    'clean:all'
    'wintersmith:build'
    'compile'
    'gh-pages'
    'clean'
  ]