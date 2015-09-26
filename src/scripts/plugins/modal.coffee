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
injectable = require '../lib/injectable'


sumatra.export 'modal', ->

    class ModalPlugin
        bindEvents: ->
            @element.find '.close-modal', =>
                $(this).click => @element.removeClass 'active'

            @element.bind 'modal-off', () ->
                console.log arguments

        modalOn: ->
            @element.addClass 'active'

        eventOff: ->
            @element.removeClass 'active'

