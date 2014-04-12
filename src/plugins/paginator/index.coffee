_ = require 'lodash'

module.exports = (env, callback) ->
  ### Articles plugin. Defaults can be overridden in config.json
      e.g. "paginator": {"perPage": 10} ###

  defaults =
    template: 'index.jade' # template that renders pages
    articles: 'articles' # directory containing contents to paginate
    first: 'index.html' # filename/url for first page
    filename: 'page/%d/index.html' # filename for rest of pages
    perPage: 2 # number of articles per page

  # assign defaults any option not set in the config file
  options = env.config.paginator or {}
  for key, value of defaults
    options[key] ?= defaults[key]

  console.log "options", options

  getMonthName = (index) ->
    # takes a number, returns the equivliant julian calendar month
    strings = [
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
    ]

    strings[index]

  getArticles = (contents) ->
    # helper that returns a list of articles found in *contents*
    # note that each article is assumed to have its own directory in the articles directory
    articles = contents[options.articles]._.directories.map (item) -> item.index
    articles.sort (a, b) -> b.date - a.date
    return articles

  getArticleTimeline = (contents) ->
    # groups articles by year then month
    _.chain(getArticles contents)

      # group by year
      .groupBy (item) ->
        # pull the year out of the article datestamp
        item.date.getFullYear()

      # group each sub collections items by month
      .mapValues (year) ->
        _.groupBy year, (item, key) ->
          # pull the english month out of the article datestamp
          getMonthName(item.date.getMonth())

      # pull the resulting object out and return it
      .value()


  class PaginatorPage extends env.plugins.Page
    ### A page has a number and a list of articles ###

    constructor: (@pageNum, @articles) ->

    getFilename: ->
      if @pageNum is 1
        options.first
      else
        options.filename.replace '%d', @pageNum

    getView: -> (env, locals, contents, templates, callback) ->
      # simple view to pass articles and pagenum to the articles template
      # note that this function returns a funciton
      # get the pagination template
      template = templates[options.template]
      if not template?
        return callback new Error "unknown articles template '#{ options.template }'"

      # setup the template context
      context = {@articles, @prevPage, @nextPage}

      # extend the template context with the enviroment locals
      env.utils.extend context, locals

      # finally render the template
      template.render context, callback

  # register a generator, 'articles' here is the content group generated content will belong to
  # i.e. contents._.articles
  env.registerGenerator 'paginator', (contents, callback) ->

    # find all articles
    articles = getArticles contents

    # populate pages
    numPages = Math.ceil articles.length / options.perPage
    pages = []
    for i in [0...numPages]
      pageArticles = articles.slice i * options.perPage, (i + 1) * options.perPage
      pages.push new PaginatorPage i + 1, pageArticles

    # add references to prev/next to each page
    for page, i in pages
      page.prevPage = pages[i - 1]
      page.nextPage = pages[i + 1]

    # create the object that will be merged with the content tree (contents)
    # do _not_ modify the tree directly inside a generator, consider it read-only
    rv = {pages:{}}
    for page in pages
      rv.pages["#{ page.pageNum }.page"] = page # file extension is arbitrary
    rv['index.page'] = pages[0] # alias for first page

    # callback with the generated contents
    callback null, rv

  # add the article helper to the environment so we can use it later
  env.helpers.getArticles = getArticles
  env.helpers.getArticleTimeline = getArticleTimeline

  # tell the plugin manager we are done
  callback()
