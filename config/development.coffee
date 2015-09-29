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
				root: "/"
				static:  '/static'
				media:  'media'

	target:
		root: './dist/development'



#
# Exports
#
module.exports = _.extend defaults, config