module.exports =
  locals:
    url: "http://zenobi.us"
    baseUrl:  "/"
    name:  "zenobi.us"
    owner:  "Zenobius Jiricek"
    description:  "Ramblings of an immor(t)al demigod"

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
    "wintersmith-coffee"
    "wintersmith-jade"
    "wintersmith-node-sass"
    "wintersmith-data-json"
  ]

  static:
    'vendor/**/*': "./bower_components"

  require:
    _:  "underscore"
    moment:  "moment"
    typogr:  "typogr"

  jade:
    pretty:  true

  'node-sass':
    includePaths:  [
      "../contents/vendor"
    ]
    minify:  false

  markdown:
    smartLists:  true
    smartypants:  true

