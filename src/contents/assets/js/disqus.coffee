define [
    'lodash'
    'jquery'
    './plugin'
    './injectable'
    ], (_, $, sumatra, ScriptTagInjector) ->
        
        sumatra.export 'disqusComments', ->
        
            class DisqusCommentWidgetPlugin extends ScriptTagInjector
                defaults:
                    shortname: ''
                
                initialize: ->
                    @inject $("head"), "//#{@options.shortname}.disqus.com/embed.js"


        sumatra.export 'disqusCounter', ->

            class DisqusCountIndicatorPlugin extends ScriptTagInjector
                defaults:
                    shortname: ''

                initialize: ->
                    @inject $("head"), "//#{@options.shortname}.disqus.com/count.js"
