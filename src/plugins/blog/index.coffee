_ = require 'lodash'
util = require 'util'
path = require 'path'

module.exports = (env, done) ->
	preview = env.mode == 'preview'

	helpers =

		getArticles: (tree) ->
			# helper that returns a list of articles found in *contents*
			# note that each article is assumed to have its own directory in the articles directory
			articles = tree._.directories.map (item) -> item.index
			articles.sort (a, b) -> b.date - a.date

		getArticleTimeline: (page) ->

			# groups articles by year then month
			_.chain helpers.getArticles(page)

				# group by year
				.groupBy (item) ->
					# pull the year out of the article datestamp
					item.date.getFullYear()

				# group each sub collections items by month
				.mapValues (year) ->
					_.groupBy year, (item, key) ->
						# pull the english month out of the article datestamp
						getMonthName item.date.getMonth()

				# pull the resulting object out and return it
				.value()

		getMonthName: (index) ->
			# takes a number, returns the equivliant julian calendar month
			[
				'January'
				'February'
				'March'
				'April'
				'May'
				'June'
				'July'
				'August'
				'September'
				'October'
				'November'
				'December'
			][index]

	_.extend env.locals, helpers

	paginator_defaults =
		title: "Articles"
		root: 'articles'
		mount: 'archive'
		filename: 'archive'
		first: 'index.html'
		perPage: 2
		template: 'archive.jade'
		filenameTemplate: '%d/index.html'


	paginator_options = _.merge paginator_defaults, env.config.blog.archive or {}


	class PaginatorPage extends env.plugins.Page
		defaultMeta =
			title: paginator_options.title

		constructor: (@pageNum, @totalPages, @articles) ->
			metadata = _.extend defaultMeta, 
				subtitle: ""
				paginator: 
					index: @pageNum
					total: @totalPages

			super(null, metadata)

		getFilename: ->
			output = [
				paginator_options.root
			]
			if @pageNum is 1
				output.push paginator_options.first
			else
				output.push paginator_options.filenameTemplate.replace '%d', @pageNum

			output.join("/")

		getView: -> (env, locals, contents, templates, callback) ->
			template = templates[paginator_options.template]
			if not template?
				return callback new Error "unknown articles template '#{ paginator_options.template }'"

			# setup the template context
			context = {@articles, @prevPage, @nextPage, page: @}
			# extend the template context with the enviroment locals
			env.utils.extend context, locals

			# finally render the template
			template.render context, callback


	env.registerGenerator 'paginator', (contents, callback) ->
		articles = helpers.getArticles contents[paginator_options.root]
		if !articles.length
			return callback null, {}

		# populate pages
		numPages = Math.ceil articles.length / paginator_options.perPage
		pages = []
		for i in [0...numPages]
			pageArticles = articles.slice i * paginator_options.perPage, (i + 1) * paginator_options.perPage
			pages.push new PaginatorPage i + 1, numPages, pageArticles

		# add references to prev/next to each page
		for page, i in pages
			page.prevPage = pages[i - 1]
			page.nextPage = pages[i + 1]

		# create the object that will be merged with the content tree (contents)
		# do _not_ modify the tree directly inside a generator, consider it read-only
		archive = {}
		out = archive["#{paginator_options.mount}"] = {}

		for page in pages
			out["#{ page.pageNum }.page"] = page # file extension is arbitrary

		# callback with the generated contents
		callback null, archive


	# post_defaults =
	# 	template: "article.jade"
	# 	root: "articles"

	# post_options = _.extend post_defaults, env.config.blog.post

	# class BlogpostPage extends env.plugins.MarkdownPage

	# 	getTemplate: ->
	# 		@metadata.template or post_options.template or super()

	# 	getFilenameTemplate: ->
	# 		@metadata.filenameTemplate or post_options.filenameTemplate or super()

	# env.registerContentPlugin 'posts', "#{post_options.root}**/*.*(markdown|mkd|md)", BlogpostPage

	done()