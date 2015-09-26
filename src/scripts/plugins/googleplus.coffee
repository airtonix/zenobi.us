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


sumatra.export 'googleComments', ->

    class GooglePlusCommentWidgetPlugin extends injectable
        defaults:
            width: 650
            first_party_property: 'BLOGGER'
            view_type: 'FILTERED_POSTMOD'

        initialize: ->
            @inject $("head"), "//apis.google.com/js/plusone.js"
            console.log 'injected'
            if !@element.hasAttr 'id'
                return false

            setTimeout @ready, 5

        ready: ->
            if !gapi
                setTimeout @ready, 5
                return false

            gapi.comments.render @element.attrs('id'), _.extend @defaults,
                href: @element.data 'location'

