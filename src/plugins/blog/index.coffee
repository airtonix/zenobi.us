_ = require 'lodash'
util = require 'util'
path = require 'path'
slugify = require 'slugify'
module.exports = (env, done) ->
	preview = env.mode == 'preview'
	TagPageMap = []
	TagRegistry = []

	helpers =
		###
		* @name {getArticles}
		* @param {object} tree content tree
		###

		slugify: slugify

		getArticles: (tree) ->
			# helper that returns a list of articles found in *contents*
			# note that each article is assumed to have its own directory in the articles directory
			if not tree
				return []

			if not _.has tree, '_'
				return tree

			_.chain(tree._.directories)
				.map (item) ->
					item.index
				.sort (a, b) ->
					b.date - a.date
				.value()

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
			return [
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

		###
		* @param {string} tag tag name to retrieve source index page for
		* @returns {string} absolute url to the source paginated index of the tag
		###
		getTagHome: (tag) -> TagPageMap[tag]

		###
		* @param {env.plugins.Page} page Page Instance
		* @returns {array} an array of strings (tags)
		###
		getTagsFromArticle: (page) ->
			if not page or not page.metadata or not page.metadata.tags
				return []

			_.chain(page.metadata.tags.split ',')
				.invoke('trim')
				.flatten()
				.compact()
				.value()

		getAllTags: (contents) ->
			_.chain(helpers.getArticles(contents))
				.map (article) ->
					helpers.getTagsFromArticle article
				.flatten()
				.value()

		# return a list of articles that have tag tagName
		getArticlesByTag: (contents, tagName) ->
			_.chain(helpers.getArticles(contents))
				.sort (a, b) ->
					b.date - a.date
				.filter (item) ->
					item.metadata.tags and item.metadata.tags.split(/,\s*/).indexOf(tagName) > -1
				.value()


		###
		* @name {getRelated}
		* @param {env.plugins.Page} page instance of Page
		* @param {object} tree [description]
		###
		getRelated: (page, tree) ->
			pageTags = helpers.getTagsFromArticle page

			_.chain( helpers.getArticles(tree) )
				.reject (item) ->
					item.filepath.full is page.filepath.full
				.map (item) ->
					itemTags = helpers.getTagsFromArticle(item)
					matching = _.intersection pageTags, itemTags
					item if matching.length
				.flatten()
				.compact()
				.value()

	_.extend env.locals, helpers

	paginator_defaults =
		source: 'articles'
		title: "Articles"
		titleTemplate: null
		mount: 'archive'
		perPage: 10
		template: 'article-list.jade'
		filenameTemplateFirst: 'index.html'
		filenameTemplate: '<%= index %>/index.html'
		treeKeyTemplate: 'archive-<%= page.pageNum %>.page'

	tag_defaults =
		source: 'articles'											# source of tag discovery
		mount: 'tags'												# filename path root
		perPage: 10													# page size
		template: 'article-list.jade'								# page template to use
		titleTemplate: 'Tagged: <%= tag %>'							# lodash template: page title
		filenameTemplateFirst: '<%= slug %>/index.html'				# lodash template: first filename
		filenameTemplate: '<%= slug %>/<%= index %>/index.html'		# lodash template: every other filename
		treeKeyTemplate: '<%= slug %>-<%= page.pageNum %>.page'		# lodash template: tree item key under treeRoot
		treeRoot: 'tags'											# string keyname of content tree item


	paginator_options = _.merge paginator_defaults, env.config.blog.paginator or {}
	tag_options = _.merge tag_defaults, env.config.blog.tags or {}


	###
	* @name {BlogPage}
	* @param {string} slug slugified title 
	* @param {function} getSlug returns the slugifed title
	###
	class BlogPage extends env.plugins.MarkdownPage

		@property 'slug', 'getSlug'
		getSlug: ->
			moment(@metadata.date).format('YYYY-MM-DD') + "/" + slugify(@metadata.title)

		@property 'tags', 'getTags'
		getTags: -> helpers.getTagsFromArticle @

	env.registerContentPlugin 'articles', '**/articles/**/*.*(markdown|mkd|md)', BlogPage


	###
	* @name PaginatorPage
	###
	class PaginatorPage extends env.plugins.Page
		###
		* @name constructor
		* @param {integer} pageNum current page number
		* @param {integer} totalPages number of total pages
		* @param {object} articles list of article objects for this paginated page
		* @returns {PaginatorPage} instance of `env.plugins.Page`
		###
		constructor: (@pageNum, @totalPages, @items, @options) ->
			metadata = _.extend @options,
				subtitle: ""
				indext: @pageNum

			@paginator =
				index: @pageNum
				total: @totalPages

			if @options.tplTitle
				@title = @options.tplTitle metadata

			super(null, metadata)

		getUrl: ->
			super env.config.baseUrl

		getFilename: ->
			output = [
				@options.mount
			]
			if @pageNum is 1
				output.push @options.tplFilenameFirst @metadata
			else
				output.push @options.tplFilename @metadata

			output = output.join '/'
			output

		getView: -> (env, locals, contents, templates, callback) =>
			template = templates[@options.template]
			if not template?
				return callback new Error "unknown articles template '#{ @options.template }'"

			# page.paginator.next = contents[options.treeRoot][@paginator.index + 1]
			# page.paginator.previous = contents[options.treeRoot][@paginator.index - 1]

			# setup the template context
			context = {@items, page: @}
			# extend the template context with the enviroment locals
			env.utils.extend context, locals

			# finally render the template
			template.render context, callback


	paginate = (articles, options) ->
		# populate pages
		numPages = Math.ceil articles.length / options.perPage
		pages = []

		for i in [0...numPages]
			list = articles.slice i * options.perPage, (i + 1) * options.perPage
			options.index = i+1
			page = new PaginatorPage i+1, numPages, list, options
			pages.push page

		# create the object that will be merged with the content tree (contents)
		# do _not_ modify the tree directly inside a generator, consider it read-only
		output = {}
		# 1. Push each page onto the content tree
		# 1. Add references to prev/next to each page
		for page, i in pages
			if i > 0
				page.paginator.previous = pages[i - 1]
			if i < pages.length
				page.paginator.next = pages[i + 1]

			treeKey = "#{i}.page"
			if i is 0
				treeKey = "first"

			else if (i is pages.length-1)
				treeKey = "last"

			else			
				treeKey = options.tplTreeKey _.extend(options, page: page)

			output[treeKey] = page


		return output


	###
	* @name ArticlePaginator Generator
	* @param {object} contents current content tree
	* @param {function} callback standard middleware 'done/next' flow
	###
	env.registerGenerator 'articleTimeline', (contents, callback) ->
		content_source = contents[paginator_options.source]

		# pull articles from a directory
		articles = helpers.getArticles content_source
		if !articles.length
			return callback null, {}

		tree = paginate articles, _.extend paginator_options,
			tplTitle: _.template paginator_options.titleTemplate if paginator_options.titleTemplate
			tplFilename: _.template paginator_options.filenameTemplate
			tplFilenameFirst: _.template paginator_options.filenameTemplateFirst
			tplTreeKey: _.template paginator_options.treeKeyTemplate
		
		output = {}
		output[paginator_options.treeRoot] = tree
		# callback with the generated contents
		callback null, output

	###
	* @name TaggedPaginator Generator
	* @param {object} contents current content tree
	* @param {function} callback standard middleware 'done/next' flow
	###
	env.registerGenerator 'articleTags', (contents, callback) ->
		content_source = contents[tag_options.source]

		# find all tags
		TagRegistry = helpers.getAllTags content_source

		if not TagRegistry?.length
			return callback null, {}
		collection = []
		
		# populate pages
		for tag in TagRegistry

			articles = helpers.getArticlesByTag content_source, tag

			options =  _.extend _.clone(tag_options),
				title: tag
				tag: tag
				slug: slugify(tag)
				tplTitle: _.template tag_options.titleTemplate if tag_options.titleTemplate
				tplFilename: _.template tag_options.filenameTemplate
				tplFilenameFirst: _.template tag_options.filenameTemplateFirst
				tplTreeKey: _.template tag_options.treeKeyTemplate

			paginated = paginate articles, options
			TagPageMap[tag] = paginated.first.url
			collection.push paginated

		output = {}
		output[paginator_options.treeRoot] = collection
		# callback with the generated contents
		callback null, output

	done()
