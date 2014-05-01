base = require './base'
_ = require 'lodash'

config =
	locals:
		site:
			url: "http://nova.jiricek.info:8000"
		analytics: null

	ignore: [
		"**/.*.tmp"
	]

module.exports = _.merge base, config