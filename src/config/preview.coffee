base = require './base'
_ = require 'lodash'

module.exports = _.merge base, 
	ignore: ["**/.*.tmp"]
	locals: _.merge base.locals, 
		site:
			url: "http://nova.jiricek.info:8000"

		analytics:
			google:
				code: 'UA-TEST-0'
				domain: 'nova.jiricek.info'

		mandrill: _.merge base.locals.mandrill,
			apikey: 'TEST'
