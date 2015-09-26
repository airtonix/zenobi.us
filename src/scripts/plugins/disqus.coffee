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


sumatra.export 'disqusComments', ->

    class DisqusCommentWidgetPlugin extends injectable
        defaults:
            shortname: ''

        initialize: ->
            @inject $("head"), "//#{@options.shortname}.disqus.com/embed.js"


sumatra.export 'disqusCounter', ->

    class DisqusCountIndicatorPlugin extends injectable
        defaults:
            shortname: ''

        initialize: ->
            @inject $("head"), "//#{@options.shortname}.disqus.com/count.js"
