base = require './base'
_ = require 'lodash'

module.exports = _.merge base, 
	locals: _.merge base.locals, 
		site:
			url: "http://nova.jiricek.info:8000"
		analytics: null

	ignore: [
		"**/.*.tmp"
	]
