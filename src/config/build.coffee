base = require './base'
_ = require 'lodash'

module.exports = _.merge base,
	output: "./build"
    locals: _.merge base.locals,
        mandril:
            apikey: 'oMstGBYNlE0KhW0DEd8Wdg'
            endpoint: 'https://mandrillapp.com/api/1.0/messages/send.json'