base = require './base'
_ = require 'lodash'

config =
	output: "./build",

module.exports = _.merge base, config