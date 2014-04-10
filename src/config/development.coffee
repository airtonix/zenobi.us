base = require './base'
_ = require 'lodash'

config =
  locals:
    url: "http://nova.zenobi.us:8000"
  logging: 'verbose'
module.exports = _.merge base, config