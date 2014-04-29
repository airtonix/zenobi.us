_ = require "lodash"

module.exports = (env, callback) ->

	class IndexPage extends ennv.plugins.Page
	    constructor: () ->
			contents[options.articles]._.directories.map (item) -> item.index

	env.registerGenerator 'indexer', (contents, callback) ->
