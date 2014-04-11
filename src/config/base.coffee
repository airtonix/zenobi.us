module.exports =
  locals: require '../context'
  port:  8000
  contents:  "./src/contents/"
  templates:  "./src/templates"

  ignore:  [
    "*/test"
    "*/test/*"
    "**/test/"
    "**/test/*"
  ]

  plugins:  [
    "./src/plugins/pkginfo"
    "./src/plugins/paginator"
    "wintersmith-coffee"
    "wintersmith-jade"
    "wintersmith-node-sass"
    "wintersmith-data-json"
  ]

  static:
    'assets/vendor/**/*': "./bower_components"

  require:
    _:  "underscore"
    moment:  "moment"
    typogr:  "typogr"

  paginator:
    template: 'archive.jade'
    articles: 'articles'
    first: 'index.html'
    filename: 'page/%d/index.html'
    perPage: 2

  jade:
    pretty:  true

  'node-sass':
    includePaths:  [
      "src/contents/assets/css"
      "src/templates/assets/css"
      "src/contents/assets/vendor"
      "src/contents/assets/vendor/bourbon/app/assets/stylesheets"
      "src/contents/assets/vendor/foundation/scss"
    ]
    minify:  false

  markdown:
    smartLists:  true
    smartypants:  true

