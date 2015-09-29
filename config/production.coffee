#
# Framework
#
_ = require 'lodash'

#
# Project
#
defaults = require './default'

#
# Module
#
config =
	watch: true

	context:
		site:
			urls:
				root: "http://zenobi.us/"
				static:  'static'
				media:  'media'

	target:
		root: './dist/production'

#
# Exports
#
module.exports = _.extend defaults, config