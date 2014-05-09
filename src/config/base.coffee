module.exports =
  locals: require './locals'
  port: 8000
  contents: "./src/contents/"
  templates: "./src/templates"
  
  ignore: [
    "*/test"
    "*/test/*"
    "**/test/"
    "**/test/*"
  ]

  plugins: [
    "./src/plugins/pkginfo"
    "./src/plugins/pkginfo"
    "./src/plugins/helpers"
    "./src/plugins/blog"
    "wintersmith-coffee"
    "wintersmith-jade"
    "wintersmith-node-sass"
    "wintersmith-data-json"
  ]

  static:
    'assets/vendor/**/*': "./bower_components"

  require:
    _: "underscore"
    moment: "moment"
    typogr: "typogr"
    util: "util"
    path: "path"

  blog:
    archive:
      root: 'articles'
      first: 'index.html'
      perPage: 2
      template: 'archive.jade'
      filenameTemplate: 'page/:page/index.html'

    article:
      template: 'article.jade'
      filenameTemplate: '/:year/:month/:day/:file/index.html'

  jade:
    pretty: true

  'node-sass':
    minify: false
    includePaths: [
      "src/contents/assets/css"
      "src/templates/assets/css"
      "bower_components/"
      "bower_components/bourbon/app/assets/stylesheets"
      "bower_components/foundation/scss"
      "bower_components/foundation/scss/foundation/components"
    ]

  markdown:
    smartLists: true
    smartypants: true

