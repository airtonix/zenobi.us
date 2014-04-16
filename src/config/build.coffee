base = require './base'
_ = require 'lodash'

config =
	output: "./build",
	locals:
		site:
			url: "http://zenobi.us"

module.exports = _.merge base, config