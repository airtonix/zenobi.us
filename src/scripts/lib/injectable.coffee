#
# System
#

#
# Framework
#
_ = require 'lodash'
$ = require 'jquery'

#
# Project
#
sumatra = require '../lib/plugin'


class Injectable extends sumatra.Plugin

    inject: (target, source) ->
        $ "<script>"
            .attr
                type: 'text/javascript'
                async: true
                src: source
            .appendTo target


module.exports = Injectable