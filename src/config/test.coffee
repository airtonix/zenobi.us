build = require './build'
_ = require 'lodash'

module.exports = _.merge build,
	locals: _.merge build.locals,
		site:
			url: "http://nova.jiricek.info:8000"

		analytics:
			google:
				code: 'UA-TEST-0'
				domain: 'nova.jiricek.info'

