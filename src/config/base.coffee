module.exports =
	locals: require './locals'
	port: 8000
	contents: "src/contents/"
	templates: "src/templates"

	ignore: [
		"*/test"
		"*/test/*"
		"**/test/"
		"**/test/*"
		"**/_*"
	]

	plugins: [
		"./src/plugins/pkginfo"
		"./src/plugins/helpers"
		"./src/plugins/blog"
		"wintersmith-mounter"
		"wintersmith-coffee"
		"wintersmith-jade"
		"wintersmith-node-sass"
		"wintersmith-data-json"
	]

	require:
		_: "underscore"
		moment: "moment"
		typogr: "typogr"
		util: "util"
		path: "path"

	mounter:
		mounts:
			'/vendor/':
				src: './bower_components'

	templateGroups:
		rules: [
			template: 'article.jade',
			pattern: '^articles/.*\.(md|json|yml)$'
		]

	blog:
		archive:
			root: 'articles'
			first: 'index.html'
			perPage: 2
			template: 'article-list.jade'
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
			"src/assets/scss"
			"bower_components/"
			"bower_components/bourbon/app/assets/stylesheets"
			"bower_components/foundation/scss"
			"bower_components/foundation/scss/foundation/components"
		]

	markdown:
		smartLists: true
		smartypants: true

