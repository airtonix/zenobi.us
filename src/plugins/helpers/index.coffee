_ = require "lodash"
util = require 'util'

module.exports = (env, done) ->
	preview = env.mode == 'preview'

	_.extend env.locals,
		getMeta: (page, key) ->
			if page and page.metadata and page.metadata[key]
				return page.metadata[key]

		pageIcon: (page) ->
			if page and page.metadata and page.metadata.icon
				return "icon-#{page.metadata.icon}"
			else
				return ""

		toJson: (obj) ->
			util.inspect obj

		# Resolve url relative to site root 
		url: (p) ->
			url.resolve env.locals.url, p

	done()