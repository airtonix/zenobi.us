base = require './base'
_ = require 'lodash'

config =
  output: "./build",
  locals:
    url: "http://zenobi.us"

module.exports = _.merge base, config