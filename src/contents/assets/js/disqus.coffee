define [
    'lodash'
    'jquery'
    './plugin'
    ], (_, $, sumatra) ->
        
        class ScriptTagInjector extends sumatra.Plugin

            inject: (target, source) ->
                $ "<script>"
                    .attr
                        type: 'text/javascript'
                        async: true
                        src: source
                    .appendTo target

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
