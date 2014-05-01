module.exports =
  locals: require '../context'
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
    includePaths: [
      "src/contents/assets/css"
      "src/templates/assets/css"
      "src/contents/assets/vendor"
      "src/contents/assets/vendor/bourbon/app/assets/stylesheets"
      "src/contents/assets/vendor/foundation/scss"
      "src/contents/assets/vendor/foundation/scss/foundation/components"
    ]
    minify: false

  markdown:
    smartLists: true
    smartypants: true

