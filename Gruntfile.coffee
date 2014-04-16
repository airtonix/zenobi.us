module.exports = (grunt) ->

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks)
  require('matchdep').filter('grunt-*').forEach(grunt.loadNpmTasks)
  path = require("path")

  @paths =
    build: "build"
    dist: "dist"
    src: "./"

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

    copy:
      build:
        files: [
          expand: true,
          cwd: '<%= paths.build %>'
          dest: '<%= paths.dist %>/'
          src: [
            '**/*.html'
            'assets/img/**/*.{jpg,jpeg,gif,png,webp}'
            'assets/fonts/**/*.{ttf,eot,otf,woff,svg}'
            'assets/css/**/*.css'
            '!assets/vendor/**/*.*'
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
      options:
        wrap: true
        almond: true
        mainConfigFile: "<%= paths.build %>/assets/js/boot.js"
        name: 'boot'
        out: "<%= paths.dist %>/assets/js/application.js"
        replaceRequireScript: [
          files: ['<%= paths.dist %>/**/*.html']
          module: '/assets/js/boot'
          modulePath: '/assets/js/application',
        ]

      test:
        options:
          optimize: "none"

      dist:
        options:
          optimize: "uglify"

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
            'js/application.js'
            'js/**/*.html'
            'img/**/*.{jpg,jpeg,gif,png,webp}'
            'css/**/*.css'
            'fonts/**/*.{ttf,eot,otf,woff,svg}'
            'api/**/*.json'
          ]
        ]

    userev:
      options:
        hash: /([a-f0-9]{8})\.[a-z]+$/

      application:
        src: '<%= paths.dist %>/js/*.js'
        options:
          patterns:
            'Data': /(api\/.*\/[\w\d-]*\.json)/
            'Img': /(img\/[\w\d-]*\.(png|jpg|jpeg|gif))/

      styles:
        src: '<%= paths.dist %>/css/*.css'
        options:
          patterns:
            'Img': /(img\/[\w\d-]*\.(png|jpg|jpeg|gif))/
            'Font': /(fonts\/[\w\d-]*\.(eot|ttf|otf|woff|svg))/

      index:
        src: '<%= paths.dist %>/index.html'
        options:
          patterns:
            'Css': /(css\/[\w\d-]*\.css)/
            'Js': /(js\/[\w\d-]*\.js)/

    clean:
      all:
        src: [
          "./*"
          "!./{src,node_modules}"
          "!./{package.json,.bowerrc,bower.json,.gitignore}"
          "!./{Gruntfile,app}.coffee"
          "!./readme.md"
          "!./CNAME"
        ]

      build:
        src: ["<%= paths.build %>"]

      dist:
        src: ["<%= paths.dist %>"]

    filerev_assets:
      dist:
        options:
          prettyPrint: 8
          dest: "<%= paths.dist %>/js/templates/map.json"
          patterns: [
            [ /dist\\/g, "" ]
            [ /\\/g, "/" ]
          ]
    # "

    bump:
      options:
        files: ['package.json', 'bower.json']
        updateConfigs: ['pkg', 'bower']
        commit: true
        createTag: true
        push: true
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


  grunt.registerMultiTask "wintersmith", "loads wintersmith", () ->
    async = @async()
    if @data.options.async
      @data.options.async = async
    grunt.log.writeln "Running Wintersmith: ", @target

    klass = require './app.coffee'
    wintersmith = new klass(@data.options)
    wintersmith.start()


  grunt.registerTask "default", [
    "clean"
    "wintersmith:preview"
  ]

  grunt.registerTask "test", [
    'build'
    'connect:dist'
  ]

  grunt.registerTask 'build', [
    'clean:all'
    'wintersmith:build'
    'copy'
    'requirejs:dist'
    'filerev'
    'userev'
    'clean:build'
  ]

  grunt.registerTask "deploy", [
    'bump:patch'
    'build'
    'gh-pages'
    'clean'
  ]